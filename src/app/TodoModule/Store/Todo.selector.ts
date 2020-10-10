
/* ngrx core moduels */
import { TodoState, selectEntities, selectAll, todoReducer } from './Todo.reducers';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todos } from '../Models/Todo.Model';


/* select todo store */
export const courseFeatureSelector = createFeatureSelector<TodoState>('todo');

export const todos = createSelector(
  courseFeatureSelector,
  selectAll
)

// flag to check if todo data has recieved in store
export const TodoLoadRequest = createSelector(
  courseFeatureSelector,
  (state) => state.isLoaded
)

//flag to check if curd operation is completed
export const isLoading = createSelector(
  courseFeatureSelector,
  (state) => state.isLoading
)

//get
export const Entities = createSelector(
  courseFeatureSelector,
  (state) => state.entities
)

export const selectTodos = createSelector(
  Entities,
  (entities)=>entities
 )


