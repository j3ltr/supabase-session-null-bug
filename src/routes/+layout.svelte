<script lang="ts">
  import NavigationBar from '$lib/components/global/NavigationBar.svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  let session: any = data.session;
  let userId = session?.user.user_metadata.provider_id;
  let userAvatar = session?.user.user_metadata.avatar_url;
  let userName = session?.user.user_metadata.full_name;
</script>

<div class=wrapper>
  <NavigationBar {userId} {userAvatar} {userName} />
  <slot />
</div>