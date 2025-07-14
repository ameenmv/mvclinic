<template>
  <div class="h-[100vh]">
    <Navbar />
    <Landing />
  </div>
</template>

<script>
import Landing from "../components/landing.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Landing,
  },
};
</script>

<style lang="scss" scoped></style>
