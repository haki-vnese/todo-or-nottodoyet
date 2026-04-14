import { state } from './state.js';

export function toggleTask(taskId) {
    // Find task using ID
    const task = state.tasks.find(task => task.id === taskId);

    // If task not found, exit function
    if (!task) {
        return;
    }
    task.completed = !task.completed;
}

export function deleteTask(taskId) {
    state.tasks = state.tasks.filter(task => task.id !== taskId);
}

