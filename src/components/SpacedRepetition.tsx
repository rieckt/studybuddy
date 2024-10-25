import React, { useState } from 'react';
import { Brain, Plus, ArrowRight, ArrowLeft, X } from 'lucide-react';

interface FlashCard {
  id: string;
  question: string;
  answer: string;
  module?: string;
  lastReviewed?: Date;
  nextReview?: Date;
  difficulty: 'easy' | 'medium' | 'hard';
}

function SpacedRepetition() {
  const [cards, setCards] = useState<FlashCard[]>([
    {
      id: '1',
      question: 'What is a linear transformation?',
      answer: 'A function between vector spaces that preserves vector addition and scalar multiplication.',
      module: 'Mathematics III',
      lastReviewed: new Date(2024, 2, 10),
      nextReview: new Date(2024, 2, 15),
      difficulty: 'medium',
    },
  ]);

  const [showAddCard, setShowAddCard] = useState(false);
  const [newCard, setNewCard] = useState({
    question: '',
    answer: '',
    module: '',
    difficulty: 'medium' as const,
  });
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAddCard = () => {
    if (newCard.question && newCard.answer) {
      const card: FlashCard = {
        id: Date.now().toString(),
        question: newCard.question,
        answer: newCard.answer,
        module: newCard.module,
        difficulty: newCard.difficulty,
        lastReviewed: new Date(),
      };
      setCards((prev) => [...prev, card]);
      setShowAddCard(false);
      setNewCard({ question: '', answer: '', module: '', difficulty: 'medium' });
    }
  };

  const handleNextCard = () => {
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-warmGray-900">Study Cards</h2>
        <button
          onClick={() => setShowAddCard(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Card
        </button>
      </div>

      {cards.length > 0 ? (
        <div className="bg-white p-8 rounded-xl shadow-sm border border-warmGray-200">
          <div className="max-w-2xl mx-auto">
            <div className="aspect-[3/2] bg-warmGray-50 rounded-lg p-8 flex items-center justify-center text-center mb-6">
              <div className="space-y-4">
                {!showAnswer ? (
                  <>
                    <Brain className="h-8 w-8 text-primary-500 mx-auto mb-4" />
                    <p className="text-xl font-medium text-warmGray-900">
                      {cards[currentCardIndex].question}
                    </p>
                    <button
                      onClick={() => setShowAnswer(true)}
                      className="btn-primary mt-4"
                    >
                      Show Answer
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-xl font-medium text-warmGray-900">
                      {cards[currentCardIndex].answer}
                    </p>
                    <button
                      onClick={() => setShowAnswer(false)}
                      className="btn-primary mt-4"
                    >
                      Hide Answer
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevCard}
                disabled={currentCardIndex === 0}
                className="p-2 rounded-lg hover:bg-warmGray-50 disabled:opacity-50"
              >
                <ArrowLeft className="h-6 w-6 text-warmGray-600" />
              </button>
              <span className="text-warmGray-500">
                Card {currentCardIndex + 1} of {cards.length}
              </span>
              <button
                onClick={handleNextCard}
                disabled={currentCardIndex === cards.length - 1}
                className="p-2 rounded-lg hover:bg-warmGray-50 disabled:opacity-50"
              >
                <ArrowRight className="h-6 w-6 text-warmGray-600" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-warmGray-200">
          <Brain className="h-12 w-12 text-warmGray-400 mx-auto mb-4" />
          <p className="text-warmGray-600">No study cards yet. Create your first one!</p>
        </div>
      )}

      {showAddCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-warmGray-900">Create Study Card</h3>
              <button
                onClick={() => setShowAddCard(false)}
                className="p-2 hover:bg-warmGray-50 rounded-lg"
              >
                <X className="h-5 w-5 text-warmGray-500" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Question
                </label>
                <textarea
                  className="input-field"
                  value={newCard.question}
                  onChange={(e) => setNewCard({ ...newCard, question: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Answer
                </label>
                <textarea
                  className="input-field"
                  value={newCard.answer}
                  onChange={(e) => setNewCard({ ...newCard, answer: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Module (Optional)
                </label>
                <input
                  type="text"
                  className="input-field"
                  value={newCard.module}
                  onChange={(e) => setNewCard({ ...newCard, module: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-warmGray-700 mb-1">
                  Difficulty
                </label>
                <select
                  className="input-field"
                  value={newCard.difficulty}
                  onChange={(e) =>
                    setNewCard({
                      ...newCard,
                      difficulty: e.target.value as 'easy' | 'medium' | 'hard',
                    })
                  }
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowAddCard(false)}
                className="px-4 py-2 text-warmGray-600 hover:bg-warmGray-50 rounded-lg"
              >
                Cancel
              </button>
              <button onClick={handleAddCard} className="btn-primary">
                Create Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpacedRepetition;