import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(list: [], value: Array<string>) {
    if (!value) return list;
    if (list.length > 0) {
        debugger;
      return list.filter((d, i) => d['value']['color'] === value);
    } 
  }
}
