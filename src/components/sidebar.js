import { createAddTask } from "./addTask.js";
import { state } from "../modules/state.js";

export function createSideBar() {
    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar');

    // ---- ADD TASK BUTTON ----
    const addTask = createAddTask();

    // ---- NAVIGATION ----
    const nav = document.createElement('nav');

    const list = document.createElement('ul');

    const items = ['Inbox', 'Today', 'Upcoming'];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
    nav.appendChild(list);

    // ---- PROJECT SECTION ---- 
    // Add "Projects" title and list container
    const projectsSection = document.createElement('div');
    projectsSection.classList.add('projects-section');

    const projectsTitle = document.createElement('h3');
    projectsTitle.textContent = 'Projects';
    projectsSection.appendChild(projectsTitle);

    const projectsList = document.createElement('ul');
    state.projects.forEach(project => {
        const li = document.createElement('li');

        // Add icon with random color for each project
        const icon = document.createElement('span');
        icon.classList.add('project-icon');
        icon.textContent = '#';

        const randomColor = project.color;
        icon.style.color = randomColor;

        const text = document.createElement('span');
        text.textContent = project.name;

        li.append(icon, text);
        projectsList.appendChild(li);
    });
    projectsSection.appendChild(projectsList);

    sideBar.appendChild(addTask);
    sideBar.appendChild(nav);
    sideBar.appendChild(projectsSection);

    return sideBar;
}