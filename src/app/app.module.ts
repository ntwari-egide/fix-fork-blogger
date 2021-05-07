import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TrendingBlogsComponent } from './trending-blogs/trending-blogs.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { SwiperModule } from 'swiper/angular';
import { OtherBlogsComponent } from './other-blogs/other-blogs.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { Routes, RouterModule } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component'; // CLI imports router
import {AppRoutingModule} from './app-routing.module';
import { NguCarouselModule } from '@ngu/carousel';
const routes : Routes = [
    {path: 'read-blog',component : BlogDetailsComponent},
    {path: '',component: AppComponent,pathMatch : 'full'}
    // { path: '**', component: AppComponent }
 ]

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    WelcomePageComponent,
    TrendingBlogsComponent,
    OtherBlogsComponent,
    FooterPageComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    SwiperModule,
    NguCarouselModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
