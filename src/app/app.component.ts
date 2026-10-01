import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  public app = 'Editor d\'imatges';
  protected readonly title = signal('ioc-angular-editor-imatges-luismiguel-garcia');
}
