import React, { useState } from 'react';

interface TopicInfo {
  icon: string;
  title: string;
  description: string;
  tips: string[];
  resources: string[];
  timeRecommendation: string;
}

const topicData: Record<string, TopicInfo> = {
  coding: {
    icon: '💻',
    title: 'Coding Challenges',
    description: 'Algorithm and data structure problems to build problem-solving skills',
    tips: [
      'Start by understanding the problem completely',
      'Think about edge cases before coding',
      'Aim for optimal time/space complexity',
      'Practice explaining your approach out loud',
      'Time yourself: 45 mins for medium problems'
    ],
    resources: [
      'LeetCode patterns: Two Pointers, Sliding Window',
      'Focus on Arrays, Strings, Trees, Graphs',
      'Practice mock interviews on Pramp/Interviewing.io'
    ],
    timeRecommendation: '1-2 hours daily'
  },
  systemDesign: {
    icon: '🏗️',
    title: 'System Design',
    description: 'Designing scalable systems and understanding distributed architecture',
    tips: [
      'Start with requirements clarification',
      'Estimate scale (users, data, requests/sec)',
      'Begin with simple design, then scale',
      'Discuss trade-offs explicitly',
      'Cover reliability, consistency, availability'
    ],
    resources: [
      'Alex Xu "System Design Interview" books',
      'High Scalability blog case studies',
      'Practice with real system examples'
    ],
    timeRecommendation: '45-60 minutes daily'
  },
  infra: {
    icon: '⚙️',
    title: 'Infrastructure & DevOps',
    description: 'Cloud platforms, containers, monitoring, and operational excellence',
    tips: [
      'Focus on hands-on practice',
      'Understand the "why" behind each tool',
      'Practice troubleshooting scenarios',
      'Learn monitoring and observability',
      'Understand security best practices'
    ],
    resources: [
      'AWS/GCP documentation and labs',
      'Kubernetes official tutorials',
      'Docker containers hands-on practice'
    ],
    timeRecommendation: '30-45 minutes daily'
  },
  behavioral: {
    icon: '🎯',
    title: 'Behavioral Questions',
    description: 'Leadership, teamwork, and situational response using STAR method',
    tips: [
      'Use STAR method: Situation, Task, Action, Result',
      'Prepare 8-10 diverse stories in advance',
      'Include metrics and quantifiable results',
      'Practice stories out loud until natural',
      'Prepare questions about the company/role'
    ],
    resources: [
      'Amazon Leadership Principles examples',
      'Practice with "Tell me about a time..." scenarios',
      'Prepare stories covering conflict, leadership, failure'
    ],
    timeRecommendation: '20-30 minutes daily'
  }
};

interface TopicGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const TopicGuide: React.FC<TopicGuideProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('coding');

  if (!isOpen) return null;

  const topic = topicData[activeTab];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📚</span>
              <h2 className="text-2xl font-bold">Interview Prep Guide</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-2xl leading-none"
            >
              ×
            </button>
          </div>
        </div>

        <div className="flex h-[calc(90vh-120px)]">
          {/* Sidebar */}
          <div className="w-64 bg-gray-50 border-r overflow-y-auto">
            <div className="p-4 space-y-2">
              {Object.entries(topicData).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    activeTab === key
                      ? 'bg-blue-100 text-blue-800 border border-blue-300'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{data.icon}</span>
                    <div>
                      <div className="font-medium">{data.title}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {data.timeRecommendation}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Topic Header */}
              <div className="flex items-center space-x-4 pb-4 border-b">
                <span className="text-4xl">{topic.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{topic.title}</h3>
                  <p className="text-gray-600 mt-1">{topic.description}</p>
                  <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                    ⏱️ {topic.timeRecommendation}
                  </div>
                </div>
              </div>

              {/* Tips Section */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  💡 Key Tips & Strategies
                </h4>
                <div className="space-y-2">
                  {topic.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <span className="text-yellow-600 font-bold text-sm mt-0.5">{index + 1}.</span>
                      <p className="text-gray-700 text-sm leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources Section */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  📖 Recommended Resources
                </h4>
                <div className="space-y-2">
                  {topic.resources.map((resource, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <span className="text-green-600 text-sm mt-0.5">📌</span>
                      <p className="text-gray-700 text-sm leading-relaxed">{resource}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Reference */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">🚀 Daily Approach</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Dedicate <strong>{topic.timeRecommendation}</strong> to {topic.title.toLowerCase()}. 
                  Focus on consistent practice rather than marathon sessions. Track your progress 
                  and reflect on learnings in the notes section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicGuide;
