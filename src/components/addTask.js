import { addTask } from '../modules/tasks.js';
import { renderTaskList } from './taskList.js';
import { state } from '../modules/state.js';

export function createAddTask() { // Create add task button
    
    const button = document.createElement('button');
    button.classList.add('add-task-btn');

    const icon = document.createElement('span');
    icon.classList.add('add-task-icon');
    icon.textContent = '+';

    const text = document.createElement('span');
    text.classList.add('add-task-text');
    text.textContent = 'Add Task';

    button.append(icon, text);
    
    button.addEventListener('click', () => { // Open prompt to enter task title, add task to state and re-render list
        openAddTaskModal();
    });

    return button;
}

function openAddTaskModal() {
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const title = document.createElement('h2');
    title.classList.add('modal-title');
    if (state.selectedProjectId === null) {
        title.textContent = 'Add Task to Inbox';
    } else {
        const project = state.projects.find(p => p.id === state.selectedProjectId);
        title.textContent = `Add Task to ${project ? project.name : 'Project'}`;
    }

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter task title...';
    input.classList.add('modal-input');

    const actions = document.createElement('div');
    actions.classList.add('modal-actions');

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    addBtn.classList.add('modal-add-btn');

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('modal-cancel-btn');

    function closeModal() {
        overlay.remove();
    }

    function handleAddTask() {
        const value = input.value.trim();

        if (!value) {
        input.focus();
        return;
        }

        addTask(value);
        renderTaskList();
        closeModal();
    }

    addBtn.addEventListener('click', handleAddTask);

    cancelBtn.addEventListener('click', closeModal);

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
        handleAddTask();
        }

        if (event.key === 'Escape') {
        closeModal();
        }
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
        closeModal();
        }
    });

    actions.append(addBtn, cancelBtn);
    modal.append(title, input, actions);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    input.focus();
}