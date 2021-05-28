import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPresentationComponent } from './blog-presentation/blog-presentation.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'index'},
  { path: 'read-blog/:id', component : BlogDetailsComponent},
  {path: 'index',component:WelcomePageComponent},
  {path: 'blog-presentation/:id',component:BlogPresentationComponent},
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