import { Component } from '@angular/core';
@Component({
  selector: 'app-body',
  templateUrl: 'body.Component.html'
})

export class BodyComponent {

  mostrar:boolean = false;
  frase:any = {

    mensaje:"Yo solo sé que nada sé",
    autor:"Socrates"

  }

  personas:string[] = ["Pedro Ortiz","Omaira Montiel","Leidy Ortiz"];



}
