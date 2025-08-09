import React from 'react';
import { PrepProgram, WeekFocus, Milestone } from '../../features/interview-prep-v2/types';
import { intensiveProgram } from '../../features/interview-prep-v2/data';

interface WeekViewProps {
  program: PrepProgram;
  weekFocus: WeekFocus[];
  milestones: Milestone[];
  onProgramUpdate: (program: PrepProgram) => void;
  onDataRefresh: () => void;
}

const WeekView: React.FC<WeekViewProps> = ({ 
  program, 
  weekFocus, 
  milestones, 
  onProgramUpdate,
  onDataRefresh 
}) => {
  const currentWeekData = intensiveProgram[program.currentWeek - 1];

  const getFocusColor = (area: string) => {
    switch (area) {
      case 'coding': return 'bg-emerald-100 text-emerald-800';
      case 'systemDesign': return 'bg-blue-100 text-blue-800';
      case 'behavioral': return 'bg-pink-100 text-pink-800';
      case 'sreSpecific': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAreaIcon = (area: string) => {
    switch (area) {
      case 'coding': return '🧩';
      case 'systemDesign': return '🏗️';
      case 'behavioral': return '🎭';
      case 'sreSpecific': return '⚙️';
      default: return '📚';
    }
  };

  if (!currentWeekData) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <span className="text-6xl">⚠️</span>
        <p className="text-gray-600 mt-4">Week data not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Week Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Week {program.currentWeek}: {currentWeekData.title}</h2>
            <p className="text-xl opacity-90 mb-4">{currentWeekData.description}</p>
            <div className="flex items-center space-x-6 text-sm opacity-75">
              <span>Target: {currentWeekData.recommendedHours} hours</span>
              <span>•</span>
              <span>{milestones.length} milestones</span>
              <span>•</span>
              <span>{program.track === 'backend' ? 'Backend Focus' : 'SRE Track'}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-6xl opacity-80">📅</div>
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <span className="text-2xl mr-3">🎯</span>
            This Week's Focus Areas
          </h3>
          <p className="text-gray-600 mt-1">Research-optimized time allocation for senior-level preparation</p>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {weekFocus.map((focus, index) => (
              <div key={index} className="relative">
                <div className={`p-6 rounded-xl border-2 ${getFocusColor(focus.area)} border-opacity-50`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{getAreaIcon(focus.area)}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 capitalize">
                          {focus.area.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-sm text-gray-600">{focus.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">{focus.percentage}%</div>
                      <div className="text-xs text-gray-500">of time</div>
                    </div>
                  </div>
                  
                  {/* Visual percentage bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        focus.area === 'coding' ? 'bg-emerald-500' :
                        focus.area === 'systemDesign' ? 'bg-blue-500' :
                        focus.area === 'behavioral' ? 'bg-pink-500' :
                        'bg-orange-500'
                      }`}
                      style={{ width: `${focus.percentage}%` }}
                    />
                  </div>
                  
                  <div className="mt-3 text-sm text-gray-600">
                    ≈ {Math.round((currentWeekData.recommendedHours * focus.percentage) / 100)} hours this week
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <span className="text-2xl mr-3">🏆</span>
            Week {program.currentWeek} Milestones
          </h3>
          <p className="text-gray-600 mt-1">Key achievements to complete this week</p>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {milestones.map((milestone, index) => {
              const typeIcons = {
                assessment: '📊',
                practice: '💪',
                mock: '🎭',
                review: '🔍'
              };
              
              return (
                <div 
                  key={milestone.id}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    milestone.completed 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="text-3xl mt-1">
                        {milestone.completed ? '✅' : typeIcons[milestone.type]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                            milestone.type === 'assessment' ? 'bg-blue-100 text-blue-800' :
                            milestone.type === 'practice' ? 'bg-green-100 text-green-800' :
                            milestone.type === 'mock' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {milestone.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{milestone.description}</p>
                        {milestone.dueDate && (
                          <p className="text-xs text-gray-500">Due: {milestone.dueDate}</p>
                        )}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        // Toggle milestone completion
                        // This would typically update the milestone state
                        console.log('Toggle milestone:', milestone.id);
                      }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        milestone.completed
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                      }`}
                    >
                      {milestone.completed ? 'Completed ✓' : 'Mark Complete'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Week Navigation */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Program Navigation</h3>
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              if (program.currentWeek > 1) {
                onProgramUpdate({ ...program, currentWeek: program.currentWeek - 1 });
              }
            }}
            disabled={program.currentWeek <= 1}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous Week
          </button>
          
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((week) => (
              <button
                key={week}
                onClick={() => onProgramUpdate({ ...program, currentWeek: week })}
                className={`w-10 h-10 rounded-full text-sm font-medium transition-colors ${
                  program.currentWeek === week
                    ? 'bg-indigo-600 text-white'
                    : week < program.currentWeek
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {week}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => {
              if (program.currentWeek < 8) {
                onProgramUpdate({ ...program, currentWeek: program.currentWeek + 1 });
              }
            }}
            disabled={program.currentWeek >= 8}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next Week →
          </button>
        </div>
      </div>

      {/* Research Context for This Week */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-100">
        <h3 className="font-semibold text-yellow-900 mb-2">💡 Week {program.currentWeek} Research Insights</h3>
        <div className="text-sm text-yellow-800 space-y-2">
          {program.currentWeek <= 2 && (
            <p>• <strong>Foundation weeks:</strong> Focus on rebuilding fundamentals rather than jumping to hard problems</p>
          )}
          {program.currentWeek >= 3 && program.currentWeek <= 5 && (
            <p>• <strong>Core learning:</strong> This is when pattern recognition and system design thinking solidify</p>
          )}
          {program.currentWeek >= 6 && (
            <p>• <strong>Polish phase:</strong> Practice under interview conditions and address specific weak areas</p>
          )}
          <p>• <strong>Interleaving strategy:</strong> Mix topics daily rather than blocking weeks by topic</p>
          <p>• <strong>Quality focus:</strong> 2-3 quality hours beats 6 hours of unfocused study</p>
        </div>
      </div>
    </div>
  );
};

export default WeekView;
