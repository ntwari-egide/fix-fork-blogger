import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { IndexComponent } from './components/index/index.component'
// import { AuthComponent } from './components/auth/auth.component'
// import { SuperAdminComponent } from './components/superAdmin/super-admin/super-admin.component'
// import { UserDaashboardComponent } from './components/user-daashboard/user-daashboard.component'
// import { SellerDarshboardComponent } from './components/seller-darshboard/seller-darshboard.component'
// import { ExproleProductComponent } from './components/exprole-product/exprole-product.component'
// import { ListProductsComponent } from './components/list-products/list-products.component'
// import { CustomerAccountComponent } from './components/customer-account/customer-account.component'
// import { VendorApplicationComponent} from './components/vendor-application/vendor-application.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index'},
  { path: 'read-blog', component : BlogDetailsComponent},
  {path: 'index',component:WelcomePageComponent},
//   {path: 'myaccount/superadmin/index', component:IndexComponent},
//   {path: 'myaccount/superadmin', component: SuperAdminComponent},
//   {path: 'myaccount/userdashboard',component: UserDaashboardComponent},
//   {path: 'myaccount/sellerdashboard', component: SellerDarshboardComponent},
//   {path: 'exprole-product/:productId',component: ExproleProductComponent},
//   {path: 'products/:category',component: ListProductsComponent},
//   {path: ':accountType/:userName/:subPage',component: CustomerAccountComponent},
//   {path: 'vendor-application',component: VendorApplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }