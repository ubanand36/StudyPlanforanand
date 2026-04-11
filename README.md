# StudyPlan

**AI-powered study planner and deadline manager.** Paste any text an email, assignment brief, or WhatsApp message and StudyPlan extracts deadlines, subjects, and tasks, then automatically adds them to your calendar and to-do list.

---

## The Problem

Students already have all the information they need. It's buried in emails, group chats, and course portals. Re-entering it manually into a planner is tedious, error-prone, and where things get missed.

StudyPlan eliminates that step entirely.

---

## Features

- **Smart paste & AI extraction** — paste free-form text and get structured tasks back in seconds, with confidence scores and inline editing before anything is saved
- **Calendar view** — month and week views, color-coded by subject, with deadline markers and conflict detection
- **To-do list** — grouped by subject, sortable by due date or priority, with Not Started / In Progress / Done tracking
- **Conflict detection** — automatic warnings when multiple deadlines cluster on the same day or week
- **Focus mode** — hides everything except today's tasks
- **Subject management** — create subjects with custom colors and short codes; the app learns your abbreviations over time

---

## How It Works

1. Paste any text into the Smart Paste panel
2. The AI extracts tasks, deadlines, subjects, and notes
3. Review extracted items — edit anything, confirm ambiguous dates
4. Hit **Add to planner** — calendar and to-do list update instantly

---

## Project Structure

```
StudyPlan
├──  css
│   └──  index.css           
├──  js
│   ├──  utils
│   │   ├──  aiMock.js       
│   │   └──  api.js          
│   ├──  app.js              
│   └──  store.js            
├──  .env.example            
├──  .gitignore              
├──  database.js             
├──  index.html              
├──  package.json            
├──  README.md               
├──  server.js               
└──  studyplan.db            

```

---

## Design Decisions

**Confidence scores are shown, not hidden.** The AI shows its work. Items below 70% confidence are flagged and require user confirmation before saving no silent auto-adds.

**Paste is the primary action.** The paste zone is always accessible, not buried in a menu. Manual task entry exists but is secondary.

**Calendar is read-only by default.** Tasks are created via paste or the + button. Clicking a calendar cell doesn't create a task, this avoids confusion between viewing and editing.

**Conflict warnings are persistent.** Deadline clusters appear as a pinned card in the task list, not a disappearing toast notification.

---

## License

MIT
