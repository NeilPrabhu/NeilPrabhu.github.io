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

// Comprehensive Pattern-Based Coding Curriculum (Migrated from V1 + Research-Backed)
export const codingPatterns: CodingPattern[] = [
  {
    id: 'two-pointers',
    name: 'Two Pointers',
    description: 'Use two pointers to solve array/string problems efficiently',
    problems: [
      {
        id: 'two-sum',
        title: 'Two Sum',
        leetcodeId: 1,
        difficulty: 'Easy',
        pattern: 'two-pointers',
        companies: ['Google', 'Amazon', 'Facebook', 'Apple'],
        attempts: [],
        mastered: false
      },
      {
        id: 'valid-palindrome',
        title: 'Valid Palindrome',
        leetcodeId: 125,
        difficulty: 'Easy',
        pattern: 'two-pointers',
        companies: ['Microsoft', 'Facebook', 'Amazon'],
        attempts: [],
        mastered: false
      },
      {
        id: 'move-zeroes',
        title: 'Move Zeroes',
        leetcodeId: 283,
        difficulty: 'Easy',
        pattern: 'two-pointers',
        companies: ['Facebook', 'Apple', 'Google'],
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
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'sliding-window',
    name: 'Sliding Window',
    description: 'Maintain a window to solve substring/subarray problems efficiently',
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
        id: 'longest-repeating-char',
        title: 'Longest Repeating Character Replacement',
        leetcodeId: 424,
        difficulty: 'Medium',
        pattern: 'sliding-window',
        companies: ['Google', 'Microsoft'],
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
      },
      {
        id: 'permutation-in-string',
        title: 'Permutation in String',
        leetcodeId: 567,
        difficulty: 'Medium',
        pattern: 'sliding-window',
        companies: ['Microsoft', 'Facebook'],
        attempts: [],
        mastered: false
      },
      {
        id: 'find-all-anagrams',
        title: 'Find All Anagrams in a String',
        leetcodeId: 438,
        difficulty: 'Medium',
        pattern: 'sliding-window',
        companies: ['Amazon', 'Google'],
        attempts: [],
        mastered: false
      },
      {
        id: 'sliding-window-maximum',
        title: 'Sliding Window Maximum',
        leetcodeId: 239,
        difficulty: 'Hard',
        pattern: 'sliding-window',
        companies: ['Amazon', 'Google', 'Zenefits'],
        attempts: [],
        mastered: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'hash-maps',
    name: 'Hash Maps & Hash Tables',
    description: 'Use hash maps for fast lookups and frequency counting',
    problems: [
      {
        id: 'valid-anagram',
        title: 'Valid Anagram',
        leetcodeId: 242,
        difficulty: 'Easy',
        pattern: 'hash-maps',
        companies: ['Amazon', 'Facebook', 'Google'],
        attempts: [],
        mastered: false
      },
      {
        id: 'group-anagrams',
        title: 'Group Anagrams',
        leetcodeId: 49,
        difficulty: 'Medium',
        pattern: 'hash-maps',
        companies: ['Amazon', 'Facebook', 'Uber'],
        attempts: [],
        mastered: false
      },
      {
        id: 'top-k-frequent',
        title: 'Top K Frequent Elements',
        leetcodeId: 347,
        difficulty: 'Medium',
        pattern: 'hash-maps',
        companies: ['Amazon', 'Yelp', 'Facebook'],
        attempts: [],
        mastered: false
      },
      {
        id: 'subarray-sum-k',
        title: 'Subarray Sum Equals K',
        leetcodeId: 560,
        difficulty: 'Medium',
        pattern: 'hash-maps',
        companies: ['Facebook', 'Google'],
        attempts: [],
        mastered: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'arrays',
    name: 'Array Manipulation',
    description: 'Master array operations, prefix sums, and kadane algorithm',
    problems: [
      {
        id: 'product-except-self',
        title: 'Product of Array Except Self',
        leetcodeId: 238,
        difficulty: 'Medium',
        pattern: 'arrays',
        companies: ['Amazon', 'Facebook', 'Apple'],
        attempts: [],
        mastered: false
      },
      {
        id: 'maximum-subarray',
        title: 'Maximum Subarray',
        leetcodeId: 53,
        difficulty: 'Easy',
        pattern: 'arrays',
        companies: ['Amazon', 'Microsoft', 'LinkedIn'],
        attempts: [],
        mastered: false
      },
      {
        id: 'daily-temperatures',
        title: 'Daily Temperatures',
        leetcodeId: 739,
        difficulty: 'Medium',
        pattern: 'arrays',
        companies: ['Amazon', 'Google'],
        attempts: [],
        mastered: false
      },
      {
        id: 'best-time-buy-sell',
        title: 'Best Time to Buy and Sell Stock',
        leetcodeId: 121,
        difficulty: 'Easy',
        pattern: 'arrays',
        companies: ['Amazon', 'Facebook', 'Microsoft'],
        attempts: [],
        mastered: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'intervals',
    name: 'Intervals',
    description: 'Handle overlapping intervals and scheduling problems',
    problems: [
      {
        id: 'merge-intervals',
        title: 'Merge Intervals',
        leetcodeId: 56,
        difficulty: 'Medium',
        pattern: 'intervals',
        companies: ['Facebook', 'Google', 'LinkedIn'],
        attempts: [],
        mastered: false
      },
      {
        id: 'insert-interval',
        title: 'Insert Interval',
        leetcodeId: 57,
        difficulty: 'Medium',
        pattern: 'intervals',
        companies: ['Facebook', 'LinkedIn', 'Google'],
        attempts: [],
        mastered: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'stack',
    name: 'Stack & Queue',
    description: 'Use stack and queue data structures for LIFO/FIFO problems',
    problems: [
      {
        id: 'valid-parentheses',
        title: 'Valid Parentheses',
        leetcodeId: 20,
        difficulty: 'Easy',
        pattern: 'stack',
        companies: ['Amazon', 'Facebook', 'Google'],
        attempts: [],
        mastered: false
      },
      {
        id: 'min-stack',
        title: 'Min Stack',
        leetcodeId: 155,
        difficulty: 'Easy',
        pattern: 'stack',
        companies: ['Amazon', 'Google', 'Uber'],
        attempts: [],
        mastered: false
      },
      {
        id: 'daily-temperatures-stack',
        title: 'Daily Temperatures (Stack Approach)',
        leetcodeId: 739,
        difficulty: 'Medium',
        pattern: 'stack',
        companies: ['Amazon', 'Google'],
        attempts: [],
        mastered: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'strings',
    name: 'String Manipulation',
    description: 'String processing, encoding/decoding, and pattern matching',
    problems: [
      {
        id: 'encode-decode-strings',
        title: 'Encode and Decode Strings',
        leetcodeId: 271,
        difficulty: 'Medium',
        pattern: 'strings',
        companies: ['Google', 'Facebook'],
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
    id: 'heaps',
    name: 'Heaps & Priority Queue',
    description: 'Use heaps for priority-based problems and top-K elements',
    problems: [
      {
        id: 'top-k-frequent-heap',
        title: 'Top K Frequent Elements (Heap)',
        leetcodeId: 347,
        difficulty: 'Medium',
        pattern: 'heaps',
        companies: ['Amazon', 'Yelp', 'Facebook'],
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
  }
];

// Comprehensive System Design Topics (Migrated from V1 + Senior-Level Focus)
export const systemDesignTopics: SystemDesignTopic[] = [
  {
    id: 'url-shortener',
    title: 'URL Shortener Design',
    category: 'casestudy',
    concepts: [
      'Database schema design',
      'Short code generation strategies',
      'Caching layers (Redis)',
      'Rate limiting implementation',
      'Analytics and tracking'
    ],
    practiceProblems: [
      'Design Bit.ly with 100M URLs/day',
      'Handle 10:1 read/write ratio',
      'Add custom aliases feature'
    ],
    resourceLinks: [
      'Alex Xu System Design Chapter 1',
      'Bit.ly Architecture Blog',
      'URL Shortener System Design'
    ],
    masteryLevel: 0
  },
  {
    id: 'file-storage-sync',
    title: 'File Storage & Sync (Dropbox)',
    category: 'casestudy',
    concepts: [
      'File chunking and deduplication',
      'Metadata storage design',
      'Conflict resolution (CRDT vs LWW)',
      'Sync algorithms',
      'Delta sync optimization'
    ],
    practiceProblems: [
      'Design Dropbox for 500M users',
      'Handle offline sync conflicts',
      'Optimize for mobile bandwidth'
    ],
    resourceLinks: [
      'Dropbox Engineering Blog',
      'File Sync Algorithms',
      'CRDT vs Operational Transform'
    ],
    masteryLevel: 0
  },
  {
    id: 'chat-messaging',
    title: 'Real-time Chat System (Slack)',
    category: 'casestudy',
    concepts: [
      'Message delivery guarantees',
      'Presence and status management',
      'Pub/sub architecture',
      'Message ordering and consistency',
      'Push notification system'
    ],
    practiceProblems: [
      'Design Slack for 10M daily users',
      'Implement read receipts',
      'Handle message search at scale'
    ],
    resourceLinks: [
      'Slack Engineering Architecture',
      'WebSocket vs Server-Sent Events',
      'Real-time Systems Design'
    ],
    masteryLevel: 0
  },
  {
    id: 'metrics-monitoring',
    title: 'Metrics Collection System',
    category: 'casestudy',
    concepts: [
      'Time-series data storage',
      'Data aggregation strategies',
      'Real-time alerting',
      'Dashboard query optimization',
      'Data retention policies'
    ],
    practiceProblems: [
      'Design system for 1M metrics/sec',
      'Implement custom alerting rules',
      'Build real-time dashboards'
    ],
    resourceLinks: [
      'Prometheus Architecture',
      'Time Series Database Design',
      'Grafana System Architecture'
    ],
    masteryLevel: 0
  },
  {
    id: 'scalability-fundamentals',
    title: 'Scalability Fundamentals',
    category: 'fundamentals',
    concepts: [
      'Horizontal vs Vertical Scaling',
      'Load Balancing Strategies (Round Robin, Least Connections)',
      'Database Replication (Master-Slave, Master-Master)',
      'Database Sharding Strategies',
      'Caching Layers (CDN, Application, Database)'
    ],
    practiceProblems: [
      'Scale a web app from 1K to 1M users',
      'Design multi-region deployment',
      'Implement database sharding'
    ],
    resourceLinks: [
      'High Scalability Blog',
      'AWS Well-Architected Framework',
      'System Design Primer (GitHub)'
    ],
    masteryLevel: 0
  },
  {
    id: 'caching-strategies',
    title: 'Caching Strategies',
    category: 'fundamentals',
    concepts: [
      'Cache-aside vs Write-through',
      'Write-behind caching',
      'Cache eviction policies (LRU, LFU, FIFO)',
      'Cache stampede prevention',
      'Distributed caching (Redis Cluster)'
    ],
    practiceProblems: [
      'Design caching for e-commerce site',
      'Handle cache invalidation',
      'Implement distributed cache'
    ],
    resourceLinks: [
      'Redis Documentation',
      'Memcached vs Redis',
      'Cache Design Patterns'
    ],
    masteryLevel: 0
  },
  {
    id: 'database-design',
    title: 'Database Design & Scaling',
    category: 'fundamentals',
    concepts: [
      'ACID properties',
      'CAP theorem trade-offs',
      'SQL vs NoSQL selection',
      'Database indexing strategies',
      'Connection pooling'
    ],
    practiceProblems: [
      'Choose database for different use cases',
      'Design schema for social network',
      'Optimize slow queries'
    ],
    resourceLinks: [
      'Database Internals Book',
      'Designing Data-Intensive Applications',
      'SQL Performance Tuning'
    ],
    masteryLevel: 0
  },
  {
    id: 'microservices-architecture',
    title: 'Microservices Architecture',
    category: 'advanced',
    concepts: [
      'Service decomposition strategies',
      'Inter-service communication',
      'Circuit breaker pattern',
      'Service discovery',
      'Data consistency in microservices'
    ],
    practiceProblems: [
      'Break monolith into microservices',
      'Handle distributed transactions',
      'Implement service mesh'
    ],
    resourceLinks: [
      'Microservices Patterns',
      'Martin Fowler Articles',
      'Building Microservices Book'
    ],
    masteryLevel: 0
  },
  {
    id: 'distributed-systems',
    title: 'Distributed Systems',
    category: 'advanced',
    concepts: [
      'Consensus algorithms (Raft, Paxos)',
      'Vector clocks and logical time',
      'Eventual consistency',
      'Byzantine fault tolerance',
      'Distributed transactions (2PC, Saga)'
    ],
    practiceProblems: [
      'Design distributed consensus',
      'Handle network partitions',
      'Implement distributed locks'
    ],
    resourceLinks: [
      'Designing Data-Intensive Applications',
      'MIT 6.824 Distributed Systems',
      'Raft Consensus Algorithm'
    ],
    masteryLevel: 0
  }
];

// Comprehensive SRE-Specific Topics (Migrated from V1 + Research-Based)
export const sreTopics: SRETopic[] = [
  {
    id: 'linux-fundamentals',
    title: 'Linux System Fundamentals',
    category: 'linux',
    concepts: [
      'Process monitoring (top, ps, htop)',
      'System call tracing (strace)',
      'File system analysis (df, du)',
      '/proc filesystem exploration',
      'Log analysis (grep, awk, sed)'
    ],
    scenarios: [
      {
        id: 'process-monitoring',
        title: 'Process Monitoring Comparison',
        description: 'Compare top, ps aux, and htop for system monitoring',
        difficulty: 'Beginner',
        category: 'monitoring',
        solution: 'top shows real-time processes, ps aux shows snapshot, htop provides interactive interface',
        practiced: false
      },
      {
        id: 'syscall-tracing',
        title: 'System Call Analysis',
        description: 'Use strace to trace system calls of a running process',
        difficulty: 'Intermediate',
        category: 'debugging',
        solution: 'strace -p PID to attach to process, analyze file/network operations',
        practiced: false
      },
      {
        id: 'disk-analysis',
        title: 'Disk Space Investigation',
        description: 'Find disk hotspots using df -h and du -sh commands',
        difficulty: 'Beginner',
        category: 'troubleshooting',
        solution: 'df -h shows filesystem usage, du -sh /* finds large directories',
        practiced: false
      },
      {
        id: 'proc-exploration',
        title: '/proc Filesystem Tour',
        description: 'Map process IDs to open files using /proc',
        difficulty: 'Intermediate',
        category: 'linux',
        solution: 'Use /proc/PID/fd to see file descriptors, /proc/PID/maps for memory',
        practiced: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'networking-fundamentals',
    title: 'Network Troubleshooting',
    category: 'networking',
    concepts: [
      'Network listeners (netstat)',
      'DNS resolution (dig, nslookup)',
      'SSL/TLS analysis (openssl)',
      'Packet capture (tcpdump)',
      'Network connectivity (ping, traceroute)'
    ],
    scenarios: [
      {
        id: 'network-listeners',
        title: 'Identify Network Listeners',
        description: 'Use netstat -tulnp to identify listening services',
        difficulty: 'Beginner',
        category: 'networking',
        solution: 'netstat -tulnp shows TCP/UDP listeners with process info',
        practiced: false
      },
      {
        id: 'dns-resolution',
        title: 'DNS Resolution Analysis',
        description: 'Use dig and nslookup to troubleshoot 3 different domains',
        difficulty: 'Beginner',
        category: 'networking',
        solution: 'dig domain.com shows full DNS resolution, nslookup provides interactive queries',
        practiced: false
      },
      {
        id: 'ssl-certificate',
        title: 'SSL Certificate Analysis',
        description: 'Use openssl s_client to examine certificate and chain',
        difficulty: 'Intermediate',
        category: 'security',
        solution: 'openssl s_client -connect host:443 -showcerts reveals certificate details',
        practiced: false
      },
      {
        id: 'packet-capture',
        title: 'TCP Handshake Capture',
        description: 'Use tcpdump to capture and analyze TCP handshake',
        difficulty: 'Intermediate',
        category: 'networking',
        solution: 'tcpdump -i eth0 tcp port 80 captures packets, look for SYN/SYN-ACK/ACK',
        practiced: false
      },
      {
        id: 'connectivity-testing',
        title: 'Network Connectivity Testing',
        description: 'Use ping and traceroute to diagnose connectivity issues',
        difficulty: 'Beginner',
        category: 'networking',
        solution: 'ping tests reachability, traceroute shows network path and hop latency',
        practiced: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'containerization',
    title: 'Docker & Containerization',
    category: 'automation',
    concepts: [
      'Docker basics and lifecycle',
      'Container inspection (docker ps, exec)',
      'Multi-container applications (docker-compose)',
      'Container networking',
      'Volume management'
    ],
    scenarios: [
      {
        id: 'docker-basics',
        title: 'Docker Hello World',
        description: 'Run docker hello-world and build a simple application container',
        difficulty: 'Beginner',
        category: 'containers',
        solution: 'docker run hello-world, then docker build -t myapp . and docker run myapp',
        practiced: false
      },
      {
        id: 'container-inspection',
        title: 'Container Inspection and Debugging',
        description: 'Use docker ps and docker exec to inspect running containers',
        difficulty: 'Beginner',
        category: 'containers',
        solution: 'docker ps shows running containers, docker exec -it container /bin/bash for debugging',
        practiced: false
      },
      {
        id: 'multi-container',
        title: 'Multi-Container Application',
        description: 'Use docker-compose to run multi-container application',
        difficulty: 'Intermediate',
        category: 'containers',
        solution: 'Create docker-compose.yml with services, use docker-compose up',
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
      'Four Golden Signals (Latency, Traffic, Errors, Saturation)',
      'Prometheus metrics collection',
      'Grafana dashboards',
      'Alert manager configuration'
    ],
    scenarios: [
      {
        id: 'slo-definition',
        title: 'Define SLOs for Web Service',
        description: 'Create appropriate SLIs/SLOs for a user-facing API service',
        difficulty: 'Intermediate',
        category: 'design',
        solution: 'Define 99.9% availability, 95th percentile latency < 200ms, error rate < 0.1%',
        practiced: false
      },
      {
        id: 'golden-signals',
        title: 'Implement Four Golden Signals',
        description: 'Set up monitoring for latency, traffic, errors, and saturation',
        difficulty: 'Intermediate',
        category: 'monitoring',
        solution: 'Use Prometheus to collect metrics, Grafana for visualization, AlertManager for notifications',
        practiced: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'incident-response',
    title: 'Incident Response & Troubleshooting',
    category: 'incident',
    concepts: [
      'Incident management process',
      'Root cause analysis',
      'Post-mortem writing',
      'Escalation procedures',
      'Communication during incidents'
    ],
    scenarios: [
      {
        id: 'production-outage',
        title: 'Handle Production Outage',
        description: 'Service is down, users cannot access the application',
        difficulty: 'Advanced',
        category: 'incident',
        solution: 'Check service health, review recent deployments, examine logs and metrics, communicate status',
        practiced: false
      },
      {
        id: 'performance-degradation',
        title: 'Investigate Performance Issues',
        description: 'Application response times have increased significantly',
        difficulty: 'Intermediate',
        category: 'incident',
        solution: 'Monitor CPU/memory/disk, check database queries, analyze network latency, review recent changes',
        practiced: false
      }
    ],
    masteryLevel: 0
  },
  {
    id: 'automation-scripting',
    title: 'Automation & Scripting',
    category: 'automation',
    concepts: [
      'Bash scripting best practices',
      'Python automation scripts',
      'Infrastructure as Code',
      'CI/CD pipelines',
      'Configuration management'
    ],
    scenarios: [
      {
        id: 'log-rotation',
        title: 'Automate Log Rotation',
        description: 'Write script to automatically rotate and compress old log files',
        difficulty: 'Intermediate',
        category: 'automation',
        solution: 'Use logrotate or write custom script with find, gzip, and cron job',
        practiced: false
      },
      {
        id: 'health-monitoring',
        title: 'System Health Monitoring Script',
        description: 'Create script to monitor CPU, memory, disk usage and send alerts',
        difficulty: 'Intermediate',
        category: 'automation',
        solution: 'Python script using psutil, check thresholds, send email/Slack notifications',
        practiced: false
      }
    ],
    masteryLevel: 0
  }
];

// Comprehensive Behavioral Stories Framework (Migrated from V1 + Senior-Level Focus)
export const behavioralCategories: BehavioralStory[] = [
  {
    id: 'challenging-project',
    category: 'leadership',
    situation: 'Leading the most challenging project in my career with tight deadlines and complex requirements',
    task: 'Deliver a critical system migration while maintaining 99.9% uptime and training junior team members',
    action: 'Created detailed migration plan, implemented blue-green deployment, established mentoring sessions, maintained constant communication with stakeholders',
    result: 'Successfully migrated system with zero downtime, delivered 2 weeks early, and all junior members became proficient in new technology',
    companies: ['Amazon', 'Google', 'Facebook', 'Microsoft'],
    refined: false
  },
  {
    id: 'production-incident',
    category: 'leadership',
    situation: 'Critical production issue affecting 50% of users during peak traffic hours',
    task: 'Quickly identify root cause, implement fix, and prevent future occurrences',
    action: 'Coordinated incident response team, analyzed logs and metrics, implemented immediate workaround, conducted thorough post-mortem',
    result: 'Restored service in 45 minutes, identified architectural weakness, implemented monitoring to prevent similar issues',
    companies: ['Netflix', 'Uber', 'Amazon', 'Google'],
    refined: false
  },
  {
    id: 'mentoring-junior',
    category: 'leadership',
    situation: 'Assigned to mentor a junior engineer who was struggling with complex distributed systems concepts',
    task: 'Help them become productive team member while not falling behind on my own deliverables',
    action: 'Created structured learning plan, paired programming sessions, provided regular feedback, connected them with other mentors',
    result: 'Junior engineer successfully delivered first major feature independently, received promotion within 8 months',
    companies: ['Google', 'Facebook', 'Apple', 'Microsoft'],
    refined: false
  },
  {
    id: 'tradeoff-decision',
    category: 'innovation',
    situation: 'Had to choose between technical debt reduction and new feature development with limited engineering resources',
    task: 'Make decision that balances business needs with long-term technical health',
    action: 'Analyzed technical debt impact, quantified business value of features, proposed hybrid approach with incremental improvements',
    result: 'Delivered critical features while reducing technical debt by 30%, improved team velocity by 25%',
    companies: ['Amazon', 'Netflix', 'Stripe', 'Airbnb'],
    refined: false
  },
  {
    id: 'team-disagreement',
    category: 'conflict',
    situation: 'Strong disagreement between senior engineers about technology choice for new microservice',
    task: 'Resolve conflict while maintaining team relationships and making optimal technical decision',
    action: 'Facilitated technical discussions, created evaluation criteria, built prototypes, involved stakeholders in decision',
    result: 'Team reached consensus, chosen technology exceeded performance targets, established decision-making framework for future',
    companies: ['Facebook', 'Google', 'Uber', 'Twitter'],
    refined: false
  },
  {
    id: 'outage-leadership',
    category: 'leadership',
    situation: 'Major system outage during Black Friday affecting e-commerce platform revenue',
    task: 'Lead incident response while communicating with executives and coordinating multiple teams',
    action: 'Established war room, delegated tasks to specialized teams, maintained regular communication, documented everything',
    result: 'Resolved outage in 2 hours, implemented fail-safes, prevented $2M revenue loss, improved incident response process',
    companies: ['Amazon', 'eBay', 'Shopify', 'Stripe'],
    refined: false
  },
  {
    id: 'performance-improvement',
    category: 'innovation',
    situation: 'Application performance degraded significantly after scaling to 10x users',
    task: 'Identify bottlenecks and implement solutions without disrupting user experience',
    action: 'Conducted comprehensive performance analysis, implemented caching layer, optimized database queries, added monitoring',
    result: 'Improved response times by 70%, reduced infrastructure costs by 40%, handled 10x traffic growth smoothly',
    companies: ['Netflix', 'Spotify', 'YouTube', 'Instagram'],
    refined: false
  },
  {
    id: 'cross-team-project',
    category: 'collaboration',
    situation: 'Leading project requiring coordination between 5 different engineering teams with conflicting priorities',
    task: 'Align teams toward common goal while respecting individual team objectives and timelines',
    action: 'Created shared project roadmap, established regular sync meetings, identified dependencies, escalated blockers appropriately',
    result: 'Delivered integrated solution on time, improved cross-team collaboration, established reusable coordination framework',
    companies: ['Google', 'Microsoft', 'Amazon', 'Apple'],
    refined: false
  },
  {
    id: 'technical-failure',
    category: 'failure',
    situation: 'Architecture decision I advocated for led to significant performance issues in production',
    task: 'Take responsibility, fix the issue, and learn from the mistake',
    action: 'Acknowledged the mistake publicly, analyzed root cause, implemented fixes, shared learnings with team',
    result: 'Gained team trust through transparency, system performed better than original design, created architectural review process',
    companies: ['Facebook', 'Twitter', 'LinkedIn', 'Pinterest'],
    refined: false
  },
  {
    id: 'innovation-initiative',
    category: 'innovation',
    situation: 'Identified opportunity to reduce operational overhead through automation but needed to convince skeptical management',
    task: 'Build business case and prototype to demonstrate value of automation investment',
    action: 'Researched ROI, built proof of concept during 20% time, measured current manual effort, presented compelling case',
    result: 'Received approval for 6-month project, automated 80% of manual tasks, saved team 20 hours/week',
    companies: ['Google', 'Netflix', 'Spotify', 'Slack'],
    refined: false
  }
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
