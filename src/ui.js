import searchIcon from './images/magnify.svg';
import inboxIcon from './images/inbox.svg';
import todayIcon from './images/tray-alert.svg';
import upcomingIcon from './images/calendar-arrow-right.svg';
import trashIcon from './images/trash-can.svg';
import plusIcon from './images/plus.svg';


export default class ManageUI {
    static loadWebsite() {
        ManageUI.constructHeader();
        ManageUI.constructNavDiv();
        ManageUI.constructContentDiv();
        ManageUI.constructInbox();
    }

    static constructHeader() {
        const body = document.body;
        const header = document.createElement('header');
        const p = document.createElement('p');

        p.textContent = 'To Do App';
        header.appendChild(p);
        body.appendChild(header);
    }

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

    static constructContentDiv() {
        const contentDiv = document.createElement('div');
        const body = document.body;
        contentDiv.id = 'contentDiv';
        body.appendChild(contentDiv);
    }

    static constructNavDiv() {
        const navDiv = document.createElement('div');
        const bodyElement = document.body;
        navDiv.id = 'navDiv';
        navDiv.appendChild(ManageUI.createNavElement(searchIcon, 'Search', 'search'));
        navDiv.appendChild(ManageUI.createNavElement(inboxIcon, 'Inbox', 'inbox'));
        navDiv.appendChild(ManageUI.createNavElement(todayIcon, 'Today', 'today'));
        navDiv.appendChild(ManageUI.createNavElement(upcomingIcon, 'Upcoming', 'upcoming'));
        navDiv.appendChild(ManageUI.createNavElement(trashIcon, 'Trash', 'trash'));
        bodyElement.appendChild(navDiv);
    }

    static newTaskButton() {
        const taskButton = document.createElement('button');
        const img = new Image();
        const p = document.createElement('p');

        taskButton.classList.add('task-btn');        
        img.src = plusIcon;
        p.textContent = 'New Task';
        
        taskButton.appendChild(img);
        taskButton.appendChild(p);

        return taskButton;
    }

    static constructInbox() {
        const inboxDiv = document.createElement('div');
        const heading = document.createElement('h3');
        const contentDiv = document.getElementById('contentDiv');

        inboxDiv.classList.add('inbox');
        heading.textContent = 'Inbox';
        inboxDiv.appendChild(heading);
        inboxDiv.appendChild(ManageUI.newTaskButton());
        contentDiv.appendChild(inboxDiv);
    }
}