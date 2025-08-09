import React from 'react';
import { ProgressStats } from '../../features/interview-prep/types';

interface DashboardProps {
  stats: ProgressStats;
}

const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const progressItems = [
    { 
      label: 'Overall Progress', 
      value: stats.overallProgress, 
      color: 'bg-blue-500',
      icon: '🎯'
    },
    { 
      label: 'Coding', 
      value: stats.codingProgress, 
      color: 'bg-green-500',
      icon: '💻'
    },
    { 
      label: 'System Design', 
      value: stats.systemDesignProgress, 
      color: 'bg-purple-500',
      icon: '🏗️'
    },
    { 
      label: 'Infrastructure', 
      value: stats.infraProgress, 
      color: 'bg-orange-500',
      icon: '⚙️'
    },
    { 
      label: 'Behavioral', 
      value: stats.behavioralProgress, 
      color: 'bg-pink-500',
      icon: '🎯'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">📊 Progress Dashboard</h2>
        <div className="text-sm text-gray-600">
          Week {stats.currentWeek} • Day {stats.currentDay}
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {progressItems.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
              <span className="text-lg">{item.icon}</span>
            </div>
            <div className="mb-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-2xl font-bold text-gray-900">{item.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${item.color}`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{stats.completedDays}</div>
          <div className="text-sm text-blue-600">Days Complete</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{stats.totalDays - stats.completedDays}</div>
          <div className="text-sm text-green-600">Days Remaining</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{Math.ceil(stats.currentDay / 7)}</div>
          <div className="text-sm text-purple-600">Current Week</div>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">{10 - Math.ceil(stats.currentDay / 7) + 1}</div>
          <div className="text-sm text-orange-600">Weeks Left</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
