import searchIcon from './images/magnify.svg';
import inboxIcon from './images/inbox.svg';
import todayIcon from './images/tray-alert.svg';
import upcomingIcon from './images/calendar-arrow-right.svg';
import trashIcon from './images/trash-can.svg';
import plusIcon from './images/plus.svg';
import ManageStorage from './storage';

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

    static createNavElement(image = null, text, classTag) {
        const button = document.createElement('button');
        const p = document.createElement('p');

        if (!image === null) {
            const img = new Image();
            img.src = image;
            button.appendChild(img);
        }

        p.textContent = text;
        button.classList.add('nav-item', classTag);
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

        ManageStorage.getAllProjectsFromStorage().forEach((project) => {
            navDiv.appendChild(ManageUI.createNavElement(null, project.name, `${project.name.toLowerCase()}`));
        });
        
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