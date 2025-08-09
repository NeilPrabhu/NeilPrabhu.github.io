import React, { useState, useEffect } from 'react';
import { 
  PrepProgram, 
  WeeklyProgress, 
  CodingPattern, 
  ProgressAnalytics 
} from '../../features/interview-prep-v2/types';
import { 
  loadProgram, 
  loadWeeklyProgress,
  loadCodingPatterns,
  calculateProgressAnalytics,
  getNextMilestones,
  getWeekFocus
} from '../../features/interview-prep-v2/storage';
import { isAuthenticated, logout } from '../../features/interview-prep/auth';
import AuthGate from '../interview-prep/AuthGate';
import WeekView from './WeekView';
import PatternMastery from './PatternMastery';
import AnalyticsDashboard from './AnalyticsDashboard';
import SpacedRepetition from './SpacedRepetition';

const InterviewPrepV2: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [program, setProgram] = useState<PrepProgram | null>(null);
  const [analytics, setAnalytics] = useState<ProgressAnalytics | null>(null);
  const [activeView, setActiveView] = useState<'overview' | 'patterns' | 'week' | 'reviews'>('overview');

  useEffect(() => {
    const authStatus = isAuthenticated();
    setAuthenticated(authStatus);
    
    if (authStatus) {
      loadData();
    }
    setLoading(false);
  }, []);

  const loadData = () => {
    const programData = loadProgram();
    setProgram(programData);
    
    const analyticsData = calculateProgressAnalytics();
    setAnalytics(analyticsData);
  };

  const handleAuthenticated = () => {
    setAuthenticated(true);
    loadData();
  };

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
    setProgram(null);
    setAnalytics(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🔄</div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!authenticated) {
    return <AuthGate onAuthenticated={handleAuthenticated}>{null}</AuthGate>;
  }

  if (!program || !analytics) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⚠️</div>
          <p className="text-gray-600">Failed to load program data</p>
        </div>
      </div>
    );
  }

  const weekFocus = getWeekFocus(program.currentWeek);
  const nextMilestones = getNextMilestones(program.currentWeek);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-2 border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-xl">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">FAANG Interview Prep 2025</h1>
                <p className="text-sm text-gray-600">Research-based senior-level preparation • Week {program.currentWeek}/8</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-lg font-bold text-indigo-600">{Math.round(analytics.readinessScore)}%</div>
                <div className="text-xs text-gray-500">Interview Ready</div>
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border-2 border-red-200 text-sm font-medium rounded-xl text-red-700 bg-red-50 hover:bg-red-100 transition-colors"
              >
                <span className="mr-2">🔓</span>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-100">
            <div className="flex space-x-1">
              {[
                { id: 'overview', label: 'Analytics Overview', icon: '📊' },
                { id: 'week', label: `Week ${program.currentWeek}`, icon: '📅' },
                { id: 'patterns', label: 'Pattern Mastery', icon: '🧩' },
                { id: 'reviews', label: 'Spaced Reviews', icon: '🧠' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveView(tab.id as any)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeView === tab.id
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        {activeView === 'overview' && (
          <AnalyticsDashboard 
            analytics={analytics} 
            program={program}
            onViewChange={setActiveView}
          />
        )}

        {activeView === 'week' && (
          <WeekView 
            program={program}
            weekFocus={weekFocus}
            milestones={nextMilestones}
            onProgramUpdate={setProgram}
            onDataRefresh={loadData}
          />
        )}

        {activeView === 'patterns' && (
          <PatternMastery 
            onDataRefresh={loadData}
          />
        )}

        {activeView === 'reviews' && (
          <SpacedRepetition 
            onDataRefresh={loadData}
          />
        )}
      </div>

      {/* Research Attribution */}
      <div className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              📚 Based on 2025 FAANG interview research • Emphasizing <strong>senior-level system design</strong>, 
              <strong> pattern-based learning</strong>, and <strong>spaced repetition</strong>
            </p>
            <div className="mt-2 flex items-center justify-center space-x-4 text-xs text-gray-500">
              <span>• 6-10 week intensive vs 70-day grinding</span>
              <span>• Quality over quantity approach</span>
              <span>• Knowledge retention focused</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrepV2;
