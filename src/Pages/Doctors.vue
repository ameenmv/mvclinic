<template>
  <div>
    <Navbar />
    <Doctorsteam />
  </div>
</template>

<script>
import Doctorsteam from "../components/Doctorsteam.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Doctors",
  components: {
    Navbar,
    Doctorsteam,
  },
};
</script>

<style lang="scss" scoped></style>
