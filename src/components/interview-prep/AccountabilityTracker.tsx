import React, { useState } from 'react';
import { AccountabilityData, TimelineStatus } from '../../features/interview-prep/types';
import { pauseTimeline, resumeTimeline } from '../../features/interview-prep/storage';

interface AccountabilityTrackerProps {
  accountability: AccountabilityData;
  timelineStatus: TimelineStatus;
  motivationalMessage: string;
  onUpdate: () => void;
}

const AccountabilityTracker: React.FC<AccountabilityTrackerProps> = ({ 
  accountability, 
  timelineStatus, 
  motivationalMessage,
  onUpdate 
}) => {
  const [showPauseDialog, setShowPauseDialog] = useState(false);
  const [pauseDays, setPauseDays] = useState(7);

  const handlePause = () => {
    pauseTimeline(pauseDays);
    setShowPauseDialog(false);
    onUpdate();
  };

  const handleResume = () => {
    resumeTimeline();
    onUpdate();
  };

  const getStatusColor = () => {
    switch (timelineStatus.status) {
      case 'ahead': return 'from-green-500 to-emerald-500';
      case 'onTrack': return 'from-blue-500 to-indigo-500';
      case 'behind': return 'from-orange-500 to-red-500';
      case 'paused': return 'from-gray-500 to-slate-500';
      default: return 'from-blue-500 to-indigo-500';
    }
  };

  const getStatusIcon = () => {
    switch (timelineStatus.status) {
      case 'ahead': return '🚀';
      case 'onTrack': return '🎯';
      case 'behind': return '⏰';
      case 'paused': return '⏸️';
      default: return '📊';
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDaysSinceStart = () => {
    const start = new Date(accountability.startDate);
    const today = new Date();
    return Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  return (
    <>
      <div className={`bg-gradient-to-r ${getStatusColor()} rounded-2xl p-6 mb-8 text-white shadow-lg`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-4xl">{getStatusIcon()}</span>
            <div>
              <h2 className="text-2xl font-bold">Accountability Tracker</h2>
              <p className="text-white text-opacity-90">{motivationalMessage}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-90 mb-1">Started Journey</div>
            <div className="text-lg font-bold">{formatDate(accountability.startDate)}</div>
            <div className="text-xs opacity-75">{getDaysSinceStart()} days ago</div>
          </div>
        </div>

        {/* Progress vs Timeline */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold">{timelineStatus.expectedDay}</div>
            <div className="text-sm opacity-90">Expected Day</div>
            <div className="text-xs opacity-75">Based on calendar</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold">{timelineStatus.actualDay}</div>
            <div className="text-sm opacity-90">Actual Day</div>
            <div className="text-xs opacity-75">Days completed</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
            <div className="text-3xl font-bold">
              {timelineStatus.daysAhead > 0 ? '+' : ''}{timelineStatus.daysAhead}
            </div>
            <div className="text-sm opacity-90">
              {timelineStatus.daysAhead > 0 ? 'Days Ahead' : 
               timelineStatus.daysAhead < 0 ? 'Days Behind' : 'On Track'}
            </div>
            <div className="text-xs opacity-75">vs timeline</div>
          </div>
        </div>

        {/* Streak Information */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-2xl">🔥</span>
              <span className="text-3xl font-bold">{accountability.currentStreak}</span>
            </div>
            <div className="text-sm opacity-90">Current Streak</div>
            <div className="text-xs opacity-75">consecutive days</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-2xl">🏆</span>
              <span className="text-3xl font-bold">{accountability.longestStreak}</span>
            </div>
            <div className="text-sm opacity-90">Best Streak</div>
            <div className="text-xs opacity-75">personal record</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className="text-2xl">📅</span>
              <span className="text-3xl font-bold">{accountability.totalCheckIns}</span>
            </div>
            <div className="text-sm opacity-90">Total Check-ins</div>
            <div className="text-xs opacity-75">active days</div>
          </div>
        </div>

        {/* Action Recommendation */}
        <div className="bg-white bg-opacity-20 rounded-xl p-4 mb-4">
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-xl">💡</span>
            <span className="font-semibold">Recommendation</span>
          </div>
          <p className="text-sm opacity-90">{timelineStatus.recommendedAction}</p>
        </div>

        {/* Pause/Resume Controls */}
        <div className="flex items-center justify-between">
          <div className="text-sm opacity-75">
            Last activity: {formatDate(accountability.lastCheckIn)}
          </div>
          <div className="flex space-x-3">
            {timelineStatus.status === 'paused' ? (
              <button
                onClick={handleResume}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                ▶️ Resume
              </button>
            ) : (
              <button
                onClick={() => setShowPauseDialog(true)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                ⏸️ Pause
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Pause Dialog */}
      {showPauseDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Pause Your Journey</h3>
            <p className="text-gray-600 mb-4">
              Sometimes life gets in the way. Pausing will stop the timeline from advancing so you won't fall behind.
            </p>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pause for how many days?
              </label>
              <select
                value={pauseDays}
                onChange={(e) => setPauseDays(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={1}>1 day</option>
                <option value={3}>3 days</option>
                <option value={7}>1 week</option>
                <option value={14}>2 weeks</option>
                <option value={30}>1 month</option>
              </select>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowPauseDialog(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePause}
                className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Pause Journey
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountabilityTracker;
