import React, { useState } from 'react';
import { InterviewTask, TaskType } from '../../features/interview-prep/types';
import { getDayOfWeekName, getTaskIcon } from '../../features/interview-prep/data';

interface TaskCardProps {
  task: InterviewTask;
  onToggleTask: (globalDay: number, taskType: TaskType) => void;
  onUpdateNotes: (globalDay: number, notes: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggleTask, onUpdateNotes }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [notes, setNotes] = useState(task.notes);

  const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const handleNotesBlur = () => {
    onUpdateNotes(task.globalDay, notes);
  };

  const tasks = [
    {
      type: 'coding' as TaskType,
      label: 'Coding',
      content: task.codingTask,
      completed: task.doneCoding,
      icon: '💻',
      color: 'emerald'
    },
    {
      type: 'systemDesign' as TaskType,
      label: 'System Design',
      content: task.systemDesignTask,
      completed: task.doneSD,
      icon: '🏗️',
      color: 'blue'
    },
    {
      type: 'infra' as TaskType,
      label: 'Infrastructure',
      content: task.infraTask,
      completed: task.doneInfra,
      icon: '⚙️',
      color: 'orange'
    },
    {
      type: 'behavioral' as TaskType,
      label: 'Behavioral',
      content: task.behavioralTask,
      completed: task.doneBehavioral,
      icon: '🎯',
      color: 'purple'
    }
  ];

  const completedCount = tasks.filter(t => t.completed).length;
  const isFullyComplete = completedCount === 4;
  const progressPercentage = (completedCount / 4) * 100;

  const getColorClasses = (color: string, completed: boolean) => {
    const colors = {
      emerald: completed ? 'bg-emerald-100 text-emerald-800 border-emerald-200' : 'bg-emerald-50 text-emerald-700 border-emerald-100',
      blue: completed ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-blue-50 text-blue-700 border-blue-100',
      orange: completed ? 'bg-orange-100 text-orange-800 border-orange-200' : 'bg-orange-50 text-orange-700 border-orange-100',
      purple: completed ? 'bg-purple-100 text-purple-800 border-purple-200' : 'bg-purple-50 text-purple-700 border-purple-100',
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <div className={`bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
      isFullyComplete ? 'border-green-300 shadow-green-100' : 'border-gray-200'
    }`}>
      {/* Compact Header */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className={`text-xl font-bold px-4 py-2 rounded-xl ${
              isFullyComplete ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
            }`}>
              Day {task.globalDay}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {getDayOfWeekName(task.dayOfWeek)}
              </h3>
              <p className="text-sm text-gray-500">Week {task.week}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-700">{completedCount}/4 Complete</div>
              <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isFullyComplete ? 'bg-green-500' : 'bg-blue-500'
                  }`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            {isFullyComplete && <span className="text-2xl">🎉</span>}
          </div>
        </div>

        {/* Task Grid - Always Visible */}
        <div className="grid grid-cols-2 gap-3">
          {tasks.map((taskItem, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                taskItem.completed 
                  ? getColorClasses(taskItem.color, true) + ' shadow-sm'
                  : getColorClasses(taskItem.color, false) + ' hover:shadow-md'
              }`}
              onClick={() => onToggleTask(task.globalDay, taskItem.type)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{taskItem.icon}</span>
                  <span className="font-semibold text-sm">{taskItem.label}</span>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  taskItem.completed 
                    ? 'bg-white border-current text-current' 
                    : 'border-gray-300'
                }`}>
                  {taskItem.completed && <span className="text-xs">✓</span>}
                </div>
              </div>
              <p className="text-xs leading-relaxed opacity-90 line-clamp-2">
                {taskItem.content}
              </p>
            </div>
          ))}
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors flex items-center justify-center space-x-2"
        >
          <span>{isExpanded ? 'Hide Details' : 'View Details & Add Notes'}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t-2 border-gray-100 p-6 bg-gray-50">
          {/* Detailed Task View */}
          <div className="space-y-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">📋 Task Details</h4>
            {tasks.map((taskItem, index) => (
              <div key={index} className="bg-white p-4 rounded-xl border">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{taskItem.icon}</span>
                    <span className="font-medium text-gray-900">{taskItem.label}</span>
                  </div>
                  <button
                    onClick={() => onToggleTask(task.globalDay, taskItem.type)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      taskItem.completed
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    {taskItem.completed ? '✓ Complete' : 'Mark Complete'}
                  </button>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-7">{taskItem.content}</p>
              </div>
            ))}
          </div>

          {/* Notes Section */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
              <span>📝</span>
              <span>Personal Notes & Reflections</span>
            </label>
            <textarea
              value={notes}
              onChange={handleNotesChange}
              onBlur={handleNotesBlur}
              placeholder="What did you learn today? Any insights, challenges, or breakthroughs?"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white"
              rows={4}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
