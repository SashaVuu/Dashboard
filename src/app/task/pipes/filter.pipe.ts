import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/entities/task';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Task[],  searchString:string): Task[] {
    if(searchString === ""){
      return items;
    }
    return items.filter((item) => item.name.toUpperCase().includes(searchString.toString().toUpperCase()));
  }

}
