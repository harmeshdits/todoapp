// Angular
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


/*Models*/ 
import { Colors,Todos,TodoColors, TodoModel } from "../../Models/Todo.Model";

@Component({
	selector: 'app-todo-modal',
	templateUrl: './TodoModal.component.html'
})
export class TodoModalComponent implements OnInit {
	public note: string
    public colorsList: any = [];
    
	constructor(
		public dialogRef: MatDialogRef<TodoModalComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any        
      
	) {
        const c =  new Colors;
        this.colorsList = c['List']; 
        this.note = data.note;
     }
    
    ngOnInit(){  }

	deleteTodo(): void {
		this.dialogRef.close({data: {"id": this.data.id, "isDelete": true}});
	}

	/* Close dialog with true result */
	updateTodo(obj): void {	
		setTimeout(() => {
            let todo = {
                "note": this.note,
                "id": this.data.id,
                "color": obj.colorCode,
                "date": new Date()
            }
			this.dialogRef.close({ data:{"isDelete": false, "todo": todo }} ); 
		}, 1500);
	}
}
