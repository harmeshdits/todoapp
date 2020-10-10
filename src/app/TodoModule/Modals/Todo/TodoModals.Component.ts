// Angular
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/*Models*/ 
import { Colors,Todos } from "../../Models/Todo.Model";
import {ModelResponse} from '../../Models/ModalResponse';
import { _MatTabGroupBase } from '@angular/material/tabs';

@Component({
	selector: 'app-todo-modal',
	templateUrl: './TodoModal.Component.html',
	styleUrls:['./ToDoModal.Component.scss']
})
export class TodoModalComponent {
	public todo: Todos
    public colors: any = [];
    
	constructor(
		public dialogRef: MatDialogRef<TodoModalComponent>, @Inject(MAT_DIALOG_DATA) public data: Todos) {
	    this.todo={...data};
    	this.colors =  new Colors().List;
	 }
	 
	public DeleteNote(): void {
		this.dialogRef.close(new ModelResponse(true,this.todo) );
	}

	public UpdateNote(obj): void {	
		this.todo.color=obj.colorCode;
		this.dialogRef.close(new ModelResponse(false,this.todo));
	}
}
