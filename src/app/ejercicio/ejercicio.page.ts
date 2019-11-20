import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.page.html',
  styleUrls: ['./ejercicio.page.scss'],
})
export class EjercicioPage implements OnInit {
  items: string[] = ["una", "DOS", "tres", "cuatrro"];

  constructor() { }

  ngOnInit() {
  }
  doReorder(ev: any) {
    console.log('Before complete', this.items);
    let element = this.items[ev.detail.from];
    this.items.splice(ev.detail.from, 1);
    this.items.splice(ev.detail.to, 0, element);
    ev.detail.complete();
    console.log('After complete', this.items);
  }
}
