import searchIcon from './images/magnify.svg';
import inboxIcon from './images/inbox.svg';
import todayIcon from './images/tray-alert.svg';
import upcomingIcon from './images/calendar-arrow-right.svg';
import trashIcon from './images/trash-can.svg';


export default class ManageUI {
    static createNavElement(image, text, classTag) {
        const button = document.createElement('button');
        const img = new Image();
        const p = document.createElement('p');
        img.src = image;
        p.textContent = text;
        button.classList.add('nav-item', classTag);
        button.appendChild(img);
        button.appendChild(p);
        return button;
    }

    static constructNavDiv() {
        const navDiv = document.createElement('div');
        navDiv.id = 'navDiv';
        navDiv.appendChild(ManageUI.createNavElement(searchIcon, 'Search', 'search'));
        navDiv.appendChild(ManageUI.createNavElement(inboxIcon, 'Inbox', 'inbox'));
        navDiv.appendChild(ManageUI.createNavElement(todayIcon, 'Today', 'today'));
        navDiv.appendChild(ManageUI.createNavElement(upcomingIcon, 'Upcoming', 'upcoming'));
        navDiv.appendChild(ManageUI.createNavElement(trashIcon, 'Trash', 'trash'));
        return navDiv;
    }
}