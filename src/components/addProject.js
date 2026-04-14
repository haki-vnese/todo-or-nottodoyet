import { addProject } from "../modules/projects.js";
import { renderSideBar } from "./sidebar.js";

export function createAddProject() {
    const button = document.createElement('button');
    button.classList.add('add-project-btn');

    const icon = document.createElement('span');
    icon.classList.add('add-project-icon');
    icon.textContent = '+';

    const text = document.createElement('span');
    text.classList.add('add-project-text');
    text.textContent = 'Add Project';

    button.append(icon, text);
    
    button.addEventListener('click', () => {
        openAddProjectModal();
    });

    return button;
}

export function openAddProjectModal() {
    // Create modal elements
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');

    // Modal content
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const title = document.createElement('h2');
    title.classList.add('modal-title');
    title.textContent = 'Add New Project';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter project name...';
    input.classList.add('modal-input');

    // Modal actions
    const actions = document.createElement('div');
    actions.classList.add('modal-actions');

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add';
    addBtn.classList.add('modal-add-btn');

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('modal-cancel-btn');

    function closeModal() { // Remove modal from DOM
        overlay.remove();
    }

    function handleAdd() { // Get project name, add project to state, re-render sidebar and close modal
        const name = input.value.trim();
        if (!name) return;

        addProject(name);
        renderSideBar();
        closeModal();
    };

    addBtn.addEventListener('click', handleAdd); // Add project on button click
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    });
    cancelBtn.addEventListener('click', closeModal); // Close modal on cancel

    // Close modal when clicking outside of it
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