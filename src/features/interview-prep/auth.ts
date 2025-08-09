// Simple client-side authentication for interview prep section
// Note: This is for personal use only - not cryptographically secure

const AUTH_KEY = 'interview_prep_auth';
const SESSION_KEY = 'interview_prep_session';

// You can change this password - it's hashed with a simple algorithm
const EXPECTED_HASH = '2bb80d537b1da3e38bd30361aa855686bde0eacd7162fef6a25fe97bf527a25b'; // "secret"

// Simple hash function (you should change the password)
const simpleHash = (str: string): string => {
  let hash = 0;
  if (str.length === 0) return hash.toString();
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
};

// Better hash function using Web Crypto API
const betterHash = async (str: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

export const authenticate = async (password: string): Promise<boolean> => {
  try {
    const hash = await betterHash(password);
    if (hash === EXPECTED_HASH) {
      // Store session with expiration (24 hours)
      const session = {
        authenticated: true,
        expires: Date.now() + (24 * 60 * 60 * 1000)
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return true;
    }
    return false;
  } catch (error) {
    // Fallback to simple hash if Web Crypto API is not available
    const hash = simpleHash(password);
    if (hash === '79d86e') { // "secret" with simple hash
      const session = {
        authenticated: true,
        expires: Date.now() + (24 * 60 * 60 * 1000)
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
      return true;
    }
    return false;
  }
};

export const isAuthenticated = (): boolean => {
  try {
    const sessionData = localStorage.getItem(SESSION_KEY);
    if (!sessionData) return false;
    
    const session = JSON.parse(sessionData);
    if (Date.now() > session.expires) {
      localStorage.removeItem(SESSION_KEY);
      return false;
    }
    
    return session.authenticated === true;
  } catch {
    return false;
  }
};

export const logout = (): void => {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(AUTH_KEY);
};

// For development - you can call this to get the hash of a new password
export const getPasswordHash = async (password: string): Promise<string> => {
  return await betterHash(password);
};
