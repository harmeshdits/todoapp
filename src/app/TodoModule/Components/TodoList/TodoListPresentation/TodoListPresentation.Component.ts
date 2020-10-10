import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Todos } from '../../../Models/Todo.Model';
import {FilterTodosPipe} from '../../../Pipes/Todo.pipe'

//material module
import { MatDialog } from '@angular/material/dialog';
import { TodoModalComponent } from '../../../Modals/Todo/TodoModals.Component';
import { Store } from '@ngrx/store';
import * as todoAction from '../../../Store/Todo.actions';
import { Update } from '@ngrx/entity';


@Component({
    selector: 'app-todo-presentation',
    templateUrl: './TodoListPresentation.Component.html' ,
    providers: [FilterTodosPipe] 
})


export class TodoListPresentationComponent implements OnInit, OnChanges {
    
    @Input() public data : Array<Todos>;       
    public cards: any=[];
    @Input() selectedColor:string;

    constructor(
        public dialog: MatDialog, private store : Store ) {  
      }
    
    public ngOnInit(): void { }

    public ngOnChanges(changes){       
        this.cards = this.data;          
    }

    /*Open edit modal*/ 
    public editTodo(obj): void {
        const addDialogRef = this.dialog.open(TodoModalComponent, {
            width: '640px', disableClose: true, data: obj
        });
        addDialogRef.afterClosed().subscribe((res) => {
            debugger
            if (res.data.isDelete == true) {              
                debugger
                this.store.dispatch(todoAction.TodoDeleteRequest({ TodoId: res.data.id}));
            }else{
                const update: Update<Todos> = {
                    id: res.id,
                    changes: {
                        ...res.data.todo,
                    }
                };
                this.store.dispatch(todoAction.TodoUpdateRequest({update}))
                
            }
        });
    } 


}