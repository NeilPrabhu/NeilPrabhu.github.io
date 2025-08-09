# Interview Prep Tracker

A private, password-protected section for tracking your 70-day backend engineering interview preparation progress with **built-in accountability and timeline tracking**.

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

## 🎯 **NEW: Accountability System**

### **📅 Real-Time Timeline Tracking**
- **Start Date**: Automatically recorded when you first begin
- **Expected vs Actual**: Shows where you should be vs where you are
- **Status Indicators**: Ahead 🚀 | On Track 🎯 | Behind ⚠️ | Paused ⏸️
- **Smart Recommendations**: Personalized advice based on your progress

### **🔥 Streak Tracking**
- **Current Streak**: Consecutive days with activity
- **Best Streak**: Personal record for motivation
- **Daily Check-ins**: Automatic tracking when you complete tasks
- **Motivational Messages**: Context-aware encouragement

### **⏸️ Flexible Timeline Management**
- **Pause Feature**: Stop the timeline for vacations/emergencies
- **Resume Anytime**: Pick up where you left off
- **Life-Friendly**: Accounts for real-world interruptions
- **No Penalties**: Pausing prevents falling behind

## 📊 Enhanced Features

### **🎯 Accountability Dashboard**
- **Timeline Status**: Visual tracking of expected vs actual progress
- **Streak Counters**: Current and best streaks with 🔥 indicators
- **Start Date Tracking**: Shows journey beginning and days elapsed
- **Motivational Messages**: Adaptive encouragement based on status

### **📈 Smart Progress Tracking**
- **Calendar-Based**: Progress tied to real dates, not just task completion
- **Catch-Up Recommendations**: Specific advice when behind schedule
- **Ahead Recognition**: Celebrate when you're exceeding expectations
- **Flexible Scheduling**: Pause for life events without guilt

### **🎨 Enhanced UI**
- **Color-Coded Status**: Visual indicators for timeline status
- **Progress Visualization**: Multiple progress bars and statistics
- **One-Click Task Completion**: Streamlined daily workflow
- **Study Guide Integration**: Built-in help for each topic area

### Traditional Features
- **Daily Tasks**: 4 categories per day with completion tracking
- **Notes**: Add personal reflections and insights for each day
- **Week Navigation**: Jump between weeks easily
- **Visual Indicators**: Progress bars, completion badges
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

## 🎯 **How Accountability Works**

### **📅 Timeline Calculation**
1. **Start Date**: Recorded automatically on first login
2. **Expected Day**: `(Today - Start Date) + 1` (includes weekends for maximum accountability)
3. **Actual Day**: Furthest day where all 4 tasks are complete
4. **Status**: Compared to determine if you're ahead, on track, or behind

### **🔥 Streak System**
- **Daily Check-in**: Triggered by completing any task
- **Streak Rules**: Consecutive calendar days with activity
- **Break Recovery**: Start fresh if you miss a day
- **Best Streak**: Saved as motivation and personal record

### **⏸️ Pause Functionality**
- **When to Use**: Vacations, illness, emergencies, busy periods
- **How it Works**: Freezes expected day calculation
- **Duration**: 1 day to 1 month options
- **Resume**: One-click to continue journey

### **🎯 Status Meanings**
- **🚀 Ahead**: 3+ days beyond expected (celebrate!)
- **🎯 On Track**: Within 1 day of expected (perfect!)
- **⚠️ Behind**: 2+ days behind expected (catch-up mode)
- **⏸️ Paused**: Timeline frozen (take your time)

## 💡 Pro Tips

### **🏃‍♂️ Staying Accountable**
1. **Check daily**: The accountability tracker shows exactly where you should be
2. **Use streaks**: Aim for longer streaks to build habit momentum
3. **Pause strategically**: Don't feel guilty about pausing for life events
4. **Catch up smartly**: When behind, focus on completing full days rather than scattered tasks
5. **Celebrate wins**: Being ahead or maintaining streaks deserves recognition!

### **📚 Daily Workflow**
1. **Morning check**: See your accountability status and today's goal
2. **Complete tasks**: Check off as you finish each category
3. **Add notes**: Capture insights and learnings
4. **Evening review**: See streak updates and tomorrow's target

### **🎯 Strategic Planning**
1. **Weekend catching up**: Use weekends to get ahead when behind
2. **Buffer building**: Try to stay 1-2 days ahead for flexibility
3. **Pause planning**: Pause before vacations rather than falling behind
4. **Export regularly**: Download CSV backups of your progress

## 🔧 Development

To modify the interview prep plan:
1. Edit `src/features/interview-prep/data.ts`
2. Update the `interviewPrepData` array
3. Rebuild the application

The CSV structure matches exactly with the original plan for easy import/export.
