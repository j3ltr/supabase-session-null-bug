<script lang=ts>
  export let userId: string;
  export let userAvatar: string;
  export let userName: string;
</script>

<nav>
  <div class=left>
    <ul class=links>
      <li><a href="/unprotected-route">Unprotected Route</a></li>
      <li><a href="/protected-route">Protected Route</a></li>
    </ul>
  </div>
  <div class=right>
    <a href="/login" class=account>
      {#if userId == undefined}
        <p class=account-username>Log in</p>
      {:else}
        <img class=account-pf src="{userAvatar}" alt="Avatar of account">
        <p class=account-username>{userName}</p>
      {/if}
    </a>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    margin-bottom: 1em;
    padding: 0 2em;
    background-color: gray;
    border-radius: .2em;
  }

  .left {
    display: flex;
  }

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .links li {
    display: inline;
  }
  
  .links a {
    color: var(--text-color);
    text-decoration: none;
    margin: 2em;
    font-size: 1em;
    font-weight: 500;
  }

  .links a:hover {
    text-decoration: underline;
  }

  .account {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .account:hover {
    cursor: pointer;
  }

  .account-username {
    font-weight: 800;
    margin: 0 0 0 1em;
    color: var(--text-color);
  }

  .account-pf {
    width: 1.5em;
    height: 1.5em;
    border-radius: 20%;
  }
</style>