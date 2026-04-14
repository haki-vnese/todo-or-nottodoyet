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

export function addTask(title) {
    const newTask = {
        id: Date.now(),
        title,
        completed: false,
        projectId: state.selectedProjectId,
    };
    state.tasks.push(newTask);
}