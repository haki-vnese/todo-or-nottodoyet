import { createTaskItem } from './taskItem.js';
import { state } from '../modules/state.js';    

// Create task list container and populate with task items
export function createTaskList() {
    const taskList = document.createElement('section');
    taskList.classList.add('task-list');

    state.tasks.forEach(task => {
        const taskItem = createTaskItem(task);
        taskList.appendChild(taskItem);
    });

    return taskList;
}

// Render task list by replacing old one with new one
export function renderTaskList() {
    const oldTaskList = document.querySelector('.task-list');
    const newTaskList = createTaskList();

    if (oldTaskList) {
        oldTaskList.replaceWith(newTaskList);
    }
}