import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

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
    description: 'From learning to code and exploring programming to understanding cyber security, take online IT and coding courses to explore tech trends like data science and digital marketing.',
    content: '',
    likes: 211,
    forks: 1,
    comments: 12 
  },
  {
    coverPic : 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'AI Design and Engineering with Microsoft Azure',
    description: 'Develop AI Engineering skills using Microsoft Azure, on the path to role-based certifications.',
    content: '',
    likes: 32,
    forks: 0,
    comments: 13
  }]
  
  imgags = [
    'https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678__340.jpg',
    'https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678__340.jpg',
    'https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678__340.jpg',
    'https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678__340.jpg'
  ];
  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 3, xl:3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  constructor() {}

  ngOnInit() {
    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });
  }

  public carouselTileLoad(j) {
    // console.log(this.carouselTiles[j]);
    const len = this.carouselTiles[j].length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTiles[j].push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }
}

}
