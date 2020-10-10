import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterTodos',
})
export class FilterTodosPipe implements PipeTransform {
    transform(list: [],value: any) {
      if(!value){
          return list;
      }
      return list.filter((d,i)=>d["value"]["color"]===value);
    }
}