import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`,
  styleUrls: [],
  standalone: true,
  
})
export class AppComponent {
  title = 'hundred-forms';
}
