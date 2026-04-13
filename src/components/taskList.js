import { createTaskItem } from './taskItem.js';
import { state } from '../modules/state.js';    

export function createTaskList() {
    const taskList = document.createElement('section');
    taskList.classList.add('task-list');

    state.tasks.forEach(task => {
        const taskItem = createTaskItem(task);
        taskList.appendChild(taskItem);
    });

    return taskList;
}