// Research-Based Interview Prep Program (6-10 Week Intensive)
// Based on 2025 FAANG strategies emphasizing senior-level focus

import { StudyWeek, CodingPattern, SystemDesignTopic, SRETopic, BehavioralStory, PrepProgram } from './types';

// 8-Week Intensive Program (Research Optimal)
export const intensiveProgram: StudyWeek[] = [
  {
    weekNumber: 1,
    title: "Foundation & Assessment",
    description: "Rebuild fundamentals and assess current skill level",
    focus: [
      { area: 'coding', percentage: 40, description: 'Core data structures review' },
      { area: 'systemDesign', percentage: 30, description: 'System design fundamentals' },
      { area: 'behavioral', percentage: 20, description: 'STAR story development' },
      { area: 'sreSpecific', percentage: 10, description: 'SRE concepts overview' }
    ],
    milestones: [
      {
        id: 'baseline-assessment',
        title: 'Baseline Skills Assessment',
        description: 'Complete diagnostic coding problems and system design',
        type: 'assessment',
        completed: false
      },
      {
        id: 'story-brainstorm',
        title: 'Brainstorm 8-10 STAR Stories',
        description: 'Draft behavioral stories covering all categories',
        type: 'practice',
        completed: false
      },
      {
        id: 'week1-patterns',
        title: 'Master Array & String Patterns',
        description: 'Complete two-pointers and sliding window problems',
        type: 'practice',
        completed: false
      }
    ],
    recommendedHours: 18
  },
  {
    weekNumber: 2,
    title: "Pattern Recognition & Core Design",
    description: "Build pattern recognition skills and system design thinking",
    focus: [
      { area: 'coding', percentage: 35, description: 'Hash maps and binary search patterns' },
      { area: 'systemDesign', percentage: 40, description: 'Learn design framework and first case study' },
      { area: 'behavioral', percentage: 15, description: 'Refine 3-4 key stories' },
      { area: 'sreSpecific', percentage: 10, description: 'Linux basics and troubleshooting' }
    ],
    milestones: [
      {
        id: 'first-design',
        title: 'Complete First System Design',
        description: 'Design URL Shortener using learned framework',
        type: 'practice',
        completed: false
      },
      {
        id: 'pattern-mastery-1',
        title: 'Master Hash Map Patterns',
        description: 'Solve all two-sum variants and hash map problems',
        type: 'practice',
        completed: false
      },
      {
        id: 'first-mock',
        title: 'First Mock Interview',
        description: 'Complete coding mock to assess communication',
        type: 'mock',
        completed: false
      }
    ],
    recommendedHours: 20
  },
  {
    weekNumber: 3,
    title: "Tree & Graph Mastery + Design Deep Dive",
    description: "Master tree/graph algorithms and complex system design",
    focus: [
      { area: 'coding', percentage: 30, description: 'Trees, graphs, BFS/DFS mastery' },
      { area: 'systemDesign', percentage: 45, description: 'Scalability and database design' },
      { area: 'behavioral', percentage: 15, description: 'Practice refined stories' },
      { area: 'sreSpecific', percentage: 10, description: 'Monitoring and alerting' }
    ],
    milestones: [
      {
        id: 'tree-graph-mastery',
        title: 'Master Tree & Graph Patterns',
        description: 'Complete all DFS/BFS and tree traversal problems',
        type: 'practice',
        completed: false
      },
      {
        id: 'scalability-design',
        title: 'Design Scalable System',
        description: 'Design Twitter/Instagram with focus on scale',
        type: 'practice',
        completed: false
      },
      {
        id: 'sre-scenario-1',
        title: 'SRE Troubleshooting Scenario',
        description: 'Practice debugging production outage',
        type: 'practice',
        completed: false
      }
    ],
    recommendedHours: 22
  },
  {
    weekNumber: 4,
    title: "Advanced Algorithms + SRE Focus",
    description: "Tackle harder algorithms and SRE-specific scenarios",
    focus: [
      { area: 'coding', percentage: 35, description: 'Dynamic programming and backtracking' },
      { area: 'systemDesign', percentage: 35, description: 'Microservices and distributed systems' },
      { area: 'behavioral', percentage: 10, description: 'Mock behavioral practice' },
      { area: 'sreSpecific', percentage: 20, description: 'SLIs/SLOs and incident response' }
    ],
    milestones: [
      {
        id: 'dp-mastery',
        title: 'Dynamic Programming Breakthrough',
        description: 'Master common DP patterns and optimization',
        type: 'practice',
        completed: false
      },
      {
        id: 'distributed-design',
        title: 'Distributed System Design',
        description: 'Design ride-sharing or messaging system',
        type: 'practice',
        completed: false
      },
      {
        id: 'slo-workshop',
        title: 'SLO Definition Workshop',
        description: 'Define SLIs/SLOs for a complex system',
        type: 'practice',
        completed: false
      },
      {
        id: 'mid-assessment',
        title: 'Mid-Program Assessment',
        description: 'Comprehensive skills check and adjustment',
        type: 'assessment',
        completed: false
      }
    ],
    recommendedHours: 24
  },
  {
    weekNumber: 5,
    title: "Mock Interview Intensive",
    description: "Heavy mock interview practice across all areas",
    focus: [
      { area: 'coding', percentage: 25, description: 'Mock coding interviews and hard problems' },
      { area: 'systemDesign', percentage: 40, description: 'Advanced design mocks' },
      { area: 'behavioral', percentage: 20, description: 'Behavioral mock interviews' },
      { area: 'sreSpecific', percentage: 15, description: 'SRE scenario mocks' }
    ],
    milestones: [
      {
        id: 'coding-mock-marathon',
        title: 'Coding Mock Marathon',
        description: 'Complete 3 coding mocks this week',
        type: 'mock',
        completed: false
      },
      {
        id: 'design-mock-advanced',
        title: 'Advanced System Design Mock',
        description: 'Design complex system with ex-FAANG interviewer',
        type: 'mock',
        completed: false
      },
      {
        id: 'behavioral-refinement',
        title: 'Behavioral Story Refinement',
        description: 'Perfect top 5 stories with mock practice',
        type: 'practice',
        completed: false
      }
    ],
    recommendedHours: 25
  },
  {
    weekNumber: 6,
    title: "Weak Area Focus + Advanced Topics",
    description: "Address identified weak areas and advanced topics",
    focus: [
      { area: 'coding', percentage: 30, description: 'Hard problems and company-specific patterns' },
      { area: 'systemDesign', percentage: 40, description: 'ML systems and modern architectures' },
      { area: 'behavioral', percentage: 15, description: 'Company-specific behavioral prep' },
      { area: 'sreSpecific', percentage: 15, description: 'Advanced SRE topics and automation' }
    ],
    milestones: [
      {
        id: 'hard-problems',
        title: 'Tackle Hard Problems',
        description: 'Solve 10 hard LeetCode problems confidently',
        type: 'practice',
        completed: false
      },
      {
        id: 'modern-system-design',
        title: 'Modern System Design',
        description: 'Design ML/AI system or real-time streaming',
        type: 'practice',
        completed: false
      },
      {
        id: 'company-research',
        title: 'Company-Specific Research',
        description: 'Deep dive into target company culture and values',
        type: 'review',
        completed: false
      }
    ],
    recommendedHours: 25
  },
  {
    weekNumber: 7,
    title: "Polish & Integration",
    description: "Polish all skills and integrate learnings",
    focus: [
      { area: 'coding', percentage: 25, description: 'Speed and accuracy improvement' },
      { area: 'systemDesign', percentage: 45, description: 'Complex multi-service designs' },
      { area: 'behavioral', percentage: 20, description: 'Leadership and senior-level stories' },
      { area: 'sreSpecific', percentage: 10, description: 'SRE leadership scenarios' }
    ],
    milestones: [
      {
        id: 'speed-accuracy',
        title: 'Speed & Accuracy Drills',
        description: 'Solve mediums in under 20 minutes consistently',
        type: 'practice',
        completed: false
      },
      {
        id: 'comprehensive-design',
        title: 'Comprehensive System Design',
        description: 'Design end-to-end system covering all aspects',
        type: 'practice',
        completed: false
      },
      {
        id: 'final-mock-round',
        title: 'Final Mock Interview Round',
        description: 'Complete mock interview in target company format',
        type: 'mock',
        completed: false
      }
    ],
    recommendedHours: 24
  },
  {
    weekNumber: 8,
    title: "Interview Ready & Final Prep",
    description: "Final preparation and confidence building",
    focus: [
      { area: 'coding', percentage: 20, description: 'Light practice and review' },
      { area: 'systemDesign', percentage: 30, description: 'Quick design reviews' },
      { area: 'behavioral', percentage: 30, description: 'Story practice and company research' },
      { area: 'sreSpecific', percentage: 20, description: 'Final SRE scenario review' }
    ],
    milestones: [
      {
        id: 'final-assessment',
        title: 'Final Readiness Assessment',
        description: 'Comprehensive evaluation of interview readiness',
        type: 'assessment',
        completed: false
      },
      {
        id: 'confidence-builder',
        title: 'Confidence Building Session',
        description: 'Practice favorite problems and success stories',
        type: 'review',
        completed: false
      },
      {
        id: 'interview-strategy',
        title: 'Interview Day Strategy',
        description: 'Plan interview day schedule and mindset',
        type: 'review',
        completed: false
      }
    ],
    recommendedHours: 15
  }
];

// Pattern-Based Coding Curriculum (Research-Backed)
export const codingPatterns: CodingPattern[] = [
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    description: 'Use two pointers to solve array/string problems efficiently',
    problems: [
      {
        id: 'two-sum-ii',
        title: 'Two Sum II - Input Array Is Sorted',
        leetcodeId: 167,
        difficulty: 'Easy',
        pattern: 'two-pointers',
        companies: ['Facebook', 'Amazon', 'Google'],
        attempts: [],
        mastered: false
      },
      {
        id: 'three-sum',
        title: '3Sum',
        leetcodeId: 15,
        difficulty: 'Medium',
        pattern: 'two-pointers',
        companies: ['Facebook', 'Amazon', 'Apple'],
        attempts: [],
        mastered: false
      },
      {
        id: 'container-water',
        title: 'Container With Most Water',
        leetcodeId: 11,
        difficulty: 'Medium',
        pattern: 'two-pointers',
        companies: ['Facebook', 'Amazon', 'Bloomberg'],
        attempts: [],
        mastered: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    description: 'Maintain a window to solve substring/subarray problems',
    problems: [
      {
        id: 'longest-substring',
        title: 'Longest Substring Without Repeating Characters',
        leetcodeId: 3,
        difficulty: 'Medium',
        pattern: 'sliding-window',
        companies: ['Amazon', 'Facebook', 'Google'],
        attempts: [],
        mastered: false
      },
      {
        id: 'min-window-substring',
        title: 'Minimum Window Substring',
        leetcodeId: 76,
        difficulty: 'Hard',
        pattern: 'sliding-window',
        companies: ['Facebook', 'Uber', 'LinkedIn'],
        attempts: [],
        mastered: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'binary-search',
    name: 'Binary Search',
    description: 'Search in sorted arrays and search spaces efficiently',
    problems: [
      {
        id: 'search-rotated-array',
        title: 'Search in Rotated Sorted Array',
        leetcodeId: 33,
        difficulty: 'Medium',
        pattern: 'binary-search',
        companies: ['Facebook', 'Amazon', 'Microsoft'],
        attempts: [],
        mastered: false
      },
      {
        id: 'find-minimum-rotated',
        title: 'Find Minimum in Rotated Sorted Array',
        leetcodeId: 153,
        difficulty: 'Medium',
        pattern: 'binary-search',
        companies: ['Amazon', 'Microsoft'],
        attempts: [],
        mastered: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'dynamic-programming',
    name: 'Dynamic Programming',
    description: 'Solve optimization problems using memoization and tabulation',
    problems: [
      {
        id: 'coin-change',
        title: 'Coin Change',
        leetcodeId: 322,
        difficulty: 'Medium',
        pattern: 'dynamic-programming',
        companies: ['Amazon', 'Facebook', 'Bloomberg'],
        attempts: [],
        mastered: false
      },
      {
        id: 'longest-increasing-subsequence',
        title: 'Longest Increasing Subsequence',
        leetcodeId: 300,
        difficulty: 'Medium',
        pattern: 'dynamic-programming',
        companies: ['Amazon', 'Microsoft', 'Facebook'],
        attempts: [],
        mastered: false
      }
    ],
    masteryLevel: 0
  },
  // Add more patterns...
];

// System Design Topics (Senior-Level Focus)
export const systemDesignTopics: SystemDesignTopic[] = [
  {
    id: 'scalability-fundamentals',
    title: 'Scalability Fundamentals',
    category: 'fundamentals',
    concepts: [
      'Horizontal vs Vertical Scaling',
      'Load Balancing Strategies',
      'Database Replication and Sharding',
      'Caching Layers (CDN, Application, Database)',
      'Microservices vs Monolith Trade-offs'
    ],
    practiceProblems: [
      'Design a URL Shortener (Bit.ly)',
      'Design a Simple Social Media Feed'
    ],
    resourceLinks: [
      'System Design Primer (GitHub)',
      'High Scalability Blog',
      'AWS Architecture Center'
    ],
    masteryLevel: 0
  },
  {
    id: 'distributed-systems',
    title: 'Distributed Systems',
    category: 'advanced',
    concepts: [
      'CAP Theorem and Consistency Models',
      'Consensus Algorithms (Raft, Paxos)',
      'Event-Driven Architecture',
      'Message Queues and Event Streaming',
      'Distributed Transactions'
    ],
    practiceProblems: [
      'Design a Distributed Chat System',
      'Design a Ride-Sharing System',
      'Design a Distributed File System'
    ],
    resourceLinks: [
      'Designing Data-Intensive Applications',
      'MIT 6.824 Distributed Systems',
      'Google MapReduce Paper'
    ],
    masteryLevel: 0
  },
  // Add more topics...
];

// SRE-Specific Topics (Based on Research)
export const sreTopics: SRETopic[] = [
  {
    id: 'linux-internals',
    title: 'Linux System Internals',
    category: 'linux',
    concepts: [
      'Process and Thread Management',
      'Memory Management and Virtual Memory',
      'File Systems and I/O',
      'Network Stack and TCP/IP',
      'System Calls and Kernel Interaction'
    ],
    scenarios: [
      {
        id: 'high-cpu-debug',
        title: 'Debug High CPU Usage',
        description: 'Server showing 100% CPU usage, users complaining of slowness',
        difficulty: 'Intermediate',
        category: 'troubleshooting',
        solution: 'Use top/htop, identify process, check with ps, analyze with strace/perf',
        practiced: false
      },
      {
        id: 'memory-leak-investigation',
        title: 'Investigate Memory Leak',
        description: 'Application memory usage continuously growing',
        difficulty: 'Advanced',
        category: 'troubleshooting',
        solution: 'Use ps aux, /proc/meminfo, valgrind, analyze heap dumps',
        practiced: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'monitoring-alerting',
    title: 'Monitoring & Alerting',
    category: 'monitoring',
    concepts: [
      'SLIs, SLOs, and Error Budgets',
      'Four Golden Signals',
      'Prometheus and Grafana',
      'Log Aggregation and Analysis',
      'Distributed Tracing'
    ],
    scenarios: [
      {
        id: 'slo-definition',
        title: 'Define SLOs for Web Service',
        description: 'Create appropriate SLIs/SLOs for a user-facing API',
        difficulty: 'Intermediate',
        category: 'design',
        solution: 'Define availability, latency, error rate SLIs with realistic SLO targets',
        practiced: false
      }
    ],
    masteryLevel: 0
  },
  // Add more SRE topics...
];

// Behavioral Stories Framework (Senior-Level Focus)
export const behavioralCategories: BehavioralStory[] = [
  {
    id: 'leadership-technical-decision',
    category: 'leadership',
    situation: 'Leading a team through a critical technical architecture decision',
    task: 'Choose between microservices and monolith for a new product',
    action: 'Organized technical spike, gathered data, facilitated team decision',
    result: 'Delivered product 2 weeks ahead of schedule with scalable architecture',
    companies: ['Amazon', 'Google', 'Facebook'],
    refined: false
  },
  {
    id: 'conflict-resolution',
    category: 'conflict',
    situation: 'Disagreement between senior engineers on database choice',
    task: 'Resolve technical conflict and maintain team cohesion',
    action: 'Set up neutral evaluation criteria, prototype both solutions',
    result: 'Team aligned on decision, learned evaluation framework for future',
    companies: ['Amazon', 'Netflix', 'Uber'],
    refined: false
  },
  // Add more stories...
];

// Default Program Configuration
export const defaultProgram: PrepProgram = {
  id: 'intensive-8-week',
  startDate: new Date().toISOString().split('T')[0],
  targetDate: new Date(Date.now() + 8 * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  programType: 'balanced8',
  currentWeek: 1,
  track: 'backend',
  studySchedule: {
    dailyHours: 2.5,
    weeklyHours: 20,
    preferredTimes: ['morning', 'evening'],
    restDays: ['Sunday'],
    mockInterviewFrequency: 'weekly'
  },
  preferences: {
    weakAreas: [],
    targetCompanies: ['Google', 'Amazon', 'Facebook', 'Netflix'],
    experienceLevel: 7,
    programmingLanguage: 'python',
    focusAreas: ['system-design', 'behavioral']
  }
};
