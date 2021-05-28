import { Injectable } from '@angular/core';
import * as  BlogsData from '../../assets/blog-data/blog-data.json';

@Injectable({
    providedIn: 'root',
  })
  export class TrendingBlogService{
    getAllBlogs(){
        return (BlogsData as any).default;
    }

    numberOfComments (blogComments) {
        return Object.keys(blogComments).length;
    }
}