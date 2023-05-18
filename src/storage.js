import ToDoProjects from './todo_projects';

export default class ManageStorage {
    static storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&

                (e.code === 22 || 
                    
                    e.code === 1024 || 
                    
                    e.name === 'QuotaExceededError' || 
                    
                    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && 

                    storage &&
                    storage.length !== 0
            )
        };
    }

    static loadTodoList() {
        const todolist = new ToDoProjects();
        this.storage.setItem('todolist', JSON.stringify(todolist));
    }

    static getTodoList() {
        let todolist = JSON.parse(this.storage.getItem('todolist'));
        todolist = Object.assign(new ToDoProjects(), todolist);
        return todolist;
    }

    static defineLocalStorage() {
        this.storage = window['localStorage'];
    }

    static getProjectFromStorage(project) {
        return ManageStorage.getTodoList().getProjectByName(project);
    }

    static getAllProjects() {
        return ManageStorage.getTodoList().getAllProjects();
    }
}