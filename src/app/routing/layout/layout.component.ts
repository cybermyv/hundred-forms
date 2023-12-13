import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../../shared/header/header.component";
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/core/services/sidenav.services';
import { SidenavComponent } from "../../shared/sidenav/sidenav.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterModule, HeaderComponent, MatSidenavModule, SidenavComponent]
})
export class LayoutComponent implements OnInit {
  
  constructor(private sidenavService: SidenavService) {}

  ngOnInit() {
    // this.sidenavService.sidenavState$.subscribe((state) => {
    //   this.isSidenavOpen = state; // Получить состояние сайднава
    // });
  }

  // close() {
  //   this.sidenavService.setSidenavState(false);
  // }

}
