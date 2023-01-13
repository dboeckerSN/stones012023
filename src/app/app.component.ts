import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from './product/product';

@Component({
  standalone: true,
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MatToolbarModule, RouterLink, RouterOutlet, DatePipe],
})
export class AppComponent {
  title = 'Stones';
  today = new Date();
}
