import { act } from '@ngrx/effects';
import {Todos} from './Todo.Model';
export class TimeMachine{
    id:number;
    PastVal:Todos;
    CurrentVal:Todos;
    action:string;
    constructor(id,past,current,action){
        this.id=id;
        this.PastVal=past;
        this.CurrentVal=current;
        this.action=action;
    }
}