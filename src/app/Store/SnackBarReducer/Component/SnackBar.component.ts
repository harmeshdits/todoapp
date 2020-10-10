import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackBarModel } from '../Models/SnackBar.model';

import { Store } from '@ngrx/store';
import { Todos } from 'src/app/TodoModule/Models/Todo.Model';

@Component({
    selector: 'app-snack-bar',
    templateUrl: './SnackBar.component.html',
    styleUrls: ['./SnackBar.component.scss']
})
export class SnackBarComponent {
    public notifaction: SnackBarModel;
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, private store : Store) {
        this.notifaction = data.payload;
        console.log(data.payload)
    }
  
    undoChanges(){
       
    }
}