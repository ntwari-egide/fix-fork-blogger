import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import BlogDetailService from './blog-details.service';

@Component({
  selector: 'blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blogDetails;

  constructor(private router:Router, private _Activatedroute:ActivatedRoute, private _router:Router,private blogDetailService:BlogDetailService) { 
    // this.router.getCurrentNavigation().extras.state
  }

 currentBlogId;

 comment = ''

 commentEmpty = false

 commentAdded = false

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => { 

       this.currentBlogId = params.get('id')

       if(this.currentBlogId == null){
          alert('There is no id passed related to the blog')
          this.onBack()
       }

   });
  //  console.log("Data in id : "+this.currentBlogId);

   this.blogDetails = this.blogDetailService.getBlogDetails(this.currentBlogId)   
   this.blogDetailService.addViewOnBlogPost(this.currentBlogId);

    window.scrollTo(0,0)

  }

  openToComment = false;

  onBack(): void {
    this._router.navigate(['/']);
 }

  numberOfComments (blogComments) {

    return Object.keys(blogComments).length;

  }

  likeBlogAction(){

    return this.blogDetailService.addLikeOnBlogPost(this.currentBlogId)

  }

  forkBlogAction(){

    return this.blogDetailService.addForkOnBlogPost(this.currentBlogId);

  }

  upvoteBlogAction(commentId: Number){

    return this.blogDetailService.upvoteComment(this.currentBlogId,commentId);

  }


  startedCommenting(){

    this.openToComment = true
    
  }

  notCommenting(){

    this.openToComment = false

  }


  updateCommentBox(value){

    this.comment = value
    
  }

  
  checkIfStillShowingCommentMessage (){

    if(this.commentAdded){

      setTimeout(() => this.commentAdded = false , 6000)

    }

  }

  saveComment(){

    console.log("reached here");
    
    if(this.comment != ""){

        this.commentEmpty = false

        this.blogDetailService.addComment(this.comment,this.currentBlogId)

        this.comment = ""

        this.commentAdded = true

        this.checkIfStillShowingCommentMessage()

    }

    else{

      this.commentEmpty= true

      return

    }

  }

}
