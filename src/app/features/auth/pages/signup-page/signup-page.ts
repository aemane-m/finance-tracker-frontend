import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service';
import { passwordMatchValidator } from '../../../../core/validators/custom-validators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.css',
})
export class SignupPage {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loading = false;
  showPassword = false;
  showConfirm = false;

  form = this.fb.group(
    {
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: passwordMatchValidator() }
  );

  get fullName() { return this.form.controls.fullName; }
  get email() { return this.form.controls.email; }
  get password() { return this.form.controls.password; }
  get confirmPassword() { return this.form.controls.confirmPassword; }

  async submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    const { error } = await this.authService.signUp(
      this.email.value!,
      this.password.value!,
      this.fullName.value!
    );

    this.loading = false;

    if (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Inscription échouée',
        text: error.message === 'User already registered'
          ? 'Un compte existe déjà avec cet email.'
          : error.message,
        confirmButtonColor: '#0f766e',
      });
      return;
    }

    await Swal.fire({
      icon: 'success',
      title: 'Compte créé !',
      text: 'Vérifiez votre email pour confirmer votre inscription.',
      confirmButtonColor: '#0f766e',
    });

    await this.router.navigate(['/login']);
  }
}
