<template>
  <Navbar />
  <div class="login pt-20 pb-20">
    <div class="containerr flex">
      <div class="left w-[50%]">
        <img src="../assets/login.png" alt="" />
      </div>
      <div class="right w-[50%] flex items-center justify-center">
        <div class="flex right2 flex-col items-center text-center w-[60%]">
          <img src="../assets/logo.png" alt="" class="mb-3 w-[60px] h-[60px]" />
          <h1 class="text-[30px] font-bold mb-1">Welcome Back Doctor !</h1>
          <p class="mb-8">Lets get you Logged in</p>
          <input
            v-model="email"
            placeholder="Email"
            class="mb-4"
            type="email"
            name=""
            id=""
          />
          <input
            v-model="password"
            class="mb-8"
            placeholder="Password"
            type="password"
            name=""
            id=""
          />
          <button @click="login" class="btn mb-4">Login</button>
          <RouterLink to="/Login2">
            <p class="font-semibold">Are You Patient? Click Here</p></RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { ref } from "vue";
import Login from "../assets/Login.json";

export default {
  name: "Login",
  data() {
    return {
      email: ref(""),
      password: ref(""),
    };
  },
  components: {
    Navbar,
  },
  methods: {
    login() {
      const foundDoctor = Login.find(
        (Login) =>
          Login.email === this.email && Login.password === this.password
      );

      if (foundDoctor) {
        localStorage.setItem("doctorId", foundDoctor.id);
        localStorage.setItem("doctorName", foundDoctor.name);
        this.$router.push("/doctordash");
        console.log("success");
      } else {
        error.value = "Invalid email or password";
        console.log("fail");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.left {
  display: flex;
  justify-content: center;
  align-items: center;
}
input,
button {
  width: 100%;
  outline: none;
  background: #3b3b3b3b;
  padding: 8px;
  border-radius: 4px;
}
button {
  background: #0099b9;
  cursor: pointer;
  color: #eee;
}
@media (max-width: 767px) {
  .left img {
    display: none;
  }
  .left {
    width: 0%;
  }
  .right {
    width: 100%;
  }
}
@media (max-width: 600px) {
  .containerr {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem; /* 16px */
    padding-right: 1rem;
  }
}
@media (max-width: 500px) {
  .right2 {
    width: 100%;
  }
}
</style>
