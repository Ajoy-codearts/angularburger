import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  chooselist=[
    {
      path:"image9.png",
      text1:"Lorem ipsum dolor",
      text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat numquam laborum eos nemo",
      text3:"ORDER NOW"
    },
    {
      path:"image10.png",
      text1:"Lorem ipsum dolor",
      text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat numquam laborum eos nemo",
      text3:"ORDER NOW"
    },
    {
      path:"image11.png",
      text1:"Lorem ipsum dolor",
      text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat numquam laborum eos nemo",
      text3:"ORDER NOW"
    }
  ]
}
