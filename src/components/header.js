export function createHeader() {
    const header = document.createElement('header');
    header.classList.add('page-header');

    const title = document.createElement('h1');
    title.textContent = 'Inbox';
    
    header.appendChild(title);

    return header;
}