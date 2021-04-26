import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'other-blogs',
  templateUrl: './other-blogs.component.html',
  styleUrls: ['./other-blogs.component.css']
})
export class OtherBlogsComponent implements OnInit {

  otherBlogsList = [1,2,3,4,5,6,7,8,9]

  constructor() { }

  ngOnInit(): void {
  }

}
