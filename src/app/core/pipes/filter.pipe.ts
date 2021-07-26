import { Pipe, PipeTransform } from '@angular/core';
import { FilterContext } from './strategy';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items:any[],serachString:string,context:FilterContext): any[] {
    return context.executeStrategy(items,serachString);
  }

}
