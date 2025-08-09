import React, { useState, useEffect } from 'react';
import { CodingPattern, Problem, Attempt } from '../../features/interview-prep-v2/types';
import { loadCodingPatterns, recordProblemAttempt } from '../../features/interview-prep-v2/storage';

interface PatternMasteryProps {
  onDataRefresh: () => void;
}

const PatternMastery: React.FC<PatternMasteryProps> = ({ onDataRefresh }) => {
  const [patterns, setPatterns] = useState<CodingPattern[]>([]);
  const [selectedPattern, setSelectedPattern] = useState<CodingPattern | null>(null);
  const [showAttemptModal, setShowAttemptModal] = useState<Problem | null>(null);
  const [attemptForm, setAttemptForm] = useState({
    timeSpent: 30,
    solved: false,
    needsReview: false,
    approach: '',
    notes: ''
  });

  useEffect(() => {
    loadPatterns();
  }, []);

  const loadPatterns = () => {
    const patternsData = loadCodingPatterns();
    setPatterns(patternsData);
    if (!selectedPattern && patternsData.length > 0) {
      setSelectedPattern(patternsData[0]);
    }
  };

  const handleRecordAttempt = () => {
    if (!selectedPattern || !showAttemptModal) return;

    const updatedPatterns = recordProblemAttempt(
      selectedPattern.id,
      showAttemptModal.id,
      attemptForm
    );

    setPatterns(updatedPatterns);
    setShowAttemptModal(null);
    setAttemptForm({
      timeSpent: 30,
      solved: false,
      needsReview: false,
      approach: '',
      notes: ''
    });
    onDataRefresh();
  };

  const getMasteryBadge = (level: number) => {
    switch (level) {
      case 0: return { text: 'Not Started', color: 'bg-gray-100 text-gray-700', icon: '⭕' };
      case 1: return { text: 'Learning', color: 'bg-yellow-100 text-yellow-800', icon: '📚' };
      case 2: return { text: 'Practicing', color: 'bg-blue-100 text-blue-800', icon: '💪' };
      case 3: return { text: 'Mastered', color: 'bg-green-100 text-green-800', icon: '🏆' };
      default: return { text: 'Unknown', color: 'bg-gray-100 text-gray-700', icon: '❓' };
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCompanyBadges = (companies: string[]) => {
    const companyColors: Record<string, string> = {
      'Google': 'bg-blue-100 text-blue-800',
      'Facebook': 'bg-blue-100 text-blue-800',
      'Amazon': 'bg-orange-100 text-orange-800',
      'Apple': 'bg-gray-100 text-gray-800',
      'Netflix': 'bg-red-100 text-red-800',
      'Microsoft': 'bg-blue-100 text-blue-800'
    };

    return companies.slice(0, 3).map(company => (
      <span 
        key={company}
        className={`text-xs px-2 py-1 rounded-full ${companyColors[company] || 'bg-gray-100 text-gray-800'}`}
      >
        {company}
      </span>
    ));
  };

  const totalProblems = patterns.reduce((sum, pattern) => sum + pattern.problems.length, 0);
  const masteredProblems = patterns.reduce((sum, pattern) => 
    sum + pattern.problems.filter(p => p.mastered).length, 0
  );
  const masteryPercentage = totalProblems > 0 ? (masteredProblems / totalProblems) * 100 : 0;

  return (
    <div className="space-y-8">
      {/* Header with Overview Stats */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="text-3xl mr-3">🧩</span>
              Pattern-Based Mastery
            </h2>
            <p className="text-gray-600 mt-1">Quality over quantity • NeetCode 150 approach</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-indigo-600">{Math.round(masteryPercentage)}%</div>
            <div className="text-sm text-gray-500">Overall Mastery</div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <div className="text-2xl font-bold text-gray-900">{totalProblems}</div>
            <div className="text-sm text-gray-600">Total Problems</div>
            <div className="text-xs text-gray-500 mt-1">Curated selection</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-xl">
            <div className="text-2xl font-bold text-green-600">{masteredProblems}</div>
            <div className="text-sm text-green-600">Mastered</div>
            <div className="text-xs text-gray-500 mt-1">Ready for interview</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-xl">
            <div className="text-2xl font-bold text-blue-600">{patterns.filter(p => p.masteryLevel >= 2).length}</div>
            <div className="text-sm text-blue-600">Patterns Learned</div>
            <div className="text-xs text-gray-500 mt-1">Building blocks</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">{patterns.filter(p => p.masteryLevel === 3).length}</div>
            <div className="text-sm text-purple-600">Patterns Mastered</div>
            <div className="text-xs text-gray-500 mt-1">Interview ready</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Pattern List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 h-fit">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Patterns to Master</h3>
              <p className="text-sm text-gray-600 mt-1">Research-backed problem patterns</p>
            </div>
            <div className="p-4 space-y-3">
              {patterns.map((pattern) => {
                const badge = getMasteryBadge(pattern.masteryLevel);
                const masteredCount = pattern.problems.filter(p => p.mastered).length;
                
                return (
                  <button
                    key={pattern.id}
                    onClick={() => setSelectedPattern(pattern)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      selectedPattern?.id === pattern.id
                        ? 'border-indigo-300 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">{pattern.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${badge.color}`}>
                        {badge.icon} {badge.text}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{pattern.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {masteredCount}/{pattern.problems.length} mastered
                      </span>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-indigo-500 h-2 rounded-full transition-all"
                          style={{ width: `${(masteredCount / pattern.problems.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Pattern Details */}
        <div className="lg:col-span-2">
          {selectedPattern ? (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedPattern.name}</h3>
                    <p className="text-gray-600 mt-1">{selectedPattern.description}</p>
                  </div>
                  <div className="text-right">
                    {(() => {
                      const badge = getMasteryBadge(selectedPattern.masteryLevel);
                      return (
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${badge.color}`}>
                          {badge.icon} {badge.text}
                        </span>
                      );
                    })()}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {selectedPattern.problems.map((problem) => (
                    <div 
                      key={problem.id}
                      className={`p-4 border-2 rounded-xl transition-all ${
                        problem.mastered 
                          ? 'border-green-200 bg-green-50' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{problem.title}</h4>
                            {problem.leetcodeId && (
                              <span className="text-xs text-gray-500">#{problem.leetcodeId}</span>
                            )}
                            <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(problem.difficulty)}`}>
                              {problem.difficulty}
                            </span>
                            {problem.mastered && (
                              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                                ✓ Mastered
                              </span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mb-2">
                            {getCompanyBadges(problem.companies)}
                          </div>
                          <div className="text-sm text-gray-600">
                            Attempts: {problem.attempts.length} • 
                            Success Rate: {problem.attempts.length > 0 ? 
                              Math.round((problem.attempts.filter(a => a.solved).length / problem.attempts.length) * 100) : 0}%
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setShowAttemptModal(problem)}
                            className="px-3 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-medium"
                          >
                            Record Attempt
                          </button>
                          {problem.leetcodeId && (
                            <a
                              href={`https://leetcode.com/problems/${problem.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}/`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                            >
                              LeetCode →
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Recent Attempts */}
                      {problem.attempts.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <div className="text-xs text-gray-600 mb-2">Recent Attempts:</div>
                          <div className="flex space-x-2">
                            {problem.attempts.slice(-3).map((attempt, idx) => (
                              <div 
                                key={idx}
                                className={`text-xs px-2 py-1 rounded ${
                                  attempt.solved ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}
                              >
                                {attempt.solved ? '✓' : '✗'} {attempt.timeSpent}min
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
              <span className="text-6xl">🧩</span>
              <p className="text-gray-600 mt-4">Select a pattern to view problems</p>
            </div>
          )}
        </div>
      </div>

      {/* Attempt Recording Modal */}
      {showAttemptModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Record Attempt: {showAttemptModal.title}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Spent (minutes)
                </label>
                <input
                  type="number"
                  value={attemptForm.timeSpent}
                  onChange={(e) => setAttemptForm(prev => ({ ...prev, timeSpent: Number(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  min="1"
                  max="120"
                />
              </div>

              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={attemptForm.solved}
                    onChange={(e) => setAttemptForm(prev => ({ ...prev, solved: e.target.checked }))}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Solved correctly</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={attemptForm.needsReview}
                    onChange={(e) => setAttemptForm(prev => ({ ...prev, needsReview: e.target.checked }))}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Needs review</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Approach Used
                </label>
                <input
                  type="text"
                  value={attemptForm.approach}
                  onChange={(e) => setAttemptForm(prev => ({ ...prev, approach: e.target.value }))}
                  placeholder="e.g., Two pointers, Dynamic programming"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  value={attemptForm.notes}
                  onChange={(e) => setAttemptForm(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Any insights, mistakes, or things to remember..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowAttemptModal(null)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRecordAttempt}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Record Attempt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Research Context */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-100">
        <h3 className="font-semibold text-blue-900 mb-2">📚 Research-Based Pattern Learning</h3>
        <p className="text-sm text-blue-800">
          Studies show that mastering <strong>100-150 curated problems</strong> covering key patterns is more effective 
          than grinding 500+ random questions. This approach builds pattern recognition skills that transfer to new problems.
        </p>
      </div>
    </div>
  );
};

export default PatternMastery;
