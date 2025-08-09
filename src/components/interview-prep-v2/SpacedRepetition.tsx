import React, { useState, useEffect } from 'react';
import { ReviewItem } from '../../features/interview-prep-v2/types';
import { getItemsForReview, updateReviewItem } from '../../features/interview-prep-v2/storage';

interface SpacedRepetitionProps {
  onDataRefresh: () => void;
}

const SpacedRepetition: React.FC<SpacedRepetitionProps> = ({ onDataRefresh }) => {
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([]);
  const [currentReview, setCurrentReview] = useState<ReviewItem | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    loadReviewItems();
  }, []);

  const loadReviewItems = () => {
    const items = getItemsForReview();
    setReviewItems(items);
    if (items.length > 0 && !currentReview) {
      setCurrentReview(items[0]);
    }
  };

  const handleReview = (difficulty: number) => {
    if (!currentReview) return;

    updateReviewItem(currentReview.id, currentReview.type, difficulty);
    
    const remainingItems = reviewItems.filter(item => item.id !== currentReview.id);
    setReviewItems(remainingItems);
    
    if (remainingItems.length > 0) {
      setCurrentReview(remainingItems[0]);
    } else {
      setCurrentReview(null);
    }
    
    setShowAnswer(false);
    onDataRefresh();
  };

  const getTypeIcon = (type: ReviewItem['type']) => {
    switch (type) {
      case 'pattern': return '🧩';
      case 'problem': return '💻';
      case 'concept': return '📚';
      case 'story': return '🎭';
      default: return '📝';
    }
  };

  const getTypeColor = (type: ReviewItem['type']) => {
    switch (type) {
      case 'pattern': return 'bg-emerald-100 text-emerald-800';
      case 'problem': return 'bg-blue-100 text-blue-800';
      case 'concept': return 'bg-purple-100 text-purple-800';
      case 'story': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyLabel = (rating: number) => {
    switch (rating) {
      case 5: return { text: 'Perfect recall', color: 'text-green-600' };
      case 4: return { text: 'Easy recall', color: 'text-green-600' };
      case 3: return { text: 'Some hesitation', color: 'text-yellow-600' };
      case 2: return { text: 'Difficult recall', color: 'text-orange-600' };
      case 1: return { text: 'Barely remembered', color: 'text-red-600' };
      case 0: return { text: 'Complete blackout', color: 'text-red-600' };
      default: return { text: 'Unknown', color: 'text-gray-600' };
    }
  };

  if (reviewItems.length === 0) {
    return (
      <div className="space-y-8">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center border border-gray-100">
          <span className="text-6xl">🎉</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2">All Caught Up!</h2>
          <p className="text-gray-600 mb-6">No items due for review today. Great job staying consistent!</p>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2">🧠 About Spaced Repetition</h3>
            <p className="text-sm text-green-800">
              This system uses the SuperMemo 2 algorithm to optimize when you review concepts. 
              Items you struggle with appear more frequently, while mastered concepts are spaced further apart.
              This maximizes retention while minimizing study time.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <span className="text-3xl mr-3">🧠</span>
              Spaced Repetition Reviews
            </h2>
            <p className="text-gray-600 mt-1">Knowledge retention through scientifically-optimized review intervals</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-purple-600">{reviewItems.length}</div>
            <div className="text-sm text-gray-500">Items due today</div>
          </div>
        </div>
      </div>

      {currentReview && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">
                Review {reviewItems.length - reviewItems.indexOf(currentReview)} of {reviewItems.length}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(currentReview.type)}`}>
                {getTypeIcon(currentReview.type)} {currentReview.type}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ 
                  width: `${((reviewItems.length - reviewItems.indexOf(currentReview)) / reviewItems.length) * 100}%` 
                }}
              />
            </div>
          </div>

          {/* Review Card */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentReview.title}</h3>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Try to recall everything you know about this topic before revealing the answer.
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Last reviewed: {new Date(currentReview.lastReviewed).toLocaleDateString()}</p>
                  <p>Review count: {currentReview.repetitions}</p>
                  <p>Current interval: {currentReview.interval} days</p>
                </div>
              </div>

              {!showAnswer ? (
                <button
                  onClick={() => setShowAnswer(true)}
                  className="px-8 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors font-medium text-lg"
                >
                  Show Answer / Info
                </button>
              ) : (
                <div className="space-y-6">
                  {/* Placeholder for answer content - in real implementation, this would show */}
                  {/* problem solutions, concept explanations, story details, etc. */}
                  <div className="bg-gray-50 rounded-xl p-6 text-left">
                    <h4 className="font-semibold text-gray-900 mb-3">Review Content:</h4>
                    <div className="text-gray-700 space-y-2">
                      {currentReview.type === 'problem' && (
                        <>
                          <p>• Review the solution approach and time complexity</p>
                          <p>• Practice explaining the algorithm out loud</p>
                          <p>• Consider edge cases and optimizations</p>
                        </>
                      )}
                      {currentReview.type === 'pattern' && (
                        <>
                          <p>• Recall when to use this pattern</p>
                          <p>• Think of 2-3 example problems</p>
                          <p>• Remember the key implementation details</p>
                        </>
                      )}
                      {currentReview.type === 'concept' && (
                        <>
                          <p>• Explain the concept in your own words</p>
                          <p>• Think of real-world applications</p>
                          <p>• Consider trade-offs and alternatives</p>
                        </>
                      )}
                      {currentReview.type === 'story' && (
                        <>
                          <p>• Practice telling the story using STAR method</p>
                          <p>• Emphasize your role and impact</p>
                          <p>• Prepare for follow-up questions</p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Rating Buttons */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">How well did you remember this?</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        { rating: 5, emoji: '🎯', label: 'Perfect' },
                        { rating: 4, emoji: '👍', label: 'Easy' },
                        { rating: 3, emoji: '🤔', label: 'Some effort' },
                        { rating: 2, emoji: '😅', label: 'Difficult' },
                        { rating: 1, emoji: '😰', label: 'Barely' },
                        { rating: 0, emoji: '🤯', label: 'Forgot' }
                      ].map(({ rating, emoji, label }) => {
                        const difficultyInfo = getDifficultyLabel(rating);
                        return (
                          <button
                            key={rating}
                            onClick={() => handleReview(rating)}
                            className={`p-4 rounded-xl border-2 hover:border-purple-300 transition-all text-center ${
                              rating >= 3 ? 'border-green-200 hover:bg-green-50' : 'border-red-200 hover:bg-red-50'
                            }`}
                          >
                            <div className="text-2xl mb-1">{emoji}</div>
                            <div className="font-medium text-gray-900">{label}</div>
                            <div className={`text-xs ${difficultyInfo.color}`}>
                              {difficultyInfo.text}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Review Queue */}
      {reviewItems.length > 1 && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Reviews</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {reviewItems.slice(1, 6).map((item, index) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{getTypeIcon(item.type)}</span>
                    <div>
                      <div className="font-medium text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600">
                        {item.repetitions} reviews • Next: {item.interval} day interval
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                    {item.type}
                  </span>
                </div>
              ))}
              {reviewItems.length > 6 && (
                <div className="text-center text-gray-500 text-sm pt-2">
                  ... and {reviewItems.length - 6} more items
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Spaced Repetition Info */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-2 border-blue-100">
        <h3 className="font-semibold text-blue-900 mb-3">🔬 How Spaced Repetition Works</h3>
        <div className="text-sm text-blue-800 space-y-2">
          <p>• <strong>SuperMemo 2 Algorithm:</strong> Scientifically proven to maximize retention with minimal reviews</p>
          <p>• <strong>Adaptive Intervals:</strong> Easy items are reviewed less frequently, difficult items more often</p>
          <p>• <strong>Research Shows:</strong> 90%+ retention possible with just 5-10 minutes of daily review</p>
          <p>• <strong>Long-term Memory:</strong> Information reviewed with spaced repetition lasts years, not weeks</p>
        </div>
      </div>
    </div>
  );
};

export default SpacedRepetition;
