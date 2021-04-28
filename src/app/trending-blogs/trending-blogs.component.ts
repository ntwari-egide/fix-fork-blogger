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
    coverPic : 'https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678__340.jpg',
    title: 'Get practical, hands on experience in cybersecurity',
    description: 'Build essential cyber security skills and learn about security threats and how to manage them.',
    content: '',
    likes: 230,
    forks: 1,
    comments: 13  
  },
  {
    coverPic : 'https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501__340.jpg',
    title: 'IT & Computer Science Courses',
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
