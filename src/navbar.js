import searchIcon from './images/magnify.svg';
import inboxIcon from './images/inbox.svg';
import todayIcon from './images/tray-alert.svg';
import upcomingIcon from './images/calendar-arrow-right.svg';
import trashIcon from './images/trash-can.svg';

function createNavElement(image, text, classTag) {
    const div = document.createElement('div');
    const img = new Image();
    const p = document.createElement('p');
    img.src = image;
    p.textContent = text;
    div.classList.add('nav-item', classTag);
    div.appendChild(img);
    div.appendChild(p);
    return div;
}

export default function constructNavDiv() {
    const navDiv = document.createElement('div');
    navDiv.id = 'navDiv';
    navDiv.appendChild(createNavElement(searchIcon, 'Search', 'search'));
    navDiv.appendChild(createNavElement(inboxIcon, 'Inbox', 'inbox'));
    navDiv.appendChild(createNavElement(todayIcon, 'Today', 'today'));
    navDiv.appendChild(createNavElement(upcomingIcon, 'Upcoming', 'upcoming'));
    navDiv.appendChild(createNavElement(trashIcon, 'Trash', 'trash'));
    return navDiv;
}