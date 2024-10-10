import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallCardComponent } from "./components/small-card/small-card.component";
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { HomeComponent } from "./pages/home/home.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";
import { CreditosComponent } from './pages/creditos/creditos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SmallCardComponent, MenuTitleComponent, HomeComponent, MenuBarComponent, CreditosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
