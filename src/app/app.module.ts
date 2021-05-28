import { PrismComponent } from './../prism.component';
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
import { HighlightJsModule } from 'ngx-highlight-js';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import { PresentationComponent } from './presentation/presentation/presentation.component';
import { SlideComponent } from './presentation/slide/slide.component';
import { SourceCodeComponent } from './presentation/source-code/source-code.component';
import { UsdEurConverterComponent } from './presentation/usd-eur-converter/usd-eur-converter.component';
import { RandomNumberGeneratorComponent } from './presentation/random-number-generator/random-number-generator.component';
import { FormsModule } from '@angular/forms';
import { BlogPresentationComponent } from './blog-presentation/blog-presentation.component';


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
    BlogDetailsComponent,
    PrismComponent,
    PresentationComponent,
    SlideComponent,
    SourceCodeComponent,
    UsdEurConverterComponent,
    RandomNumberGeneratorComponent,
    BlogPresentationComponent
  ],
  imports: [
    FormsModule,
    HighlightJsModule,
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
