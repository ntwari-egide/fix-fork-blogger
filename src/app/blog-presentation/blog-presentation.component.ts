import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-presentation',
  templateUrl: './blog-presentation.component.html',
  styleUrls: ['./blog-presentation.component.css']
})
export class BlogPresentationComponent implements OnInit {

  currentBlogId;

  consoleCode1 = 'git clone https://github.com/LuisJoseSanchez/chirimoya';
  
  consoleCode2 = `
cd chirimoya
npm install
  `;

  consoleCode3 = `ng serve`;

  presentationCode = `  <presentation>
    <slide>
      <h1>My presentation</h1>
      <p>Ese pedazo de ese hombree fistro.</p>
    </slide>

    <slide>
      <p>Lorem ipsum</p>
    </slide>
  </presentation>`;

  htmlCode = `
  <h1>Hello</h1>
  <p>fistrum pecador</p>
  `;
  
  highlight1 = `
  <slide>
    <source-code [code]="javaCode" [language]="'java'">
    </source-code>
  </slide>
  `;


  highlight2 = `
  javaCode = \`
  public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello world!");
    }
  }\`;`;

  javaCode = `
  public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello world!");
    }
  }
  `;

  usdEurConverter = `
  <slide>
    <h1>USD - EUR Converter</h1>
    <usd-eur-converter></usd-eur-converter>
  </slide>
  `;

  htmlCodeZoomPresentation = `
  <presentation [transition]="zoom">
    

  </presentation>
  `;

  htmlCodeZoomSlide = `
  <slide [transition]="zoom">
    

  </slide>
  `;

  htmlCodeScroll = `
  <slide [transition]="scroll">
    

  </slide>
  `;

  buildCode = `
  ng build --prod --base-href ./
  `;

  constructor(private router:Router, private _Activatedroute:ActivatedRoute, private _router:Router) { }

  ngOnInit(): void {

    this._Activatedroute.paramMap.subscribe(params => { 

       this.currentBlogId = params.get('id')

      alert("The id of the blog is : "+this.currentBlogId)

       if(this.currentBlogId == null){
          alert('There is no id passed related to the blog')
          this.onBack()
       }

   });

  }


  onBack(): void {
    this._router.navigate(['/']);
 }

}
