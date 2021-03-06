import { Component } from '@angular/core';
import{ ProductListComponent} from './products/product-list.component';

@Component({
  selector: 'pm-root',
  template: `
  <div>
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
 <ul class='nav nav-pills'>
 <li><a class ='nav-link' [routerLink]="['/welcome']">Home</a></li>
 <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
</ul>
</nav ></div> 
<div class='container'>

<router-outlet></router-outlet>

</div>
`

 

})
export class AppComponent {
  pageTitle: string = 'Cart Products';

  
}
