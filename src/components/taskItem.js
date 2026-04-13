export function createTaskItem(tasks) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tasks.completed;
    checkbox.classList.add('task-checkbox');
    taskItem.appendChild(checkbox);

    const title = document.createElement('span');
    title.textContent = tasks.title;
    taskItem.appendChild(title);

    return taskItem;
}