import {Todos} from '../Models/Todo.Model';
export class ModelResponse{
    _status:boolean;
    _todo:Todos;

    constructor(status:boolean,currentToDo:Todos){
        this._status=status;
        this._todo=currentToDo;
    }
}