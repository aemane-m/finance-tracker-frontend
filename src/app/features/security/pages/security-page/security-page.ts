import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AccountService } from '../../services/account.service';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-security-page',
  standalone: true,
  imports: [],
  templateUrl: './security-page.html',
  styleUrl: './security-page.css',
})
export class SecurityPage {
  private accountService = inject(AccountService);
  private authService    = inject(AuthService);
  private router         = inject(Router);

  loggingOutAll  = false;
  loggingOutHere = false;

  async logoutAll(): Promise<void> {
    const result = await Swal.fire({
      icon: 'warning',
      title: 'Déconnexion globale ?',
      text: 'Toutes vos sessions actives sur tous les appareils seront révoquées.',
      showCancelButton: true,
      confirmButtonText: 'Déconnecter partout',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
    });
    if (!result.isConfirmed) return;

    this.loggingOutAll = true;
    this.accountService.logoutAll().subscribe({
      next: async () => {
        await this.authService.signOut();
        await this.router.navigate(['/']);
      },
      error: async () => {
        this.loggingOutAll = false;
        await Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Impossible de révoquer les sessions. Réessayez.',
          confirmButtonColor: '#0f766e',
        });
      },
    });
  }

  async logoutHere(): Promise<void> {
    const result = await Swal.fire({
      icon: 'question',
      title: 'Se déconnecter ?',
      text: 'Vous serez déconnecté de cet appareil uniquement.',
      showCancelButton: true,
      confirmButtonText: 'Se déconnecter',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#0f766e',
      cancelButtonColor: '#6b7280',
    });
    if (!result.isConfirmed) return;

    this.loggingOutHere = true;
    await this.authService.signOut();
    await this.router.navigate(['/']);
  }
}
