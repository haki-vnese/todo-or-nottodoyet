export function createTaskList() {
    const taskList = document.createElement('section');
    taskList.classList.add('task-list');

    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'No tasks yet. Add a task to get started!';
    taskList.appendChild(emptyMessage);

    return taskList;
}