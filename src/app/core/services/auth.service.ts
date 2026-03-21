import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../auth/supabase.client';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private session$ = new BehaviorSubject<Session | null>(null);
  private initPromise: Promise<void>;

  constructor(private ngZone: NgZone) {
    // Un seul appel au démarrage pour récupérer la session existante
    this.initPromise = supabase.auth.getSession().then(({ data }) => {
      this.ngZone.run(() => this.session$.next(data.session));
    });

    // Mise à jour réactive (login, logout, refresh de token automatique)
    supabase.auth.onAuthStateChange((_event, session) => {
      this.ngZone.run(() => this.session$.next(session));
    });
  }

  /** Attendre la première initialisation (guards au démarrage) */
  waitForInit(): Promise<void> {
    return this.initPromise;
  }

  /** Accès synchrone au token — sans verrou Supabase */
  getAccessToken(): string | null {
    return this.session$.value?.access_token ?? null;
  }

  /** Accès synchrone à l'état d'authentification */
  isAuthenticated(): boolean {
    return !!this.session$.value;
  }

  /** Utilisateur courant depuis la session en cache */
  getCurrentUser() {
    return this.session$.value?.user ?? null;
  }

  async signIn(email: string, password: string) {
    return supabase.auth.signInWithPassword({ email, password });
  }

  async signUp(email: string, password: string, fullName: string) {
    return supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
  }

  async signOut() {
    return supabase.auth.signOut();
  }

  async resetPassword(email: string) {
    return supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
  }
}
