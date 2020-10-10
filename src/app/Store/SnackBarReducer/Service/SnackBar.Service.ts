import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarModel } from '../Models/SnackBar.model';
import { SnackBarComponent } from '../Component/SnackBar.component';
import { of } from 'rxjs';

@Injectable()
export class SnackBarService {
    constructor(private snackbar: MatSnackBar) { }

    public showSnackBar(payload:SnackBarModel) {
        this.snackbar.openFromComponent(SnackBarComponent, {
            data: {payload},
            duration: 3000
        })
        return of("success")
    }
    public hideSnackBar() {
        this.snackbar.dismiss();
    }
}