import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover: string = "https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg"
  contentTitle:string = "TÍTULO DO CONTENT"
  contentDescription:string = "Descrição do Content"
}
