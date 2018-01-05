import { PipeTransform, Pipe } from "@angular/core";
import { Product } from "./product";
@Pipe({
name:'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
transform(value:Product[],filterBy:string):Product[]{
filterBy=filterBy?filterBy.toLocaleLowerCase():null;
return filterBy?value.filter(
(product:Product)=>product.name
.toLocaleLowerCase()
.indexOf(filterBy)!==-1):value;
}
}

