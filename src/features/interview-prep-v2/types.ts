// New Interview Prep System Based on 2025 FAANG Research

export interface StudyWeek {
  weekNumber: number;
  title: string;
  description: string;
  focus: WeekFocus[];
  milestones: Milestone[];
  recommendedHours: number;
}

export interface WeekFocus {
  area: 'coding' | 'systemDesign' | 'behavioral' | 'sreSpecific';
  percentage: number;
  description: string;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  type: 'assessment' | 'practice' | 'mock' | 'review';
  completed: boolean;
  dueDate?: string;
}

// Pattern-Based Learning System
export interface CodingPattern {
  id: string;
  name: string;
  description: string;
  problems: Problem[];
  masteryLevel: 0 | 1 | 2 | 3; // 0=not started, 1=learning, 2=practicing, 3=mastered
  lastReviewed?: string;
  nextReview?: string; // Spaced repetition
}

export interface Problem {
  id: string;
  title: string;
  leetcodeId?: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pattern: string;
  companies: string[]; // FAANG frequency
  attempts: Attempt[];
  mastered: boolean;
  lastAttempt?: string;
  nextReview?: string;
}

export interface Attempt {
  date: string;
  timeSpent: number; // minutes
  solved: boolean;
  needsReview: boolean;
  notes: string;
  approach: string;
}

// System Design Focus
export interface SystemDesignTopic {
  id: string;
  title: string;
  category: 'fundamentals' | 'casestudy' | 'components' | 'advanced';
  concepts: string[];
  practiceProblems: string[];
  resourceLinks: string[];
  masteryLevel: 0 | 1 | 2 | 3;
  lastStudied?: string;
  nextReview?: string;
}

// SRE-Specific Track
export interface SRETopic {
  id: string;
  title: string;
  category: 'linux' | 'networking' | 'monitoring' | 'incident' | 'automation';
  concepts: string[];
  scenarios: SREScenario[];
  masteryLevel: 0 | 1 | 2 | 3;
  lastPracticed?: string;
}

export interface SREScenario {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  solution: string;
  practiced: boolean;
  lastAttempt?: string;
}

// Behavioral Stories Framework
export interface BehavioralStory {
  id: string;
  category: 'leadership' | 'conflict' | 'failure' | 'innovation' | 'challenge';
  situation: string;
  task: string;
  action: string;
  result: string;
  companies: string[]; // Which companies this story works for
  refined: boolean;
  lastPracticed?: string;
}

// Progress Tracking (Knowledge Retention Focus)
export interface WeeklyProgress {
  weekNumber: number;
  startDate: string;
  endDate: string;
  hoursStudied: number;
  targetHours: number;
  achievements: Achievement[];
  challenges: string[];
  nextWeekFocus: string[];
}

export interface Achievement {
  type: 'pattern_mastered' | 'mock_completed' | 'story_refined' | 'concept_learned';
  title: string;
  description: string;
  date: string;
}

// Spaced Repetition System
export interface ReviewItem {
  id: string;
  type: 'pattern' | 'problem' | 'concept' | 'story';
  title: string;
  lastReviewed: string;
  nextReview: string;
  difficulty: number; // Spaced repetition difficulty
  interval: number; // Days until next review
  repetitions: number;
}

// Mock Interview Tracking
export interface MockInterview {
  id: string;
  date: string;
  type: 'coding' | 'systemDesign' | 'behavioral' | 'sre';
  duration: number;
  interviewer: string; // AI, peer, professional
  performance: MockPerformance;
  feedback: string[];
  areasToImprove: string[];
  followUpActions: string[];
}

export interface MockPerformance {
  communication: number; // 1-5
  technicalAccuracy: number;
  problemSolving: number;
  overall: number;
  notes: string;
}

// Overall Program State
export interface PrepProgram {
  id: string;
  startDate: string;
  targetDate: string; // Interview date
  programType: 'intensive6' | 'balanced8' | 'extended10'; // 6, 8, or 10 weeks
  currentWeek: number;
  track: 'backend' | 'sre' | 'fullstack';
  studySchedule: StudySchedule;
  preferences: StudyPreferences;
}

export interface StudySchedule {
  dailyHours: number;
  weeklyHours: number;
  preferredTimes: string[];
  restDays: string[];
  mockInterviewFrequency: 'weekly' | 'biweekly';
}

export interface StudyPreferences {
  weakAreas: string[];
  targetCompanies: string[];
  experienceLevel: number; // Years
  programmingLanguage: 'python' | 'java' | 'cpp' | 'javascript';
  focusAreas: string[];
}

// Analytics and Insights
export interface ProgressAnalytics {
  overallProgress: number;
  areaBreakdown: {
    coding: number;
    systemDesign: number;
    behavioral: number;
    sreSpecific?: number;
  };
  retentionRate: number; // Spaced repetition success
  mockTrend: number[]; // Mock interview scores over time
  timeDistribution: {
    area: string;
    hours: number;
    percentage: number;
  }[];
  readinessScore: number; // AI-calculated interview readiness
  recommendations: string[];
}
