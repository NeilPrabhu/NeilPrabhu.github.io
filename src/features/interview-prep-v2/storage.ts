// Storage & Logic for Research-Based Interview Prep System

import { 
  PrepProgram, 
  WeeklyProgress, 
  CodingPattern, 
  Problem, 
  Attempt,
  SystemDesignTopic,
  SRETopic,
  BehavioralStory,
  MockInterview,
  ReviewItem,
  ProgressAnalytics
} from './types';
import { defaultProgram, intensiveProgram, codingPatterns } from './data';

const STORAGE_KEYS = {
  PROGRAM: 'interview_prep_v2_program',
  PROGRESS: 'interview_prep_v2_progress',
  PATTERNS: 'interview_prep_v2_patterns',
  SYSTEM_DESIGN: 'interview_prep_v2_system_design',
  SRE_TOPICS: 'interview_prep_v2_sre',
  BEHAVIORAL: 'interview_prep_v2_behavioral',
  MOCKS: 'interview_prep_v2_mocks',
  REVIEWS: 'interview_prep_v2_reviews'
};

// ===============================
// PROGRAM MANAGEMENT
// ===============================

export const initializeProgram = (preferences?: Partial<PrepProgram>): PrepProgram => {
  const program = { ...defaultProgram, ...preferences };
  localStorage.setItem(STORAGE_KEYS.PROGRAM, JSON.stringify(program));
  
  // Initialize coding patterns
  localStorage.setItem(STORAGE_KEYS.PATTERNS, JSON.stringify(codingPatterns));
  
  return program;
};

export const loadProgram = (): PrepProgram => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.PROGRAM);
    return saved ? JSON.parse(saved) : initializeProgram();
  } catch (error) {
    console.error('Error loading program:', error);
    return initializeProgram();
  }
};

export const saveProgram = (program: PrepProgram): void => {
  localStorage.setItem(STORAGE_KEYS.PROGRAM, JSON.stringify(program));
};

// ===============================
// SPACED REPETITION SYSTEM
// ===============================

// SuperMemo 2 Algorithm for spaced repetition
export const calculateNextReview = (
  difficulty: number, // 0-5 (how hard to remember)
  repetitions: number,
  interval: number
): { newInterval: number; newDifficulty: number } => {
  let newDifficulty = difficulty;
  let newInterval = interval;

  if (difficulty >= 3) {
    // Successful recall
    if (repetitions === 0) {
      newInterval = 1;
    } else if (repetitions === 1) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * (2.5 - (5 - difficulty) * 0.1));
    }
    newDifficulty = Math.max(1.3, difficulty + (0.1 - (5 - difficulty) * (0.08 + (5 - difficulty) * 0.02)));
  } else {
    // Failed recall - restart
    newInterval = 1;
    newDifficulty = Math.max(1.3, difficulty - 0.2);
  }

  return { newInterval, newDifficulty };
};

export const getItemsForReview = (): ReviewItem[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    if (!saved) return [];
    
    const reviews: ReviewItem[] = JSON.parse(saved);
    const today = new Date().toISOString().split('T')[0];
    
    return reviews.filter(item => item.nextReview <= today);
  } catch (error) {
    console.error('Error loading review items:', error);
    return [];
  }
};

export const updateReviewItem = (
  itemId: string, 
  type: ReviewItem['type'],
  difficulty: number // 0-5 rating
): void => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.REVIEWS) || '[]';
    let reviews: ReviewItem[] = JSON.parse(saved);
    
    const existingIndex = reviews.findIndex(r => r.id === itemId);
    const today = new Date().toISOString().split('T')[0];
    
    if (existingIndex >= 0) {
      const existing = reviews[existingIndex];
      const { newInterval, newDifficulty } = calculateNextReview(
        difficulty,
        existing.repetitions + 1,
        existing.interval
      );
      
      reviews[existingIndex] = {
        ...existing,
        lastReviewed: today,
        nextReview: new Date(Date.now() + newInterval * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        difficulty: newDifficulty,
        interval: newInterval,
        repetitions: existing.repetitions + 1
      };
    } else {
      // New item
      const { newInterval, newDifficulty } = calculateNextReview(difficulty, 0, 1);
      
      reviews.push({
        id: itemId,
        type,
        title: itemId, // Will be updated with actual title
        lastReviewed: today,
        nextReview: new Date(Date.now() + newInterval * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        difficulty: newDifficulty,
        interval: newInterval,
        repetitions: 1
      });
    }
    
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(reviews));
  } catch (error) {
    console.error('Error updating review item:', error);
  }
};

// ===============================
// CODING PATTERNS & PROBLEMS
// ===============================

export const loadCodingPatterns = (): CodingPattern[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.PATTERNS);
    return saved ? JSON.parse(saved) : codingPatterns;
  } catch (error) {
    console.error('Error loading coding patterns:', error);
    return codingPatterns;
  }
};

export const saveCodingPatterns = (patterns: CodingPattern[]): void => {
  localStorage.setItem(STORAGE_KEYS.PATTERNS, JSON.stringify(patterns));
};

export const recordProblemAttempt = (
  patternId: string,
  problemId: string,
  attempt: Omit<Attempt, 'date'>
): CodingPattern[] => {
  const patterns = loadCodingPatterns();
  const today = new Date().toISOString().split('T')[0];
  
  const updatedPatterns = patterns.map(pattern => {
    if (pattern.id === patternId) {
      const updatedProblems = pattern.problems.map(problem => {
        if (problem.id === problemId) {
          const newAttempt: Attempt = {
            ...attempt,
            date: today
          };
          
          const updatedProblem = {
            ...problem,
            attempts: [...problem.attempts, newAttempt],
            lastAttempt: today
          };
          
          // Check if problem should be marked as mastered
          const recentAttempts = updatedProblem.attempts.slice(-3);
          const masteredCheck = recentAttempts.length >= 2 && 
                               recentAttempts.every(a => a.solved && !a.needsReview);
          
          if (masteredCheck) {
            updatedProblem.mastered = true;
            // Add to spaced repetition system
            updateReviewItem(problemId, 'problem', 4);
          } else if (attempt.needsReview) {
            // Add to review if struggling
            updateReviewItem(problemId, 'problem', 2);
          }
          
          return updatedProblem;
        }
        return problem;
      });
      
      // Update pattern mastery level
      const masteredCount = updatedProblems.filter(p => p.mastered).length;
      const totalCount = updatedProblems.length;
      let newMasteryLevel: 0 | 1 | 2 | 3 = 0;
      
      if (masteredCount === totalCount) newMasteryLevel = 3;
      else if (masteredCount >= totalCount * 0.75) newMasteryLevel = 2;
      else if (masteredCount >= totalCount * 0.25) newMasteryLevel = 1;
      
      return {
        ...pattern,
        problems: updatedProblems,
        masteryLevel: newMasteryLevel,
        lastReviewed: today
      };
    }
    return pattern;
  });
  
  saveCodingPatterns(updatedPatterns);
  return updatedPatterns;
};

// ===============================
// WEEKLY PROGRESS TRACKING
// ===============================

export const loadWeeklyProgress = (): WeeklyProgress[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading weekly progress:', error);
    return [];
  }
};

export const getCurrentWeekProgress = (weekNumber: number): WeeklyProgress | null => {
  const allProgress = loadWeeklyProgress();
  return allProgress.find(p => p.weekNumber === weekNumber) || null;
};

export const updateWeeklyProgress = (weekNumber: number, updates: Partial<WeeklyProgress>): void => {
  const allProgress = loadWeeklyProgress();
  const existingIndex = allProgress.findIndex(p => p.weekNumber === weekNumber);
  
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - (weekStart.getDay() + 6) % 7); // Get Monday
  
  const weekProgress: WeeklyProgress = {
    weekNumber,
    startDate: weekStart.toISOString().split('T')[0],
    endDate: new Date(weekStart.getTime() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    hoursStudied: 0,
    targetHours: intensiveProgram[weekNumber - 1]?.recommendedHours || 20,
    achievements: [],
    challenges: [],
    nextWeekFocus: [],
    ...updates
  };
  
  if (existingIndex >= 0) {
    allProgress[existingIndex] = { ...allProgress[existingIndex], ...weekProgress };
  } else {
    allProgress.push(weekProgress);
  }
  
  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(allProgress));
};

export const addStudySession = (
  weekNumber: number, 
  hours: number, 
  area: string,
  achievements?: string[]
): void => {
  const currentProgress = getCurrentWeekProgress(weekNumber);
  const newHours = (currentProgress?.hoursStudied || 0) + hours;
  
  const newAchievements = achievements?.map(achievement => ({
    type: 'concept_learned' as const,
    title: achievement,
    description: `Studied ${area}`,
    date: new Date().toISOString().split('T')[0]
  })) || [];
  
  updateWeeklyProgress(weekNumber, {
    hoursStudied: newHours,
    achievements: [...(currentProgress?.achievements || []), ...newAchievements]
  });
};

// ===============================
// MOCK INTERVIEWS
// ===============================

export const loadMockInterviews = (): MockInterview[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.MOCKS);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error loading mock interviews:', error);
    return [];
  }
};

export const saveMockInterview = (mock: MockInterview): void => {
  const mocks = loadMockInterviews();
  mocks.push(mock);
  localStorage.setItem(STORAGE_KEYS.MOCKS, JSON.stringify(mocks));
  
  // Add achievements based on performance
  const program = loadProgram();
  if (mock.performance.overall >= 4) {
    updateWeeklyProgress(program.currentWeek, {
      achievements: [{
        type: 'mock_completed',
        title: 'Excellent Mock Interview',
        description: `Scored ${mock.performance.overall}/5 in ${mock.type} interview`,
        date: mock.date
      }]
    });
  }
};

// ===============================
// PROGRESS ANALYTICS
// ===============================

export const calculateProgressAnalytics = (): ProgressAnalytics => {
  const program = loadProgram();
  const patterns = loadCodingPatterns();
  const weeklyProgress = loadWeeklyProgress();
  const mocks = loadMockInterviews();
  
  // Calculate overall progress based on current week
  const overallProgress = Math.min((program.currentWeek / 8) * 100, 100);
  
  // Calculate area breakdown
  const totalHours = weeklyProgress.reduce((sum, week) => sum + week.hoursStudied, 0);
  const codingHours = totalHours * 0.3; // Estimated based on focus percentages
  const systemDesignHours = totalHours * 0.4;
  const behavioralHours = totalHours * 0.2;
  const sreHours = totalHours * 0.1;
  
  // Calculate retention rate from spaced repetition
  const reviews = getItemsForReview();
  const completedReviews = reviews.filter(r => r.repetitions > 0);
  const retentionRate = completedReviews.length > 0 ? 
    (completedReviews.filter(r => r.difficulty >= 3).length / completedReviews.length) * 100 : 0;
  
  // Calculate mock interview trend
  const mockTrend = mocks
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .map(m => m.performance.overall);
  
  // Calculate pattern mastery
  const masteredPatterns = patterns.filter(p => p.masteryLevel >= 3).length;
  const codingProgress = (masteredPatterns / patterns.length) * 100;
  
  // Simple readiness score calculation
  const readinessScore = Math.min(
    (overallProgress * 0.3) +
    (codingProgress * 0.25) +
    (retentionRate * 0.25) +
    ((mockTrend[mockTrend.length - 1] || 0) * 20 * 0.2), // Last mock score
    100
  );
  
  const recommendations: string[] = [];
  if (codingProgress < 50) recommendations.push("Focus more on pattern mastery");
  if (retentionRate < 70) recommendations.push("Increase spaced repetition practice");
  if (mockTrend.length === 0) recommendations.push("Schedule mock interviews");
  if (readinessScore < 60) recommendations.push("Consider extending preparation timeline");
  
  return {
    overallProgress,
    areaBreakdown: {
      coding: codingProgress,
      systemDesign: 70, // Placeholder - would calculate from system design topics
      behavioral: 60, // Placeholder - would calculate from story refinement
      sreSpecific: 50 // Placeholder - would calculate from SRE scenarios
    },
    retentionRate,
    mockTrend,
    timeDistribution: [
      { area: 'Coding', hours: codingHours, percentage: 30 },
      { area: 'System Design', hours: systemDesignHours, percentage: 40 },
      { area: 'Behavioral', hours: behavioralHours, percentage: 20 },
      { area: 'SRE', hours: sreHours, percentage: 10 }
    ],
    readinessScore,
    recommendations
  };
};

// ===============================
// UTILITY FUNCTIONS
// ===============================

export const getNextMilestones = (weekNumber: number) => {
  const currentWeek = intensiveProgram[weekNumber - 1];
  return currentWeek?.milestones || [];
};

export const getWeekFocus = (weekNumber: number) => {
  const currentWeek = intensiveProgram[weekNumber - 1];
  return currentWeek?.focus || [];
};

export const exportProgress = (): string => {
  const data = {
    program: loadProgram(),
    patterns: loadCodingPatterns(),
    progress: loadWeeklyProgress(),
    mocks: loadMockInterviews(),
    reviews: getItemsForReview()
  };
  
  return JSON.stringify(data, null, 2);
};

export const importProgress = (jsonData: string): boolean => {
  try {
    const data = JSON.parse(jsonData);
    
    if (data.program) localStorage.setItem(STORAGE_KEYS.PROGRAM, JSON.stringify(data.program));
    if (data.patterns) localStorage.setItem(STORAGE_KEYS.PATTERNS, JSON.stringify(data.patterns));
    if (data.progress) localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(data.progress));
    if (data.mocks) localStorage.setItem(STORAGE_KEYS.MOCKS, JSON.stringify(data.mocks));
    if (data.reviews) localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(data.reviews));
    
    return true;
  } catch (error) {
    console.error('Error importing progress:', error);
    return false;
  }
};
