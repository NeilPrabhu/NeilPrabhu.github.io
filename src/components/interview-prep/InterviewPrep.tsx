import React, { useState, useEffect } from 'react';
import { InterviewTask, TaskType } from '../../features/interview-prep/types';
import { isAuthenticated, logout } from '../../features/interview-prep/auth';
import { 
  loadProgress, 
  toggleTaskCompletion, 
  updateTask, 
  calculateProgress,
  downloadCSV
} from '../../features/interview-prep/storage';
import AuthGate from './AuthGate';
import Dashboard from './Dashboard';
import TaskCard from './TaskCard';
import TopicGuide from './TopicGuide';

const InterviewPrep: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [tasks, setTasks] = useState<InterviewTask[]>([]);
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [showTopicGuide, setShowTopicGuide] = useState(false);

  useEffect(() => {
    // Check authentication on mount
    const authStatus = isAuthenticated();
    setAuthenticated(authStatus);
    
    if (authStatus) {
      loadData();
    }
    setLoading(false);
  }, []);

  const loadData = () => {
    const progressData = loadProgress();
    setTasks(progressData);
    
    // Set current week based on progress
    const stats = calculateProgress(progressData);
    setSelectedWeek(stats.currentWeek);
  };

  const handleAuthenticated = () => {
    setAuthenticated(true);
    loadData();
  };

  const handleToggleTask = (globalDay: number, taskType: TaskType) => {
    const updatedTasks = toggleTaskCompletion(tasks, globalDay, taskType);
    setTasks(updatedTasks);
  };

  const handleUpdateNotes = (globalDay: number, notes: string) => {
    const updatedTasks = updateTask(tasks, globalDay, { notes });
    setTasks(updatedTasks);
  };

  const handleLogout = () => {
    logout();
    setAuthenticated(false);
    setTasks([]);
  };

  const handleExport = () => {
    downloadCSV(tasks);
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

  const stats = calculateProgress(tasks);
  const weeks = Array.from(new Set(tasks.map(t => t.week))).sort((a, b) => a - b);
  const weekTasks = tasks.filter(task => task.week === selectedWeek);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Enhanced Header */}
        <div className="bg-white shadow-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Interview Prep Journey</h1>
                  <p className="text-sm text-gray-600">70-day backend engineering preparation</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowTopicGuide(true)}
                  className="inline-flex items-center px-4 py-2 border-2 border-purple-200 shadow-sm text-sm font-medium rounded-xl text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors"
                >
                  <span className="mr-2">📚</span>
                  Study Guide
                </button>
                <button
                  onClick={handleExport}
                  className="inline-flex items-center px-4 py-2 border-2 border-blue-200 shadow-sm text-sm font-medium rounded-xl text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  <span className="mr-2">📥</span>
                  Export
                </button>
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
        {/* Dashboard */}
        <Dashboard stats={stats} />

        {/* Week Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📅</span>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Week Navigation</h2>
                <p className="text-sm text-gray-600">Choose a week to focus on</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {stats.currentWeek ? `Currently on Week ${stats.currentWeek}` : 'Select a week'}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {weeks.map(week => {
              const weekStats = calculateProgress(tasks.filter(t => t.week === week));
              const isCurrentWeek = stats.currentWeek === week;
              return (
                <button
                  key={week}
                  onClick={() => setSelectedWeek(week)}
                  className={`p-4 rounded-xl text-sm font-medium transition-all hover:scale-105 ${
                    selectedWeek === week
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                      : weekStats.overallProgress === 100
                      ? 'bg-green-100 text-green-800 border-2 border-green-300 hover:bg-green-200'
                      : 'bg-gray-50 text-gray-700 border-2 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">Week {week}</span>
                    {weekStats.overallProgress === 100 && <span>🎉</span>}
                    {isCurrentWeek && <span>📍</span>}
                  </div>
                  <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mb-1">
                    <div 
                      className={`h-2 rounded-full transition-all ${
                        selectedWeek === week ? 'bg-white' : weekStats.overallProgress === 100 ? 'bg-green-600' : 'bg-blue-500'
                      }`}
                      style={{ width: `${weekStats.overallProgress}%` }}
                    />
                  </div>
                  <div className="text-xs opacity-90">
                    {weekStats.overallProgress}% complete
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tasks for Selected Week */}
        <div className="space-y-6">
          <div className="flex items-center justify-between bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4">
              <span className="text-3xl">📚</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Week {selectedWeek} Tasks
                </h2>
                <p className="text-gray-600">
                  {weekTasks.filter(t => t.doneCoding && t.doneSD && t.doneInfra && t.doneBehavioral).length} of {weekTasks.length} days completed
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Week Progress</div>
              <div className="w-32 bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all"
                  style={{ 
                    width: `${weekTasks.length > 0 ? (weekTasks.filter(t => t.doneCoding && t.doneSD && t.doneInfra && t.doneBehavioral).length / weekTasks.length) * 100 : 0}%` 
                  }}
                />
              </div>
            </div>
          </div>

          {weekTasks.map(task => (
            <TaskCard
              key={task.globalDay}
              task={task}
              onToggleTask={handleToggleTask}
              onUpdateNotes={handleUpdateNotes}
            />
          ))}

          {weekTasks.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Tasks This Week</h3>
              <p className="text-gray-600">Select a different week to view tasks</p>
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Topic Guide Modal */}
    <TopicGuide 
      isOpen={showTopicGuide} 
      onClose={() => setShowTopicGuide(false)} 
    />
  </>
  );
};

export default InterviewPrep;
