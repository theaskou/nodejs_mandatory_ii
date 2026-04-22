<script>
  import { fetchPost } from "../utils/fetchUtil";
  import { navigate } from "svelte-routing";
  import { toast } from "@zerodevx/svelte-toast";

  async function handleLogout() {
    const response = await fetchPost("/logout");

    if (response.error) {
      toast.push(`${response.error}`);
    } else {
      navigate("/", { replace: true });
    }
  }

  export let user;
  
</script>

<section>
  <h1>Welcome {user.userName}!</h1>

  <button onclick={handleLogout}>Log out</button>
</section>

<style>
  section {
    display: flex;
    justify-content: space-between;
  }
</style>
