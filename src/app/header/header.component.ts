import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  flag:boolean=false;
  menuFlag:boolean=false;

  expand(){
    this.menuFlag=!this.menuFlag;
  }


 @HostListener("document:scroll")
 scrollfunction(){
   if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    this.flag=true;
   }
   else{
     this.flag=false;
   }
 }
}
