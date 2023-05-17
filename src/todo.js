export default class ToDo {
    constructor(title, description, dueDate, priority, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
    }

    set title(newTitle) {
        this.title = newTitle;
    }

    set description(newDescription) {
        this.description = newDescription;
    }

    set dueDate(newDate) {
        this.dueDate = newDate;
    }

    set priority(newPriority) {
        this.priority = newPriority;
    }
}