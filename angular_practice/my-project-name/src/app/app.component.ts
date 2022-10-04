import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-Anime-Site';
  name: string = "larry Boy";
  itemList : string[] =["itemUno","itemDuos","itemTres","itemCuatro","itemCinco"];
}
