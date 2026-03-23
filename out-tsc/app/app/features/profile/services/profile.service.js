import { Injectable } from '@angular/core';
import { supabase } from '../../../core/auth/supabase.client';
import * as i0 from "@angular/core";
export class ProfileService {
    async getCurrentUser() {
        const { data, error } = await supabase.auth.getUser();
        if (error)
            throw error;
        return data.user;
    }
    async updateProfile(req) {
        const { data, error } = await supabase.auth.updateUser({
            data: { full_name: req.fullName },
        });
        if (error)
            throw error;
        return data.user;
    }
    async updatePassword(req) {
        const { data, error } = await supabase.auth.updateUser({
            password: req.newPassword,
        });
        if (error)
            throw error;
        return data.user;
    }
    static ɵfac = function ProfileService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProfileService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
