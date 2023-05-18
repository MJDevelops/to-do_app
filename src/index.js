import './style.scss';
import ManageUI from './ui';
import ManageStorage from './storage';


ManageStorage.defineLocalStorage();
ManageStorage.loadTodoList();
ManageUI.loadWebsite();