import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  links: any[] = [
    { href: '#/', value: 'Home' },
    { href: '#/login', value: 'Sign in' },
  ];
}
