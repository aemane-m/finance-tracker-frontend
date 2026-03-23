import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
const hasPlaceholderConfig = environment.supabaseUrl.includes('YOUR_PROJECT_REF') ||
    environment.supabaseAnonKey.includes('YOUR_SUPABASE_ANON_KEY');
if (hasPlaceholderConfig) {
    console.warn('Supabase configuration missing. Update supabaseUrl and supabaseAnonKey in src/environments/*.ts before using authentication.');
}
export const supabase = createClient(environment.supabaseUrl, environment.supabaseAnonKey);
