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

const InterviewPrep: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [tasks, setTasks] = useState<InterviewTask[]>([]);
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [loading, setLoading] = useState(true);

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💼</span>
              <h1 className="text-xl font-bold text-gray-900">Interview Prep Tracker</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleExport}
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                📥 Export CSV
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                🔓 Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard */}
        <Dashboard stats={stats} />

        {/* Week Navigation */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">📅 Week Navigation</h2>
            <div className="text-sm text-gray-600">
              Select a week to view tasks
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {weeks.map(week => {
              const weekStats = calculateProgress(tasks.filter(t => t.week === week));
              return (
                <button
                  key={week}
                  onClick={() => setSelectedWeek(week)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedWeek === week
                      ? 'bg-blue-100 text-blue-800 border-2 border-blue-300'
                      : weekStats.overallProgress === 100
                      ? 'bg-green-100 text-green-800 border border-green-300'
                      : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                  }`}
                >
                  Week {week}
                  {weekStats.overallProgress === 100 && ' ✅'}
                  <div className="text-xs mt-1">
                    {weekStats.overallProgress}% complete
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tasks for Selected Week */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              📚 Week {selectedWeek} Tasks
            </h2>
            <div className="text-sm text-gray-600">
              {weekTasks.filter(t => t.doneCoding && t.doneSD && t.doneInfra && t.doneBehavioral).length}/{weekTasks.length} days completed
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
            <div className="text-center py-8 text-gray-500">
              <div className="text-4xl mb-4">📅</div>
              <p>No tasks found for this week</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
