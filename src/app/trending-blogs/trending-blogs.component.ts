import { Component, OnInit, ViewChild } from '@angular/core';
import {TrendingBlogService } from './trending-blogs.service'

import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper/core";
SwiperCore.use([Keyboard, Pagination, Navigation]);


@Component({
  selector: 'trending-blogs',
  templateUrl: './trending-blogs.component.html',
  styleUrls: ['./trending-blogs.component.css']
})
export class TrendingBlogsComponent implements OnInit {
  listOfTrendingBlogs = []

  @ViewChild('customSwiper') customSwiper: any;

  swiperConfig: any = {
      slidesPerView: '3',
      navigation:true,
      spaceBetween: 20,
      // breakpoints: {
      //     992: {
      //         spaceBetween: 20
      //     }
      // }
  }


  constructor(private service: TrendingBlogService) { 
      this.listOfTrendingBlogs = service.getAllBlogs()
  }

  getNumberOfComments (blogComment){      
      return this.service.numberOfComments(blogComment);
  }


  ngOnInit(): void {}
}
