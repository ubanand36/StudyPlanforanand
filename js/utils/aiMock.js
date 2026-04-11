export function extractTasksFromText(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = [];
      const lower = text.toLowerCase();
      
      if (lower.includes('os assignment') || lower.includes('scheduling')) {
        results.push({
          subjectId: 'sub_1',
          title: 'OS Assignment 3 — Scheduling Algorithms',
          dueAt: '2026-04-12T23:00:00',
          priority: 'high',
          confidence: 88,
          notes: 'Submit via portal, include Gantt chart',
          icon: '📅'
        });
      }
      if (lower.includes('maths') || lower.includes('integration')) {
        results.push({
          subjectId: 'sub_2',
          title: 'Integration problem set (Ch. 5)',
          dueAt: '2026-04-16T17:00:00',
          priority: 'medium',
          confidence: 62,
          notes: 'Date inferred — please confirm',
          icon: '❓'
        });
      }
      
      // Fallback
      if (results.length === 0 && text.trim().length > 5) {
        results.push({
          subjectId: 'sub_4',
          title: 'Notes & Deadlines Extraction',
          dueAt: '2026-04-20T12:00:00',
          priority: 'medium',
          confidence: 45,
          notes: 'Manually verify details',
          icon: '❓'
        });
      }
      
      resolve(results);
    }, 1200); // simulate network latency
  });
}
