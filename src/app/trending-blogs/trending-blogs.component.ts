import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trending-blogs',
  templateUrl: './trending-blogs.component.html',
  styleUrls: ['./trending-blogs.component.css']
})
export class TrendingBlogsComponent implements OnInit {
  listOfTrendingBlogs = [1,2,3,4,5,6]
  
  constructor() { }

  ngOnInit(): void {
  }

}
