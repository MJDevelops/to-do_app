export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    getName() {
        return this.name;
    }

    addToDo(todo) {
        if(this.todos.find((toDo) => toDo.title === todo.title)) return;
        this.todos.push(todo);
    }
}