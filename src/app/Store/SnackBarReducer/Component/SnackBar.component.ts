import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackBarModel } from '../Models/SnackBar.model';

@Component({
    selector: 'app-snack-bar',
    templateUrl: './SnackBar.component.html',
    styleUrls: ['./SnackBar.component.scss']
})
export class SnackBarComponent {
    public notifaction: SnackBarModel;
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
        this.notifaction = data.payload;
    }
}