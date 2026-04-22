<script>
  import { fetchPost } from "../utils/fetchUtil.js";

  let userName = '';
  let password = '';
  let errorMessage = '';
  
  async function handleLogin(event) {
    event.preventDefault();

    const response = await fetchPost('/login', { userName, password });

    if (response.error) {
      errorMessage = response.error;
    } else {
      window.location.href = '/welcome';
    }
  }
  </script>



<form id="login-form" on:submit={handleLogin} >
  <label>
    Username:
    <input 
      type="text"
      bind:value={userName}
      id="user-name"
      required
      placeholder="Your username…"/>
  </label>
  <label>
    Password:
    <input
      type="password"
      bind:value={password}
      id="password"
      required
      placeholder="Your password…"/>
  </label>

  {#if errorMessage}
  TOASTR NOTIFICATION
  {/if}
  <button id="log-in-button">Log in</button>
</form>