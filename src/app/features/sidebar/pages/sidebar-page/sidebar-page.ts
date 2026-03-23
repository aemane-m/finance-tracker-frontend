import { Component, inject, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../../../core/services/auth.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Vue d\'ensemble',
    items: [
      { label: 'Tableau de bord', icon: 'space_dashboard', route: '/app/dashboard'    },
      { label: 'Transactions',    icon: 'receipt_long',    route: '/app/transactions' },
      { label: 'Planifiées',      icon: 'event_repeat',    route: '/app/planned'      },
    ],
  },
  {
    label: 'Gestion',
    items: [
      { label: 'Catégories', icon: 'sell',        route: '/app/categories' },
      { label: 'Budgets',    icon: 'savings',     route: '/app/budgets'    },
      { label: 'Objectifs',  icon: 'flag',        route: '/app/goals'      },
      { label: 'Dettes',     icon: 'credit_card', route: '/app/debts'      },
    ],
  },
  {
    label: 'Outils',
    items: [
      { label: 'Calendrier',      icon: 'calendar_month', route: '/app/calendar'      },
      { label: 'Import / Export', icon: 'import_export',  route: '/app/import-export' },
    ],
  },
  {
    label: 'Compte',
    items: [
      { label: 'Paramètres', icon: 'settings', route: '/app/profile' },
    ],
  },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-page.html',
  styleUrl: './sidebar-page.scss',
})
export class AppSidebar implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  readonly navSections = NAV_SECTIONS;

  showUserMenu = false;
  userFullName = '';
  userEmail = '';
  userInitials = '';

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();
    if (user) {
      this.userEmail = user.email ?? '';
      this.userFullName = (user.user_metadata?.['full_name'] as string | undefined) ?? this.userEmail.split('@')[0];
      this.userInitials = this.buildInitials(this.userFullName);
    }
  }

  private buildInitials(name: string): string {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('[data-user-menu]')) {
      this.showUserMenu = false;
    }
  }

  async signOut(): Promise<void> {
    this.showUserMenu = false;
    const result = await Swal.fire({
      icon: 'question',
      title: 'Se déconnecter ?',
      text: 'Votre session sera fermée.',
      showCancelButton: true,
      confirmButtonText: 'Déconnecter',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#0f766e',
      cancelButtonColor: '#6b7280',
    });
    if (!result.isConfirmed) return;
    await this.authService.signOut();
    await this.router.navigate(['/']);
  }
}
