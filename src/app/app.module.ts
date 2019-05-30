import { BrowserModule } from '@angular/platform-browser';
import { routingArr } from './app.routing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { ArrDemoComponent } from './arr-demo/arr-demo.component';
import { TodoexComponent } from './todoex/todoex.component';
import { EmployeeComponent } from './employee/employee.component';
import { FilterPipe } from './filter.pipe';
import { HighliterDirective } from './highliter.directive';
import { DirectivexComponent } from './directivex/directivex.component';
import { CreditcardvalidDirective } from './creditcardvalid.directive';
import { StudentTestComponent } from './student-test/student-test.component';
import { StudfilterPipe } from './studfilter.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
import { MenuComponent } from './menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddproductComponent } from './product-list/addproduct/addproduct.component';
import { CartSidebarComponent } from './product-list/cart-sidebar/cart-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo1Component,
    ArrDemoComponent,
    TodoexComponent,
    EmployeeComponent,
    FilterPipe,
    HighliterDirective,
    DirectivexComponent,
    CreditcardvalidDirective,
    StudentTestComponent,
    StudfilterPipe,
    SidebarComponent,
    ProductComponent,
    MenuComponent,
    ProductListComponent,
    AddproductComponent,
    CartSidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    routingArr
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
