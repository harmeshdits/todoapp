/* ngrx core modules */
import { createAction, props, union } from '@ngrx/store';

/* ngrx entity */
import { Update } from '@ngrx/entity';

/* models */
import { Todos } from '../Models/Todo.Model';

export const TodoLoadRequest = createAction("[Todo List] Todo GET Service Request");
export const TodosLoadedSuccess = createAction("[Todo List Component] loaded success", props<{ Todos: Todos[] }>());
export const TodosLoadedFailed = createAction("[Todo List Component] loaded Failed", props<{ error: any }>());


export const TodoPostRequest = createAction("[Todo Effect] Todo POST Api Request", props<{ Todo: Todos }>());
export const TodoPostSuccess = createAction("[Todo List Component] Todo Post Success", props<{ Todo: Todos }>());
export const TodoPostFailed = createAction("[Todo List Component] Todo Post Failed", props<{ error: any }>());


export const TodoDeleteRequest = createAction("[Todo List Components] Todo Delete Api Request", props<{ TodoId: number }>());
export const TodoDeleteSuccess = createAction("[Todo List Components] Delete Todo Success", props<{ TodoId: number }>());
export const TodoDeleteFailed = createAction("[Todo List Components] Delete Todo Failed", props<{ error: any }>());

export const TodoUpdateRequest = createAction("[Todo List Component] Todo Update Api Request", props<{ update: Update<Todos> }>());
export const TodoUpdateSuccess = createAction("[Todo List Component] Update Todo Success", props<{ payload: Todos }>());
export const TodoUpdateFailed = createAction("[Todo List Component] Update Todo Failed", props<{ error: any }>());

export const ShowLoader = createAction('[Utility] Show Loader');

export const todoActionTypes = union({
    TodoLoadRequest, TodosLoadedSuccess, TodosLoadedFailed,
    TodoPostRequest, TodoPostSuccess, TodoPostFailed,
    TodoDeleteRequest, TodoDeleteSuccess, TodoDeleteFailed,
    TodoUpdateRequest, TodoUpdateSuccess, TodoUpdateFailed
})
export type Actions = typeof todoActionTypes;