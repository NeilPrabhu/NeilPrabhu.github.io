export interface InterviewTask {
  globalDay: number;
  week: number;
  dayOfWeek: number;
  codingTask: string;
  systemDesignTask: string;
  infraTask: string;
  behavioralTask: string;
  doneCoding: boolean;
  doneSD: boolean;
  doneInfra: boolean;
  doneBehavioral: boolean;
  notes: string;
}

export interface WeekSummary {
  week: number;
  totalTasks: number;
  completedTasks: number;
  completionRate: number;
}

export interface ProgressStats {
  totalDays: number;
  completedDays: number;
  overallProgress: number;
  codingProgress: number;
  systemDesignProgress: number;
  infraProgress: number;
  behavioralProgress: number;
  currentWeek: number;
  currentDay: number;
}

export interface AccountabilityData {
  startDate: string; // ISO date string when user started
  lastCheckIn: string; // ISO date string of last activity
  currentStreak: number; // consecutive days with activity
  longestStreak: number; // best streak achieved
  pausedUntil?: string; // optional pause date
  skippedDays: number; // total days skipped/behind
  totalCheckIns: number; // total days with any activity
}

export interface TimelineStatus {
  expectedDay: number; // where they should be based on calendar
  actualDay: number; // furthest day they've completed
  daysAhead: number; // positive if ahead, negative if behind
  status: 'ahead' | 'onTrack' | 'behind' | 'paused';
  recommendedAction: string;
  catchUpDaysNeeded: number;
}

export type TaskType = 'coding' | 'systemDesign' | 'infra' | 'behavioral';
