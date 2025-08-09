import React, { useState } from 'react';
import { authenticate } from '../../features/interview-prep/auth';

interface AuthGateProps {
  children: React.ReactNode;
  onAuthenticated: () => void;
}

const AuthGate: React.FC<AuthGateProps> = ({ children, onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await authenticate(password);
      if (success) {
        onAuthenticated();
        setPassword('');
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Authentication error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Interview Prep Access</h2>
          <p className="text-gray-600">This section is password protected</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter password"
              disabled={isLoading}
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password.trim()}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Authenticating...' : 'Access Interview Prep'}
          </button>
        </form>

        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>💡 Hint: This is for personal use only</p>
          <p className="mt-1">Session expires after 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default AuthGate;
