import {createSideBar} from '../components/sidebar';
import {createHeader} from '../components/header';
import {createMain} from '../components/main';

export function loadApp() {
    const app = document.getElementById('app');

    const appContainer = document.createElement('div');
    appContainer.classList.add('app-container');

    const sideBar = createSideBar();

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const header = createHeader();
    const taskList = createTaskList();

    mainContent.append(header, taskList);
    appContainer.append(sideBar, mainContent);
    app.append(appContainer);
}

