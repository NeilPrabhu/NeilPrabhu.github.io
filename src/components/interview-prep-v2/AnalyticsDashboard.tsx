import React from 'react';
import { ProgressAnalytics, PrepProgram } from '../../features/interview-prep-v2/types';

interface AnalyticsDashboardProps {
  analytics: ProgressAnalytics;
  program: PrepProgram;
  onViewChange: (view: 'overview' | 'patterns' | 'week' | 'reviews') => void;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ 
  analytics, 
  program, 
  onViewChange 
}) => {
  const getReadinessColor = (score: number) => {
    if (score >= 80) return 'from-green-500 to-emerald-500';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getReadinessMessage = (score: number) => {
    if (score >= 80) return "🚀 Interview Ready! Time to schedule interviews";
    if (score >= 60) return "⚡ Getting Close! Focus on weak areas";
    return "💪 Keep Building! Consistent progress is key";
  };

  return (
    <div className="space-y-8">
      {/* Hero Readiness Card */}
      <div className={`bg-gradient-to-r ${getReadinessColor(analytics.readinessScore)} rounded-3xl p-8 text-white shadow-2xl`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Interview Readiness Score</h2>
            <p className="text-xl opacity-90 mb-4">{getReadinessMessage(analytics.readinessScore)}</p>
            <div className="flex items-center space-x-6 text-sm opacity-75">
              <span>Week {program.currentWeek}/8</span>
              <span>•</span>
              <span>{program.programType === 'balanced8' ? '8-Week Intensive' : 'Custom Program'}</span>
              <span>•</span>
              <span>{program.track === 'backend' ? 'Backend Focus' : 'SRE Track'}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-6xl font-bold mb-2">{Math.round(analytics.readinessScore)}%</div>
            <div className="bg-white bg-opacity-20 rounded-full h-4 w-32">
              <div 
                className="bg-white h-4 rounded-full transition-all duration-500"
                style={{ width: `${analytics.readinessScore}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl">🧩</span>
            <button 
              onClick={() => onViewChange('patterns')}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            >
              View Details →
            </button>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {Math.round(analytics.areaBreakdown.coding)}%
          </div>
          <div className="text-sm text-gray-600 mb-3">Pattern Mastery</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${analytics.areaBreakdown.coding}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Based on coding pattern completion
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl">🏗️</span>
            <button 
              onClick={() => onViewChange('week')}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Focus Area →
            </button>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {Math.round(analytics.areaBreakdown.systemDesign)}%
          </div>
          <div className="text-sm text-gray-600 mb-3">System Design</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${analytics.areaBreakdown.systemDesign}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Senior-level focus area (40% time)
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl">🧠</span>
            <button 
              onClick={() => onViewChange('reviews')}
              className="text-xs text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Review Now →
            </button>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {Math.round(analytics.retentionRate)}%
          </div>
          <div className="text-sm text-gray-600 mb-3">Knowledge Retention</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${analytics.retentionRate}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Spaced repetition success rate
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl">🎭</span>
            <span className="text-xs text-gray-400">Stories Ready</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {Math.round(analytics.areaBreakdown.behavioral)}%
          </div>
          <div className="text-sm text-gray-600 mb-3">Behavioral Prep</div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${analytics.areaBreakdown.behavioral}%` }}
            />
          </div>
          <div className="text-xs text-gray-500 mt-2">
            STAR stories refined and practiced
          </div>
        </div>
      </div>

      {/* Time Distribution */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-2xl mr-3">⏰</span>
          Study Time Distribution (Research-Based)
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {analytics.timeDistribution.map((area, index) => (
            <div key={area.area} className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${area.percentage * 2.51} 251`}
                    className={
                      area.area === 'Coding' ? 'text-emerald-500' :
                      area.area === 'System Design' ? 'text-blue-500' :
                      area.area === 'Behavioral' ? 'text-pink-500' :
                      'text-orange-500'
                    }
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-900">{area.percentage}%</span>
                </div>
              </div>
              <div className="font-medium text-gray-900">{area.area}</div>
              <div className="text-sm text-gray-500">{area.hours.toFixed(1)}h total</div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-blue-800">
            <strong>Research Insight:</strong> Senior engineers should focus 40% on system design vs 25% for junior roles. 
            This distribution prevents "LeetCode grinding at expense of design skills."
          </p>
        </div>
      </div>

      {/* Mock Interview Trend */}
      {analytics.mockTrend.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-2xl mr-3">📈</span>
            Mock Interview Progress
          </h3>
          <div className="flex items-end space-x-4 h-32">
            {analytics.mockTrend.map((score, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-lg w-full min-h-4 transition-all duration-300"
                  style={{ height: `${(score / 5) * 100}%` }}
                />
                <div className="text-xs text-gray-500 mt-2">Mock {index + 1}</div>
                <div className="text-sm font-medium text-gray-900">{score.toFixed(1)}/5</div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-green-50 rounded-xl">
            <p className="text-sm text-green-800">
              Latest Score: <strong>{analytics.mockTrend[analytics.mockTrend.length - 1].toFixed(1)}/5</strong> •
              {analytics.mockTrend.length > 1 && (
                <span> Trend: {
                  analytics.mockTrend[analytics.mockTrend.length - 1] > analytics.mockTrend[analytics.mockTrend.length - 2] 
                    ? '📈 Improving' : '📉 Focus needed'
                }</span>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Recommendations */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="text-2xl mr-3">💡</span>
          AI-Powered Recommendations
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {analytics.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <span className="text-yellow-600 font-bold text-lg mt-0.5">⚡</span>
              <div>
                <p className="text-gray-800 font-medium">{rec}</p>
              </div>
            </div>
          ))}
          {analytics.recommendations.length === 0 && (
            <div className="col-span-2 text-center py-8 text-gray-500">
              <span className="text-4xl">🎉</span>
              <p className="mt-2">Great progress! Keep up the consistent effort.</p>
            </div>
          )}
        </div>
      </div>

      {/* Research Context */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <span className="text-2xl mr-3">📚</span>
          Research-Based Approach
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <div className="font-semibold text-indigo-800">6-10 Week Intensive</div>
            <p className="text-gray-700">Research shows 2-3 hours daily for 8 weeks (≈100+ hours) is sufficient vs 70-day grinding</p>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-indigo-800">Pattern-Based Learning</div>
            <p className="text-gray-700">150 curated problems (NeetCode 150, Blind 75) more effective than 500+ random questions</p>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-indigo-800">Senior Focus Areas</div>
            <p className="text-gray-700">System design is "make-or-break" for L5+. Avoid over-focusing on LeetCode at expense of design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
