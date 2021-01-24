import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  rendering = false;

  constructor() {}

  ngOnInit(): void {
    this.createLoading();
  }

  createLoading(): void {
    this.rendering = true;
    setTimeout(() => {
      this.rendering = false;
    }, 1250);
  }

}
