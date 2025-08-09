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

export type TaskType = 'coding' | 'systemDesign' | 'infra' | 'behavioral';
