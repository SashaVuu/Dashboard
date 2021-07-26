import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/entities/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: User[],  searchString:string): User[] {
    if(searchString === ""){
      return items;
    }
    return items.filter((item) => {
      const itemString: string = item.name + " " + item.surname;
      return itemString.toUpperCase().includes(searchString.toString().toUpperCase());
    });
  }

}
