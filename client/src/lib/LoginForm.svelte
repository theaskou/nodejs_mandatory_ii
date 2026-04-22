<script>
  import { fetchPost } from "../utils/fetchUtil.js";
  import { navigate } from "svelte-routing";
  import { toast } from "@zerodevx/svelte-toast";

  let userName = "";
  let password = "";

  async function handleLogin(event) {
    event.preventDefault();

    const response = await fetchPost("/login", { userName, password });

    if (response.error) {
      toast.push(`${response.error}`);
    } else {
      navigate("/welcome", { replace: true });
    }
  }
</script>

<form id="login-form" on:submit={handleLogin}>
  <label>
    Username:
    <input
      type="text"
      bind:value={userName}
      id="user-name"
      required
      placeholder="Your username…"
    />
  </label>
  <label>
    Password:
    <input
      type="password"
      bind:value={password}
      id="password"
      required
      placeholder="Your password…"
    />
  </label>


  <button id="log-in-button">Log in</button>
</form>
