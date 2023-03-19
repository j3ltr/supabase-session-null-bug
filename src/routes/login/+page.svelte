<script lang=ts>
  import {
    PUBLIC_SUPABASE_REDIRECT_URI
  } from '$env/static/public';
  import type { PageData } from './$types';

  export let data: PageData;

  async function signInWithDiscord() {
    const response = await data.supabase.auth.signInWithOAuth({
      provider: 'discord',
      options: {
        redirectTo: PUBLIC_SUPABASE_REDIRECT_URI,
        scopes: 'email identify connections guilds guilds.members.read'
      }
    });
  }

  async function signOut() {
    const response = await data.supabase.auth.signOut();
  }
</script>

{#if data.session}
  <button on:click={() => signOut()} class="login-button">Sign out</button>
{:else}
  <button on:click={() => signInWithDiscord()} class="login-button">Login with Discord</button>
{/if}

