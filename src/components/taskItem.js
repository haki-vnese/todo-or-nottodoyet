import { deleteTask, toggleTask } from '../modules/tasks.js';
import { renderTaskList } from './taskList';

export function createTaskItem(task) {

    // Create task item container
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    // Add checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.classList.add('task-checkbox');
    checkbox.addEventListener('change', () => {
        toggleTask(task.id);
        renderTaskList();
    });

    // Add title with strikethrough if completed
    const title = document.createElement('span');
    title.textContent = task.title;

    if (task.completed) {
    title.style.textDecoration = 'line-through';
    title.style.color = '#999';
    }

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.classList.add('delete-btn'); 
    deleteBtn.addEventListener('click', () => {
        deleteTask(task.id);
        renderTaskList();
    });

    taskItem.append(checkbox, title, deleteBtn);

    return taskItem;
}