import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from "./cabecera/cabecera";
import { Cuerpo } from "./cuerpo/cuerpo";
import { Pie } from "./pie/pie";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecera, Cuerpo, Pie],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'plantilla-angular';
}
