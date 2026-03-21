import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loading = false;
  showPassword = false;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get email() { return this.form.controls.email; }
  get password() { return this.form.controls.password; }

  async submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    const { error } = await this.authService.signIn(
      this.email.value!,
      this.password.value!
    );

    this.loading = false;

    if (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Connexion échouée',
        text: error.message === 'Invalid login credentials'
          ? 'Email ou mot de passe incorrect.'
          : error.message,
        confirmButtonColor: '#0f766e',
      });
      return;
    }

    await this.router.navigate(['/app/dashboard']);
  }
}
