import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { TodoComponent } from "../TodoModule/Components/Todo.Component";
import { TodoListComponent } from "../TodoModule/Components/TodoList/TodoList.Component";
// import { TodoListPresentationComponent } from "../TodoModule/Components/TodoList/TodoListPresentation/TodoListPresentation.component";

const routes: Routes = [{
        path: '',  component: TodoComponent,
        children: [   
            {  path: 'list',  component: TodoListComponent},
            {  path: '',  component: TodoListComponent}
        ]
    }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
