import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { supabase } from '../../../../core/auth/supabase.client';
import { passwordMatchValidator } from '../../../../core/validators/custom-validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password-page.html',
})
export class ResetPasswordPage implements OnInit {
  private fb     = inject(FormBuilder);
  private router = inject(Router);

  loading = false;
  ready   = false; // true quand la session recovery est confirmée

  form = this.fb.group({
    password:        ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
  }, { validators: passwordMatchValidator() });

  get password()        { return this.form.controls.password; }
  get confirmPassword() { return this.form.controls.confirmPassword; }
  get mismatch()        { return this.form.hasError('passwordMismatch') && this.confirmPassword.touched; }

  ngOnInit(): void {
    // Supabase envoie un fragment #access_token=...&type=recovery
    // onAuthStateChange intercepte l'event PASSWORD_RECOVERY automatiquement
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') {
        this.ready = true;
      }
    });

    // Si l'utilisateur arrive ici sans token (navigation directe), on redirige
    setTimeout(() => {
      if (!this.ready) {
        this.router.navigate(['/forgot-password']);
      }
    }, 3000);
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    const { error } = await supabase.auth.updateUser({
      password: this.password.value!,
    });

    this.loading = false;

    if (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: error.message ?? 'Impossible de mettre à jour le mot de passe.',
        confirmButtonColor: '#0f766e',
      });
      return;
    }

    await Swal.fire({
      icon: 'success',
      title: 'Mot de passe mis à jour',
      text: 'Votre mot de passe a été modifié avec succès.',
      confirmButtonColor: '#0f766e',
      timer: 2500,
      showConfirmButton: false,
    });

    await supabase.auth.signOut();
    this.router.navigate(['/login']);
  }
}
