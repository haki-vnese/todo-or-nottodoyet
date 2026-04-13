export function createSideBar() {
    const sideBar = document.createElement('div');
    sideBar.classList.add('side-bar');

    const nav = document.createElement('nav');

    const list = document.createElement('ul');

    const items = ['Inbox', 'Today', 'Upcoming', 'Projects'];
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    nav.appendChild(list);
    sideBar.appendChild(nav);

    return sideBar;
}