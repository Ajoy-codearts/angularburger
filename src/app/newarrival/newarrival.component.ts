import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newarrival',
  templateUrl: './newarrival.component.html',
  styleUrls: ['./newarrival.component.scss']
})
export class NewarrivalComponent implements OnInit {

  constructor() { }
  arriveditem=[
    {
      imgpath:"img6.png",
      text1:"TRY IT TODAY",
      text2:"MORE POPULAR BURGER"
    },
    {
      imgpath:"img7.png",
      text1:"TRY IT TODAY",
      text2:"MORE FUN MORE TASTE"
    },
    {
      imgpath:"img8.png",
      text1:"TRY IT TODAY",
      text2:"FRESH & CHILI"
    }
  ]
  ngOnInit(): void {
  }

}
