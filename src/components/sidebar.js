import { createAddTask } from './addTask.js';
import { state } from '../modules/state.js';
import { renderTaskList } from './taskList.js';
import { renderHeader } from './header.js';

export function createSideBar() {
    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar');
    sideBar.id = 'side-bar';

    const addTask = createAddTask();

    const nav = document.createElement('nav');
    const list = document.createElement('ul');

    const inboxItem = document.createElement('li');
    inboxItem.textContent = 'Inbox';
    inboxItem.classList.add('sidebar-item');

    if (state.selectedProjectId === null) {
        inboxItem.classList.add('active');
    }

    inboxItem.addEventListener('click', () => {
        state.selectedProjectId = null;
        renderHeader();
        renderTaskList();
        renderSideBar();
    });

    const todayItem = document.createElement('li');
    todayItem.textContent = 'Today';
    todayItem.classList.add('sidebar-item');

    const upcomingItem = document.createElement('li');
    upcomingItem.textContent = 'Upcoming';
    upcomingItem.classList.add('sidebar-item');

    list.append(inboxItem, todayItem, upcomingItem);
    nav.appendChild(list);

    const projectsSection = document.createElement('div');
    projectsSection.classList.add('projects-section');

    const projectsTitle = document.createElement('h3');
    projectsTitle.textContent = 'Projects';
    projectsSection.appendChild(projectsTitle);

    const projectsList = document.createElement('ul');

    state.projects.forEach((project) => {
        const li = document.createElement('li');
        li.classList.add('sidebar-item');

        if (state.selectedProjectId === project.id) {
            li.classList.add('active');
        }

        const icon = document.createElement('span');
        icon.classList.add('project-icon');
        icon.textContent = '#';
        icon.style.color = project.color;

        const text = document.createElement('span');
        text.textContent = project.name;

        li.append(icon, text);

        li.addEventListener('click', () => {
            state.selectedProjectId = project.id;
            renderHeader();
            renderTaskList();
            renderSideBar();
        });

        projectsList.appendChild(li);
    });

    projectsSection.appendChild(projectsList);

    sideBar.append(addTask, nav, projectsSection);

    return sideBar;
}

export function renderSideBar() {
    const oldSideBar = document.getElementById('side-bar');
    const newSideBar = createSideBar();

    if (oldSideBar) {
        oldSideBar.replaceWith(newSideBar);
    }
}