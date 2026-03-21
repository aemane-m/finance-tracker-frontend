import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSidebar } from '../../features/sidebar/pages/sidebar-page/sidebar-page';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, AppSidebar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
