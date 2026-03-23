import { Injectable } from '@angular/core';
import { supabase } from '../auth/supabase.client';
import * as i0 from "@angular/core";
export class AuthService {
    async signIn(email, password) {
        return supabase.auth.signInWithPassword({ email, password });
    }
    async signUp(email, password, fullName) {
        return supabase.auth.signUp({
            email,
            password,
            options: { data: { full_name: fullName } },
        });
    }
    async signOut() {
        return supabase.auth.signOut();
    }
    async getSession() {
        const { data } = await supabase.auth.getSession();
        return data.session;
    }
    async getAccessToken() {
        const { data } = await supabase.auth.getSession();
        return data.session?.access_token ?? null;
    }
    async getCurrentUser() {
        const { data } = await supabase.auth.getUser();
        return data.user;
    }
    async isAuthenticated() {
        const session = await this.getSession();
        return !!session;
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
