import { InterviewTask, ProgressStats, TaskType, AccountabilityData, TimelineStatus } from './types';
import { interviewPrepData } from './data';

const STORAGE_KEY = 'interview_prep_progress';
const ACCOUNTABILITY_KEY = 'interview_prep_accountability';

// Load progress from localStorage, merge with base data
export const loadProgress = (): InterviewTask[] => {
  try {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (!savedProgress) {
      return [...interviewPrepData];
    }

    const progressMap = new Map(JSON.parse(savedProgress));
    
    return interviewPrepData.map(task => {
      const saved = progressMap.get(task.globalDay);
      if (saved) {
        return {
          ...task,
          doneCoding: saved.doneCoding || false,
          doneSD: saved.doneSD || false,
          doneInfra: saved.doneInfra || false,
          doneBehavioral: saved.doneBehavioral || false,
          notes: saved.notes || ""
        };
      }
      return task;
    });
  } catch (error) {
    console.error('Error loading progress:', error);
    return [...interviewPrepData];
  }
};

// Save progress to localStorage
export const saveProgress = (tasks: InterviewTask[]): void => {
  try {
    // Only save the progress fields to minimize storage
    const progressData = tasks.map(task => [
      task.globalDay,
      {
        doneCoding: task.doneCoding,
        doneSD: task.doneSD,
        doneInfra: task.doneInfra,
        doneBehavioral: task.doneBehavioral,
        notes: task.notes
      }
    ]);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

// Update a specific task
export const updateTask = (
  tasks: InterviewTask[], 
  globalDay: number, 
  updates: Partial<InterviewTask>
): InterviewTask[] => {
  const updatedTasks = tasks.map(task => 
    task.globalDay === globalDay 
      ? { ...task, ...updates }
      : task
  );
  
  saveProgress(updatedTasks);
  return updatedTasks;
};

// Toggle a specific task completion
export const toggleTaskCompletion = (
  tasks: InterviewTask[],
  globalDay: number,
  taskType: TaskType
): InterviewTask[] => {
  const taskField = `done${taskType === 'coding' ? 'Coding' : 
                            taskType === 'systemDesign' ? 'SD' :
                            taskType === 'infra' ? 'Infra' : 'Behavioral'}` as keyof InterviewTask;

  const updatedTasks = tasks.map(task => 
    task.globalDay === globalDay 
      ? { ...task, [taskField]: !task[taskField] }
      : task
  );
  
  saveProgress(updatedTasks);
  
  // Update accountability when completing a task (not when unchecking)
  const task = updatedTasks.find(t => t.globalDay === globalDay);
  if (task && task[taskField]) {
    updateAccountabilityOnTaskComplete(updatedTasks, globalDay);
  }
  
  return updatedTasks;
};

// Calculate progress statistics
export const calculateProgress = (tasks: InterviewTask[]): ProgressStats => {
  const totalDays = tasks.length;
  
  let completedDays = 0;
  let codingCompleted = 0;
  let sdCompleted = 0;
  let infraCompleted = 0;
  let behavioralCompleted = 0;

  tasks.forEach(task => {
    if (task.doneCoding) codingCompleted++;
    if (task.doneSD) sdCompleted++;
    if (task.doneInfra) infraCompleted++;
    if (task.doneBehavioral) behavioralCompleted++;
    
    // A day is considered complete if all 4 tasks are done
    if (task.doneCoding && task.doneSD && task.doneInfra && task.doneBehavioral) {
      completedDays++;
    }
  });

  // Find current day (first incomplete day or last day if all complete)
  let currentDay = 1;
  for (const task of tasks) {
    if (!(task.doneCoding && task.doneSD && task.doneInfra && task.doneBehavioral)) {
      currentDay = task.globalDay;
      break;
    }
  }
  if (currentDay === 1 && completedDays === totalDays) {
    currentDay = totalDays;
  }

  const currentWeek = Math.ceil(currentDay / 7);

  return {
    totalDays,
    completedDays,
    overallProgress: Math.round((completedDays / totalDays) * 100),
    codingProgress: Math.round((codingCompleted / totalDays) * 100),
    systemDesignProgress: Math.round((sdCompleted / totalDays) * 100),
    infraProgress: Math.round((infraCompleted / totalDays) * 100),
    behavioralProgress: Math.round((behavioralCompleted / totalDays) * 100),
    currentWeek,
    currentDay
  };
};

// Export progress as CSV
export const exportToCSV = (tasks: InterviewTask[]): string => {
  const headers = [
    'Global Day', 'Week', 'Day (1=Mon..7=Sun)', 'Coding Task', 'System Design Task', 
    'Infra Task', 'Behavioral Task', 'Done Coding', 'Done SD', 'Done Infra', 
    'Done Behavioral', 'Notes'
  ];

  const rows = tasks.map(task => [
    task.globalDay,
    task.week,
    task.dayOfWeek,
    `"${task.codingTask}"`,
    `"${task.systemDesignTask}"`,
    `"${task.infraTask}"`,
    `"${task.behavioralTask}"`,
    task.doneCoding,
    task.doneSD,
    task.doneInfra,
    task.doneBehavioral,
    `"${task.notes}"`
  ]);

  return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
};

// Download CSV file
export const downloadCSV = (tasks: InterviewTask[]): void => {
  const csv = exportToCSV(tasks);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `interview_prep_progress_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
};

// ===============================
// ACCOUNTABILITY SYSTEM
// ===============================

// Initialize accountability data when user starts
export const initializeAccountability = (): AccountabilityData => {
  const today = new Date().toISOString().split('T')[0];
  const accountabilityData: AccountabilityData = {
    startDate: today,
    lastCheckIn: today,
    currentStreak: 0,
    longestStreak: 0,
    skippedDays: 0,
    totalCheckIns: 0
  };
  
  localStorage.setItem(ACCOUNTABILITY_KEY, JSON.stringify(accountabilityData));
  return accountabilityData;
};

// Load accountability data
export const loadAccountability = (): AccountabilityData => {
  try {
    const saved = localStorage.getItem(ACCOUNTABILITY_KEY);
    if (!saved) {
      return initializeAccountability();
    }
    return JSON.parse(saved);
  } catch (error) {
    console.error('Error loading accountability data:', error);
    return initializeAccountability();
  }
};

// Save accountability data
export const saveAccountability = (data: AccountabilityData): void => {
  try {
    localStorage.setItem(ACCOUNTABILITY_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving accountability data:', error);
  }
};

// Calculate what day the user should be on based on their start date
export const calculateExpectedDay = (startDate: string, pausedUntil?: string): number => {
  const start = new Date(startDate);
  const today = new Date();
  
  // If paused, don't advance expected day
  if (pausedUntil && new Date(pausedUntil) > today) {
    return 1;
  }
  
  const daysPassed = Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  
  // Account for weekends (optional - can be configured)
  // For now, let's include weekends in the count for maximum accountability
  return Math.min(daysPassed + 1, 70); // Don't go beyond day 70
};

// Calculate timeline status
export const calculateTimelineStatus = (tasks: InterviewTask[], accountability: AccountabilityData): TimelineStatus => {
  const expectedDay = calculateExpectedDay(accountability.startDate, accountability.pausedUntil);
  
  // Find the furthest day where all tasks are complete
  let actualDay = 0;
  for (const task of tasks) {
    if (task.doneCoding && task.doneSD && task.doneInfra && task.doneBehavioral) {
      actualDay = Math.max(actualDay, task.globalDay);
    } else {
      break; // Stop at first incomplete day
    }
  }
  
  const daysAhead = actualDay - expectedDay;
  
  let status: TimelineStatus['status'];
  let recommendedAction: string;
  let catchUpDaysNeeded = 0;
  
  if (accountability.pausedUntil && new Date(accountability.pausedUntil) > new Date()) {
    status = 'paused';
    recommendedAction = `Paused until ${new Date(accountability.pausedUntil).toLocaleDateString()}. Resume when ready!`;
  } else if (daysAhead > 2) {
    status = 'ahead';
    recommendedAction = 'Excellent! You\'re ahead of schedule. Consider reviewing previous topics or taking a rest day.';
  } else if (daysAhead >= -1) {
    status = 'onTrack';
    recommendedAction = 'Perfect! You\'re on track. Keep up the consistent daily practice.';
  } else {
    status = 'behind';
    catchUpDaysNeeded = Math.abs(daysAhead);
    recommendedAction = `You're ${catchUpDaysNeeded} day${catchUpDaysNeeded > 1 ? 's' : ''} behind. Consider doing extra tasks today or this weekend to catch up.`;
  }
  
  return {
    expectedDay,
    actualDay,
    daysAhead,
    status,
    recommendedAction,
    catchUpDaysNeeded
  };
};

// Update accountability when user completes any task
export const updateAccountabilityOnTaskComplete = (
  tasks: InterviewTask[], 
  globalDay: number
): AccountabilityData => {
  const accountability = loadAccountability();
  const today = new Date().toISOString().split('T')[0];
  
  // Check if this is their first activity today
  const isFirstActivityToday = accountability.lastCheckIn !== today;
  
  if (isFirstActivityToday) {
    // Update check-in data
    accountability.lastCheckIn = today;
    accountability.totalCheckIns += 1;
    
    // Update streak
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    if (accountability.lastCheckIn === yesterdayStr || accountability.totalCheckIns === 1) {
      // Continuing streak or first day
      accountability.currentStreak += 1;
    } else {
      // Broke streak, start over
      accountability.currentStreak = 1;
    }
    
    // Update longest streak
    accountability.longestStreak = Math.max(accountability.longestStreak, accountability.currentStreak);
  }
  
  saveAccountability(accountability);
  return accountability;
};

// Pause the timeline (for vacations, emergencies, etc.)
export const pauseTimeline = (days: number): AccountabilityData => {
  const accountability = loadAccountability();
  const pauseUntil = new Date();
  pauseUntil.setDate(pauseUntil.getDate() + days);
  accountability.pausedUntil = pauseUntil.toISOString().split('T')[0];
  
  saveAccountability(accountability);
  return accountability;
};

// Resume from pause
export const resumeTimeline = (): AccountabilityData => {
  const accountability = loadAccountability();
  delete accountability.pausedUntil;
  
  saveAccountability(accountability);
  return accountability;
};

// Get motivational message based on progress
export const getMotivationalMessage = (timelineStatus: TimelineStatus, accountability: AccountabilityData): string => {
  const { status } = timelineStatus;
  const { currentStreak } = accountability;
  
  if (status === 'ahead') {
    return `🚀 Amazing! You're ${Math.abs(timelineStatus.daysAhead)} days ahead and on a ${currentStreak}-day streak!`;
  } else if (status === 'onTrack') {
    return `🎯 Perfect pace! ${currentStreak} days strong. Consistency is key to success!`;
  } else if (status === 'behind') {
    return `💪 Don't give up! Every expert was once a beginner. Small daily progress adds up!`;
  } else {
    return `⏸️ Take your time. Resume when you're ready to continue your journey!`;
  }
};
