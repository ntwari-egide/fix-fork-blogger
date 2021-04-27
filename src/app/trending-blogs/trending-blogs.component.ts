import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'trending-blogs',
  templateUrl: './trending-blogs.component.html',
  styleUrls: ['./trending-blogs.component.css']
})
export class TrendingBlogsComponent implements OnInit {
  listOfTrendingBlogs = [{
    coverPic : 'https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309__340.jpg'
  },2,3,4,5,6]
  
  constructor() { }

  ngOnInit(): void {
  }

}
