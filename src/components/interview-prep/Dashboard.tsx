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
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      textColor: 'text-blue-700',
      icon: '🎯'
    },
    { 
      label: 'Coding', 
      value: stats.codingProgress, 
      gradient: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100',
      textColor: 'text-emerald-700',
      icon: '💻'
    },
    { 
      label: 'System Design', 
      value: stats.systemDesignProgress, 
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      textColor: 'text-purple-700',
      icon: '🏗️'
    },
    { 
      label: 'Infrastructure', 
      value: stats.infraProgress, 
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      textColor: 'text-orange-700',
      icon: '⚙️'
    },
    { 
      label: 'Behavioral', 
      value: stats.behavioralProgress, 
      gradient: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-50 to-pink-100',
      textColor: 'text-pink-700',
      icon: '🎯'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <span className="text-3xl">📊</span>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Progress Dashboard</h2>
            <p className="text-gray-600">Track your interview preparation journey</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-gray-900">Week {stats.currentWeek}</div>
          <div className="text-sm text-gray-600">Day {stats.currentDay} of 70</div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {progressItems.map((item, index) => (
          <div key={index} className={`bg-gradient-to-br ${item.bgGradient} rounded-2xl p-6 border-2 border-white hover:shadow-lg transition-all duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-sm font-semibold ${item.textColor}`}>{item.label}</span>
              <span className="text-2xl">{item.icon}</span>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className={`text-3xl font-bold ${item.textColor}`}>{item.value}%</span>
              </div>
              <div className="w-full bg-white bg-opacity-50 rounded-full h-3 shadow-inner">
                <div 
                  className={`bg-gradient-to-r ${item.gradient} h-3 rounded-full transition-all duration-500 shadow-sm`}
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
            <div className={`text-xs ${item.textColor} opacity-80`}>
              {item.value === 100 ? 'Complete! 🎉' : `${100 - item.value}% remaining`}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
          <div className="text-3xl mb-2">✅</div>
          <div className="text-3xl font-bold text-blue-600">{stats.completedDays}</div>
          <div className="text-sm font-medium text-blue-600">Days Complete</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200">
          <div className="text-3xl mb-2">⏳</div>
          <div className="text-3xl font-bold text-green-600">{stats.totalDays - stats.completedDays}</div>
          <div className="text-sm font-medium text-green-600">Days Remaining</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200">
          <div className="text-3xl mb-2">📍</div>
          <div className="text-3xl font-bold text-purple-600">{Math.ceil(stats.currentDay / 7)}</div>
          <div className="text-sm font-medium text-purple-600">Current Week</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200">
          <div className="text-3xl mb-2">📅</div>
          <div className="text-3xl font-bold text-orange-600">{10 - Math.ceil(stats.currentDay / 7) + 1}</div>
          <div className="text-sm font-medium text-orange-600">Weeks Left</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
