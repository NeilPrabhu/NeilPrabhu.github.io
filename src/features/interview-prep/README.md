# Interview Prep Tracker

A private, password-protected section for tracking your 70-day backend engineering interview preparation progress.

## 🔐 Access

- **URL**: `/interview-prep` (hidden route, not linked in navigation)
- **Password**: `secret` (default - you should change this!)
- **Session**: 24-hour expiration

## 🔧 How to Change the Password

1. Open `src/features/interview-prep/auth.ts`
2. Use the `getPasswordHash()` function in browser console to generate a new hash:
   ```javascript
   import { getPasswordHash } from './auth';
   getPasswordHash('your-new-password').then(console.log);
   ```
3. Replace the `EXPECTED_HASH` constant with your new hash

## 📊 Features

### Dashboard
- **Overall Progress**: Visual progress tracking across all categories
- **Category Breakdown**: Coding, System Design, Infrastructure, Behavioral
- **Quick Stats**: Days completed, remaining, current week/day

### Task Management
- **Daily Tasks**: 4 categories per day with completion tracking
- **Notes**: Add personal reflections and insights for each day
- **Week Navigation**: Jump between weeks easily
- **Visual Indicators**: Progress bars, completion badges

### Data Management
- **Local Storage**: All progress saved in browser localStorage
- **CSV Export**: Download your progress as a CSV file
- **Offline**: Works completely offline after initial load

## 📈 Progress Tracking

Each day has 4 task types:
- 💻 **Coding**: LeetCode problems and algorithmic challenges
- 🏗️ **System Design**: Architecture reading and design practice
- ⚙️ **Infrastructure**: DevOps, K8s, AWS, and tooling practice
- 🎯 **Behavioral**: STAR method stories and leadership scenarios

## 🔄 Data Structure

Your progress is stored as:
```typescript
{
  globalDay: number,
  week: number,
  dayOfWeek: number,
  doneCoding: boolean,
  doneSD: boolean,
  doneInfra: boolean,
  doneBehavioral: boolean,
  notes: string
}
```

## 🛡️ Security Notes

- **Client-side only**: No server-side authentication
- **Browser localStorage**: Data persists locally
- **Session timeout**: 24-hour automatic logout
- **Password hashing**: SHA-256 hashed passwords
- **For personal use**: Not meant for multi-user scenarios

## 💡 Tips

1. **Daily routine**: Check off tasks as you complete them
2. **Take notes**: Use the notes section for insights and learnings
3. **Export regularly**: Download CSV backups of your progress
4. **Week overview**: Use week navigation to see your overall progress
5. **Mobile friendly**: Works on phones and tablets

## 🔧 Development

To modify the interview prep plan:
1. Edit `src/features/interview-prep/data.ts`
2. Update the `interviewPrepData` array
3. Rebuild the application

The CSV structure matches exactly with the original plan for easy import/export.
