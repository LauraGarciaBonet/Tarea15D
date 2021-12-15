import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'newPipe'
})
export class NamePipe implements PipeTransform {
  transform(value: string): string {

    return 'new Pipe'
  }
}
