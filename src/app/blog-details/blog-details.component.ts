import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blogDetails;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { 
    this.router.getCurrentNavigation().extras.state
  }

  firstParagraph = "Most, if not all, careers involve some computer-based work and require strong typing skills. Information technology professionals, for example, must be efficient typists in order to write code for computer and software programs. Accuracy is equally as important as speed, as a simple typo could result in a system-wide error"

 secondParagraphy = "In today’s technology-driven world, students and young adults become familiar with computers at an early age. Some schools have stopped teaching typing altogether, assuming students already possess the skills necessary to be successful in the modern workplace, according to an article in MIT’s Technology Review."

  ngOnInit(): void {
    this.blogDetails=history.state;
  }

}
