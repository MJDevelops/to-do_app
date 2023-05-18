import Project from "./project";
import ToDo from "./todo";

export default class ToDoProjects {
    constructor() {
        this.projects = [];
        this.projects.push(new Project('Inbox'));
        this.projects.push(new Project('Today'));
        this.projects.push(new Project('Upcoming'));
    }

    getProjectByName(name) {
        return this.projects.find(project => project.name === name);
    }

    createNewProject(name) {
        this.projects.push(new Project(name));
    }
}