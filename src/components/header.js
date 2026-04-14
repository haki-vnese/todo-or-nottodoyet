import { state } from "../modules/state.js";

export function createHeader() {
    const header = document.createElement('header');
    header.classList.add('page-header');
    header.id = 'page-header';

    const title = document.createElement('h1');
    if (state.selectedProjectId === null) {
        title.textContent = 'Inbox';
    } else {
        const selectedProject = state.projects.find(project => 
            project.id === state.selectedProjectId);
        title.textContent = selectedProject ? selectedProject.name : 'Inbox';
    }
    
    header.appendChild(title);

    return header;
}

export function renderHeader() {
    const oldHeader = document.querySelector('#page-header');
    const newHeader = createHeader();

    if (oldHeader) {
        oldHeader.replaceWith(newHeader);
    }
}