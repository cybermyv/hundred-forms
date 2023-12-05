import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

export const ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: LayoutComponent
    }
];