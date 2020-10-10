import { Todos} from '../Models/Todo.Model';
import { createReducer, on } from '@ngrx/store';
/* Action */

import { todoActionTypes,Actions,TodoPostRequest,TodoDeleteRequest} from './Todo.actions';
/* Entity */ 

import { EntityState, EntityAdapter, createEntityAdapter, Update } from '@ngrx/entity';
import {produce, PatchListener} from 'immer'
import {undoRedo} from 'ngrx-wieder'
import { act } from '@ngrx/effects';

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

<<<<<<< HEAD
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
=======
const reducer = (state, action: Actions, listener?: PatchListener) =>
  produce(state, next => {
    switch (action.type) {
      case TodoPostRequest.type:
       next.todos.push({id: action.Todo.id, color:action.Todo.color, note:action.Todo.note, date: action.Todo.date})
        return
      case TodoDeleteRequest.type:
      next.todos.splice(next.todos.findIndex(t => t.id === action.TodoId), 1)
        return
      default:
        return
    }
}, listener);

const undoableReducer = undoRedo({
  track: true,
  mergeActionTypes: [
    TodoDeleteRequest.type
  ]
})(reducer)

export function appReducer(state = initialState, action: Actions) {
  return undoableReducer(state, action)
}
>>>>>>> 2137abf28e1f27b61d0ffbadb17079cff3a561b9
