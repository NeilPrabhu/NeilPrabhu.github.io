import { InterviewTask, ProgressStats, TaskType } from './types';
import { interviewPrepData } from './data';

const STORAGE_KEY = 'interview_prep_progress';

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
