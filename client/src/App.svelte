<script>
  import LoginForm from "./lib/LoginForm.svelte";
  import SignUpForm from "./lib/SignUpForm.svelte";

  let loggedIn = false;
  let displaySignUp = $state(true);
</script>


{#if loggedIn}
  <h1>Content!!</h1>
{:else}
  <fieldset>
  <label>Sign up
    <input 
    type="radio"
    name="form-selector"
    value={true}
    bind:group={displaySignUp}>
  </label>
  <label>Log in
    <input 
    type="radio"
    name="form-selector"
    value={false}
    bind:group={displaySignUp}>
  </label>
  </fieldset>
  {#if displaySignUp}
    <SignUpForm />
  {:else}
    <LoginForm />
  {/if}
{/if}
