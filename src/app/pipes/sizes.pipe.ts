import { Pipe, PipeTransform } from "@angular/core";
import { Size } from "src/assets/models/tshirt";

@Pipe({name : 'availableSizes'})
export class SizesPipe implements PipeTransform {
    transform(array: Size[]) : string {
        let s : string = '';
        let availableSizes = array.filter( size => size.available );
        availableSizes.forEach(size => {
            s += size.size + ' ';
        });
        return s;

    }
}