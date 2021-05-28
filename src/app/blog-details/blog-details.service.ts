import { Injectable } from "@angular/core"
import * as BlogData from "./../../assets/blog-data/blog-data.json"


@Injectable({
    providedIn: 'root'
  })
export default class BlogDetailService {

    getBlogDetails(blogId: Number){

        return (BlogData as any).default.filter(blogContent => {

            if( blogContent.id == blogId )

                return blogContent

        })
    }

    addViewOnBlogPost(blogId: Number){
        return (BlogData as any).default.map(blogContent => {
            if(blogContent.id == blogId){
                blogContent.views = blogContent.views + 1;

                console.log("View is added : "+blogContent.views);
            }
        })
    }

    addLikeOnBlogPost(blogId: Number){
        return (BlogData as any).default.map(blogContent => {
            if(blogContent.id == blogId){
                blogContent.likes = blogContent.likes + 1;

                alert("your like is added")
            }
        })


    }

    addForkOnBlogPost(blogId: Number){
        return (BlogData as any).default.map(blogContent => {
            if(blogContent.id == blogId){
                blogContent.forks = blogContent.forks + 1;

                alert("you forked this github repository")
            }
        })
    }

    upvoteComment(blogId: Number,commentId: Number){

        return (BlogData as any).default.map(blogContent => {

            if(blogContent.id == blogId){
                
                blogContent.blogComments.map(comment => {
                    
                    if(comment.id == commentId){

                        comment.upvotes = comment.upvotes + 1;

                        alert("You have upvoted this comment ")

                    }

                })
            }
        })
    }

    makeid(length: Number) {
        var result = [];

        var characters = '1234567890';

        var charactersLength = characters.length;

        for ( var i = 0; i < length; i++ ) {
          result.push(characters.charAt(Math.floor(Math.random() * 
            charactersLength)));
        }

       return result.join('');
    }

    todaysCreatedAtTime(){
        var currentdate = new Date(); 

        var datetime = 
        currentdate.getFullYear() + '-' + currentdate.getMonth()+'-'+ currentdate.getDate() + ' ' + currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds();
    
        return datetime;
    
    }


    addComment(comment: any,blogId: Number){

        return (BlogData as any).default.map(blog => {

            if(blog.id == blogId){

                return blog.blogComments.unshift({
                    id: this.makeid(5),

                    fullName: "Anonymous Contributor",

                    commentedAt: this.todaysCreatedAtTime(),

                    commentContent: comment,

                    upvotes: 0

                })

            }

        })

    }
    
}