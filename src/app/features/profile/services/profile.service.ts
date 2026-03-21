import { Injectable } from '@angular/core';
import { supabase } from '../../../core/auth/supabase.client';

export interface ProfileUpdateRequest {
  fullName: string;
}

export interface PasswordUpdateRequest {
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  async getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  }

  async updateProfile(req: ProfileUpdateRequest) {
    const { data, error } = await supabase.auth.updateUser({
      data: { full_name: req.fullName },
    });
    if (error) throw error;
    return data.user;
  }

  async updatePassword(req: PasswordUpdateRequest) {
    const { data, error } = await supabase.auth.updateUser({
      password: req.newPassword,
    });
    if (error) throw error;
    return data.user;
  }
}
