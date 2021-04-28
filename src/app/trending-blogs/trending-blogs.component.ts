import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'trending-blogs',
  templateUrl: './trending-blogs.component.html',
  styleUrls: ['./trending-blogs.component.css']
})
export class TrendingBlogsComponent implements OnInit {
  listOfTrendingBlogs = [{
      coverPic : 'https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309__340.jpg',
      title: 'Advanced and Applied AI on Microsoft Azure',
      description: 'Enhance your understanding of machine learning and AI using Microsoft Azure and Python.',
      content: '',
      likes: 11,
      forks: 9,
      comments: 3
  },{
    coverPic : 'https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309__340.jpg',
    title: 'Advanced and Applied AI on Microsoft Azure',
    description: 'Enhance your understanding of machine learning and AI using Microsoft Azure and Python.',
    content: '',
    likes: 11,
    forks: 9,
    comments: 3  
  },
  {
    coverPic : 'https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309__340.jpg',
    title: 'Advanced and Applied AI on Microsoft Azure',
    description: 'Enhance your understanding of machine learning and AI using Microsoft Azure and Python.',
    content: '',
    likes: 11,
    forks: 9,
    comments: 3 
  },
  {
    coverPic : 'https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309__340.jpg',
    title: 'Advanced and Applied AI on Microsoft Azure',
    description: 'Enhance your understanding of machine learning and AI using Microsoft Azure and Python.',
    content: '',
    likes: 11,
    forks: 9,
    comments: 3
  },
  {
    coverPic : 'https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309__340.jpg',
    title: 'Advanced and Applied AI on Microsoft Azure',
    description: 'Enhance your understanding of machine learning and AI using Microsoft Azure and Python.',
    content: '',
    likes: 11,
    forks: 9,
    comments: 3
  },{
    coverPic : 'https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309__340.jpg',
    title: 'Advanced and Applied AI on Microsoft Azure',
    description: 'Enhance your understanding of machine learning and AI using Microsoft Azure and Python.',
    content: '',
    likes: 11,
    forks: 9,
    comments: 3
  }]
  
  constructor() { }

  ngOnInit(): void {
  }

}
