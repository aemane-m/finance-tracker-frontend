import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forgot-password-page.html',
  styleUrl: './forgot-password-page.css',
})
export class ForgotPasswordPage {
  private fb          = inject(FormBuilder);
  private authService = inject(AuthService);

  loading = false;
  sent    = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  get email() { return this.form.controls.email; }

  async submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    const { error } = await this.authService.resetPassword(this.email.value!);

    this.loading = false;

    if (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Impossible d\'envoyer l\'email de réinitialisation. Vérifiez l\'adresse saisie.',
        confirmButtonColor: '#0f766e',
      });
      return;
    }

    this.sent = true;
  }
}
