/* Core Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../MaterialModule/Material.module';

/*Routeing*/ 
import { TodoRoutingModule } from "./Todo.Module.Routing";

/*Components*/
import { TodoComponent } from "../TodoModule/Components/Todo.Component";
import { TodoListComponent } from "../TodoModule/Components/TodoList/TodoList.Component";
import { TodoListPresentationComponent } from "../TodoModule/Components/TodoList/TodoListPresentation/TodoListPresentation.Component";
import { FormsModule } from '@angular/forms';
import { TodoModalComponent } from './Modals/Todo/TodoModals.Component'

/* Ngrx Store*/
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './Store/Todo.reducers';
import { TodoEffects } from './Store/Todo.effects';

import { FilterTodosPipe } from "../TodoModule/Pipes/Todo.pipe";

/*Snackbar*/ 
// import { SnackBarEffects } from './Store/SnackBarReducer/Facade/SnackBar.Effects'
/*Service*/ 
import {TodoService} from './Services/Todo.Service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        TodoComponent,
        TodoListComponent,
        TodoListPresentationComponent,
        TodoModalComponent,
        FilterTodosPipe            
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
        RouterModule, 
        TodoRoutingModule,       
        EffectsModule.forFeature([TodoEffects]),    
        StoreModule.forFeature("todo",todoReducer)       
    ],
    providers:[TodoService],   
})

export class TodoModule {
    [x: string]: any;
}