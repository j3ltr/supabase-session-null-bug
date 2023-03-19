import { SupabaseClient, Session } from '@supabase/supabase-js';
import { Database } from './database.types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global {
  declare namespace App {
    interface PageData {
      session: Session | null;
    }
    interface Locals {
      supabase: SupabaseClient<Database>;
      getSession(): Promise<Session | null>;
    }
    // interface PageData {}
    // interface Error {}
    // interface Platform {}
  }
}
