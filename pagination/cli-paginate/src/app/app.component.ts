import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tmp="Apple"
  drp1="Mango"
  cname="uname"
  ord=false
  title = 'cli-paginate';
  obj=[{uname:"scott",city:"Hyd"},
  {uname:"sam",city:"Sec"},
  {uname:"auresh",city:"Chennai"},
  {uname:"santosh",city:"Banglore"},
  {uname:"bubash",city:"Vizag"},
  {uname:"zailesh",city:"Hyd"},
  {uname:"caroj",city:"Abcd"},
  {uname:"ssssss",city:"Xyz"}]
  funclick(col)
  {
    this.cname=col
    this.ord=!this.ord
  }
}
