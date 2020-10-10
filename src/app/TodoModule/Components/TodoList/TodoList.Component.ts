import { Component, OnInit } from '@angular/core';

/*Models*/ 
import { Colors,Todos,TodoColors, TodoModel } from "../../Models/Todo.Model";

/*Store*/ 
import { TodoPostRequest } from '../../Store/Todo.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Entities, selectTodos } from '../../Store/Todo.selector';

//import { SnackBarService } from 'src/app/Store/SnackBarReducer/Service/SnackBar.Service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-todo-list',
    templateUrl: './TodoList.component.html'  
})


export class TodoListComponent implements OnInit {

    public opened: boolean;  
    public colorsList: Array<TodoColors> = [];
    public storeList$:Observable<any>;
    public todoModel = new TodoModel;
    public selectedColor: string;
    public note:string;
    

    constructor(  
        private store: Store<Todos>, 
        private _snackBar : MatSnackBar) {        
          this.storeList$=  this.store.select(selectTodos);

    }

    ngOnInit(): void {   
        const c =  new Colors;
        this.colorsList = c['List'];  
    }

    /*Save Tddo*/ 
    saveTodo(obj){
        this.todoModel.index = this.todoModel.index+1;
        let input = { id: this.todoModel.index , note: this.note , date: new Date(), color:obj.colorCode };  
        this.store.dispatch(TodoPostRequest({Todo:input}));
        this.note = "";
        this.actionConfirmation("Saved successfully", this.undoChanges, input)
    }


    showErrorMsg(message: string, action: string){       
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }


    actionConfirmation(msg, func, data) {

        this.todoModel.undo = false;
        let snackBarRef = this._snackBar.open(msg, 'Undo', {
          duration: 2000
        });
      
        setTimeout( () => {
          if(!this.todoModel.undo){ 
            func(data);
          }
        }, 3000);
    
        snackBarRef.onAction().subscribe(() => {        
          this.todoModel.undo = true;   
          console.log("Undo action perform");      
        });
    }
    
    undoChanges(data){ 
        console.log(data);
    }

    filterColors(c){        
        this.selectedColor=c.colorCode;
    }
    
 
}