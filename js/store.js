export const store = {
  subjects: [],
  tasks: [],
  currentPaste: null,
  listeners: [],
  
  subscribe(listener) {
    this.listeners.push(listener);
  },
  
  notify() {
    this.listeners.forEach(l => l());
  },
  
  async fetchInitialData() {
    try {
      const [subsRes, tasksRes] = await Promise.all([
        fetch('http://localhost:3000/api/subjects'),
        fetch('http://localhost:3000/api/tasks')
      ]);
      this.subjects = await subsRes.json();
      this.tasks = await tasksRes.json();
      this.notify();
    } catch (e) {
      console.error('Failed to load initial data', e);
    }
  },

  async addTasks(newTasks) {
    try {
      const res = await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTasks)
      });
      if (res.ok) {
        // reload tasks
        const tasksRes = await fetch('http://localhost:3000/api/tasks');
        this.tasks = await tasksRes.json();
        this.notify();
      }
    } catch (e) {
      console.error('Failed to add tasks', e);
    }
  },

  async toggleTaskStatus(taskId) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      const newStatus = task.status === 'Done' ? 'Not Started' : 'Done';
      // optimistic update
      task.status = newStatus;
      this.notify();
      try {
        await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: newStatus })
        });
      } catch (e) {
        // revert on fail
        task.status = newStatus === 'Done' ? 'Not Started' : 'Done';
        this.notify();
      }
    }
  },

  setExtracted(items) {
    this.currentPaste = items.map(item => ({ ...item, _isEditing: false }));
    this.notify();
  },

  updateExtractedItem(index, updatedFields) {
    if (this.currentPaste && this.currentPaste[index]) {
      this.currentPaste[index] = { ...this.currentPaste[index], ...updatedFields };
      this.notify();
    }
  },

  clearExtracted() {
    this.currentPaste = null;
    this.notify();
  }
};
