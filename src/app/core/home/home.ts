import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 siteName:string = "conference site"
 color="blue"
 img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5R5a-YKwLnPi6dvRLTrJtzdIP86nCWFyV8g5FsPgsWw&s=10"
clickMe(){
  alert("clicked")
}
inputItem:string = ""
}
