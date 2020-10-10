/* angular core modules */
import { Injectable } from '@angular/core';
import { merge, of } from 'rxjs';
import {  exhaustMap, catchError, switchMap, map, mergeMap, startWith, tap} from 'rxjs/operators';

/* Ngrx */
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as todoAction from './Todo.actions';
import { TodoService } from "../Services/Todo.Service";

import * as snackBarActions from '../../Store/SnackBarReducer/Facade/SnackBar.Actions';

/* models */
import { SnackBarModel, NotificationType } from '../../Store/SnackBarReducer/Models/SnackBar.model';

@Injectable()

export class TodoEffects {
   
    constructor(private actions$: Actions, private service: TodoService) { }

    /*Get Todo List*/ 
    // public loadTodo$ = createEffect(()=>
    //     this.actions$.pipe((
    //         ofType(todoAction.TodoLoadRequest),
    //         startWith(todoAction.TodoLoadRequest),
    //         exhaustMap(()=>this.service.GetTodo().pipe(
    //             switchMap((data)=>[
    //                 todoAction.TodosLoadedSuccess({Todos:data})
    //             ]),catchError((error:any)=> of(todoAction.TodosLoadedFailed(error)))
    //         )            
    //     ))),{dispatch:true} 
    // );

    /*Add New Todo*/   
    public postTood$ = createEffect(() =>
        this.actions$.pipe(
            ofType(todoAction.TodoPostRequest),
            switchMap((action)=> this.service.POSTTODO(action.Todo).pipe(
               mergeMap((response)=>[
                    todoAction.TodoPostSuccess({Todo:response})
               ])))));      

      /*Update Todo*/    
    public updateTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(todoAction.TodoUpdateRequest),
            map(action => action.update),
            switchMap((action) => this.service.UPDATETODO(action.id,action.changes).pipe(        
                mergeMap((payload) => [
                    todoAction.TodoUpdateSuccess({ payload: payload}),
                    snackBarActions.ShowNotification({ payload: new SnackBarModel("Todod update", NotificationType.Success) })
                ]), catchError((error: any) => of(todoAction.TodoUpdateFailed({ error: error })))
            ))
        ), { dispatch: true }
    );

    /*Todo Delete*/ 
    public deleteTodo$ = createEffect(() => this.actions$.pipe(
        ofType(todoAction.TodoDeleteRequest),
        map(action => action.TodoId),
        switchMap((action) => this.service.DeleteTodo(action).pipe(        
            mergeMap((payload) => [
                todoAction.TodoDeleteSuccess({ TodoId: payload }),
                snackBarActions.ShowNotification({ payload: new SnackBarModel("Todo deleted", NotificationType.Success) }),
            ]), catchError((error: any) => of(todoAction.TodoDeleteFailed(error)))
        ))), 
        { dispatch: true }
    );
           
        
}