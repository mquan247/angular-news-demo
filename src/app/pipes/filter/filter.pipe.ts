import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchValue: any): any {
    if (!searchValue) return value;
    return value.filter((v: any) => {
      return (
        v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
        v.content.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
        v.author.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
        v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
        v.description.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
        v.source.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      );
    });
  }
}
