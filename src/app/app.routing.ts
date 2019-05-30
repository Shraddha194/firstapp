import { Routes, RouterModule } from '@angular/router';

import { StudentTestComponent } from './student-test/student-test.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { DirectivexComponent } from './directivex/directivex.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { TodoexComponent } from './todoex/todoex.component';
import { ArrDemoComponent } from './arr-demo/arr-demo.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddproductComponent } from './product-list/addproduct/addproduct.component';
import { CartSidebarComponent } from './product-list/cart-sidebar/cart-sidebar.component';

const arr: Routes = [

    { path: '', component: StudentTestComponent },
    { path: 'demo', component: DemoComponent },
    { path: 'demo1', component: Demo1Component },
    { path: 'arrex', component: ArrDemoComponent },
    { path: 'directiveex', component: DirectivexComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'todo', component: TodoexComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'add-pro', component: AddproductComponent },
    { path: 'cart', component: CartSidebarComponent }

];
export const routingArr = RouterModule.forRoot(arr);