import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  skills:String[];
  constructor() { 
   
  }

  ngOnInit() {
    this.skills=["Html5","CSS3","BootStrap4","Javascript","Angular7","Angular8","Type Script","Php","Slim Framework","Rest Api","MySql","Filemaker","Git"]
  }

}
