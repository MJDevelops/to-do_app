export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    set name(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    addToDo(todo) {
        if(this.todos.find((toDo) => toDo.title === todo.title)) return;
        this.todos.push(todo);
    }
}