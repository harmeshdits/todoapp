import { Todos} from '../Models/Todo.Model';
import { createReducer, on } from '@ngrx/store';
/* Action */

import { todoActionTypes} from './Todo.actions';
/* Entity */ 

import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';


/* extend entity state with our custom properties */
export interface TodoState extends EntityState<Todos> {
    isLoaded?: boolean;
    error?: string;
    isLoading: boolean  
}



export const adapter: EntityAdapter<Todos> = createEntityAdapter<Todos>({
        selectId: entity => entity.id,        
        sortComparer: (l: Todos, r: Todos) => l.id.toString().localeCompare(r.id.toString())
});

export const initialState = adapter.getInitialState({ 
  isLoaded: false,
  isLoading: false,
  error: null
});

export const todoReducer = createReducer(
        initialState, 
        on(todoActionTypes.TodoLoadRequest, (state) => {
            return { ...state, isLoaded: false }
        }),

        on(todoActionTypes.TodosLoadedSuccess, (state, action) => {
            return adapter.addAll(action.Todos, { ...state, isLoaded: true, isLoading: false })
        }),

        on(todoActionTypes.TodosLoadedFailed, (state, action) => {
            return { ...state, isLoaded: false, isLoading: false, error: action.error }
        }),
            

        on(todoActionTypes.TodoPostSuccess, (state, action) => {
            return adapter.addOne(action.Todo, { ...state, isLoaded: true, isLoading: false })
        }),

        on(todoActionTypes.TodoPostFailed, (state, action) => {
            return { ...state, isLoaded: false, isLoading: false, error: action.error }
        }),

        on(todoActionTypes.TodoDeleteSuccess, (state, action) => {
            debugger
            return adapter.removeOne(action.TodoId, { ...state, isLoaded: true, isLoading: false })
        }),

        on(todoActionTypes.TodoDeleteFailed, (state, action) => {
            return { ...state, isLoaded: false, isLoading: false, error: action.error }
        }),

        on(todoActionTypes.TodoUpdateSuccess, (state, action) => {
            const update: Update<Todos> = {
                id: action.payload.id,
                changes: {
                    ...action.payload,
                }
            };
            return adapter.updateOne(update, { ...state, isLoaded: true, isLoading: false })
        }),

        on(todoActionTypes.TodoUpdateFailed, (state, action) => {
            return { ...state, isLoaded: false, isLoading: false, error: action.error?.message }
        })


);

export const {selectAll, selectEntities, selectIds } = adapter.getSelectors();