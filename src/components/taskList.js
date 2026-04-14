import { createTaskItem } from './taskItem.js';
import { state } from '../modules/state.js';    

// Create task list container and populate with task items
export function createTaskList() {
    const taskList = document.createElement('section');
    taskList.classList.add('task-list');
    taskList.id = 'task-list';

    const filteredTasks = state.tasks.filter((task) => {
        if (task.selectedProjectId === null) {
            return task.projectId === null; // Show only tasks without a project
        }

        return task.projectId === state.selectedProjectId; // Show tasks for selected project
    })

    // If no tasks match the filter, show empty message
    if (filteredTasks.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No tasks here yet.';
        taskList.appendChild(emptyMessage);
        return taskList;
    }

    filteredTasks.forEach(task => {
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