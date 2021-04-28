import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'other-blogs',
  templateUrl: './other-blogs.component.html',
  styleUrls: ['./other-blogs.component.css']
})
export class OtherBlogsComponent implements OnInit {

  listOfAllBlogs = [{
    coverPic : 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg',
    title: 'Collaborative Coding with Git',
    description: 'Find out how to improve code quality and work collaboratively on large-scale projects using Git.',
    content: '',
    likes: 5,
    forks: 0,
    comments: 2
},
{
  coverPic : 'https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'Digital Skills: Embracing Digital Technology',
  description: 'Improve your digital skills for study and learn how to navigate the web effectively and safely.',
  content: '',
  likes: 422,
  forks: 1,
  comments: 3
},
{
  coverPic : 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  title: 'Start a CoderDojo Club',
  description: 'Get support and advice on how to grow your confidence in coding and start a CoderDojo for young people in your area.',
  content: '',
  likes: 42,
  forks: 1,
  comments: 23
},
{
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

  constructor() { }

  ngOnInit(): void {
  }

}
