import ToDo from "./todo";

export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    getName() {
        return this.name;
    }

    addToDo(title, description, dueDate) {
        if(this.todos.find((toDo) => toDo.title === title)) return;
        this.todos.push(new ToDo(title, description, dueDate));
    }

    getTodos() {
        return this.todos;
    }
}