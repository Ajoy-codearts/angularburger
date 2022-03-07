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
      path:"img9.png",
      text1:"Lorem ipsum dolor",
      text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat numquam laborum eos nemo"
    },
    {
      path:"img10.png",
      text1:"Lorem ipsum dolor",
      text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat numquam laborum eos nemo"
    },
    {
      path:"img11.png",
      text1:"Lorem ipsum dolor",
      text2:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat numquam laborum eos nemo"
    }
  ]
}
