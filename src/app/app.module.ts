/*Angular Core Module*/ 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

/*Custom Module*/ 
import {MaterialModule} from './MaterialModule/Material.module'
import {TodoModule} from './TodoModule/Todo.Module';

/*Components*/
import { AppComponent } from './app.component';

// /* Ngrx Store*/
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SnackBarEffects } from './Store/SnackBarReducer/Facade/SnackBar.Effects';
import { SnackBarComponent } from './Store/SnackBarReducer/Component/SnackBar.component';
import { SnackBarService } from './Store/SnackBarReducer/Service/SnackBar.Service';
import { SnackbarNotificationPipe } from './Store/SnackBarReducer/pipes/snackbar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SnackBarComponent,
    SnackbarNotificationPipe     
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    TodoModule,
    EffectsModule.forRoot([SnackBarEffects]),
    StoreModule.forRoot({}),   
  ],
  providers: [SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
