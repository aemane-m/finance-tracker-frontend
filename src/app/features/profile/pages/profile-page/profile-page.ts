import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';

import { ProfileService } from '../../services/profile.service';
import { AuthService } from '../../../../core/services/auth.service';
import { AccountService } from '../../../security/services/account.service';

function passwordMatchValidator(ctrl: AbstractControl): ValidationErrors | null {
  const pw  = ctrl.get('newPassword')?.value;
  const cpw = ctrl.get('confirmPassword')?.value;
  return pw && cpw && pw !== cpw ? { passwordMismatch: true } : null;
}

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage implements OnInit {
  private profileService = inject(ProfileService);
  private authService    = inject(AuthService);
  private accountService = inject(AccountService);
  private router         = inject(Router);
  private fb             = inject(FormBuilder);

  savingProfile  = false;
  savingPassword = false;
  loggingOutHere = false;
  loggingOutAll  = false;
  userEmail      = '';

  profileForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.maxLength(100)]],
  });

  passwordForm = this.fb.group(
    {
      newPassword:     ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: passwordMatchValidator }
  );

  get fullName()        { return this.profileForm.controls.fullName; }
  get newPassword()     { return this.passwordForm.controls.newPassword; }
  get confirmPassword() { return this.passwordForm.controls.confirmPassword; }

  ngOnInit(): void {
    // Lecture synchrone depuis le cache AuthService — aucun verrou Supabase
    const user = this.authService.getCurrentUser();
    this.userEmail = user?.email ?? '';
    const name = (user?.user_metadata?.['full_name'] as string | undefined) ?? '';
    this.profileForm.patchValue({ fullName: name });
  }

  async saveProfile(): Promise<void> {
    if (this.profileForm.invalid) { this.profileForm.markAllAsTouched(); return; }
    this.savingProfile = true;
    try {
      await this.profileService.updateProfile({ fullName: this.fullName.value! });
      await Swal.fire({ icon: 'success', title: 'Profil mis à jour', timer: 1400, showConfirmButton: false });
    } catch {
      await Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de mettre à jour le profil.', confirmButtonColor: '#0f766e' });
    } finally {
      this.savingProfile = false;
    }
  }

  async savePassword(): Promise<void> {
    if (this.passwordForm.invalid) { this.passwordForm.markAllAsTouched(); return; }
    this.savingPassword = true;
    try {
      await this.profileService.updatePassword({ newPassword: this.newPassword.value! });
      this.passwordForm.reset();
      await Swal.fire({ icon: 'success', title: 'Mot de passe mis à jour', timer: 1400, showConfirmButton: false });
    } catch {
      await Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de mettre à jour le mot de passe.', confirmButtonColor: '#0f766e' });
    } finally {
      this.savingPassword = false;
    }
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
    await this.router.navigate(['/login']);
  }

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
        await this.router.navigate(['/login']);
      },
      error: async () => {
        this.loggingOutAll = false;
        await Swal.fire({ icon: 'error', title: 'Erreur', text: 'Impossible de révoquer les sessions. Réessayez.', confirmButtonColor: '#0f766e' });
      },
    });
  }
}
