import { Component } from "@angular/core";

@Component({
    selector : 'app-products',
    templateUrl : './products.component.html'
})
export class ProductsComponent {
    productNames : string[] = [ /* 'Scribble Pad', 'Marker', 'Stapler' */ ];
}