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
      icon: getTaskIcon('coding')
    },
    {
      type: 'systemDesign' as TaskType,
      label: 'System Design',
      content: task.systemDesignTask,
      completed: task.doneSD,
      icon: getTaskIcon('systemDesign')
    },
    {
      type: 'infra' as TaskType,
      label: 'Infrastructure',
      content: task.infraTask,
      completed: task.doneInfra,
      icon: getTaskIcon('infra')
    },
    {
      type: 'behavioral' as TaskType,
      label: 'Behavioral',
      content: task.behavioralTask,
      completed: task.doneBehavioral,
      icon: getTaskIcon('behavioral')
    }
  ];

  const completedCount = tasks.filter(t => t.completed).length;
  const isFullyComplete = completedCount === 4;

  return (
    <div className={`bg-white rounded-xl shadow-sm border transition-all duration-200 hover:shadow-md ${
      isFullyComplete ? 'border-green-200 bg-green-50' : 'border-gray-200'
    }`}>
      {/* Header */}
      <div 
        className="p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`text-lg font-bold px-2 py-1 rounded ${
              isFullyComplete ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
            }`}>
              Day {task.globalDay}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Week {task.week} • {getDayOfWeekName(task.dayOfWeek)}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{completedCount}/4 tasks completed</span>
                {isFullyComplete && <span className="text-green-600">✅</span>}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {tasks.map((t, idx) => (
                <div
                  key={idx}
                  className={`w-3 h-3 rounded-full ${
                    t.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform ${
                isExpanded ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 p-4">
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {tasks.map((taskItem, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border transition-all ${
                  taskItem.completed 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{taskItem.icon}</span>
                    <span className="font-medium text-gray-900">{taskItem.label}</span>
                  </div>
                  <button
                    onClick={() => onToggleTask(task.globalDay, taskItem.type)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      taskItem.completed
                        ? 'bg-green-100 text-green-800 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {taskItem.completed ? 'Done ✓' : 'Mark Done'}
                  </button>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{taskItem.content}</p>
              </div>
            ))}
          </div>

          {/* Notes Section */}
          <div className="border-t border-gray-200 pt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              📝 Notes & Reflections
            </label>
            <textarea
              value={notes}
              onChange={handleNotesChange}
              onBlur={handleNotesBlur}
              placeholder="Add your notes, insights, or reflections for this day..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
