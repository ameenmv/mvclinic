<template>
  <div>
    <Navbar />
    <div class="login pt-20 pb-20">
      <div class="containerr flex">
        <div class="left w-[50%]">
          <img src="../assets/login.png" alt="" />
        </div>
        <div class="right w-[50%] flex items-center justify-center">
          <div
            action=""
            class="flex right2 flex-col items-center text-center w-[60%]"
          >
            <img
              src="../assets/logo.png"
              alt=""
              class="mb-3 w-[60px] h-[60px]"
            />
            <h1 class="text-[30px] font-bold mb-1">Welcome Back :)</h1>
            <p class="mb-8 font-semibold">i wish to you Get well soon</p>

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
            <RouterLink to="/Login">
              <p class="font-semibold">
                Are You Doctor? Click Here
              </p></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { ref } from "vue";
import Patients from "../assets/Patients.json";

export default {
  name: "Login2",
  components: {
    Navbar,
  },
  data() {
    return {
      email: ref(""),
      password: ref(""),
    };
  },
  methods: {
    login() {
      const foundDoctor = Patients.find(
        (Patient) =>
          Patient.email === this.email && Patient.password === this.password
      );

      if (foundDoctor) {
        localStorage.setItem("patientId", foundDoctor.id);
        localStorage.setItem("patientName", foundDoctor.name);
        this.$router.push("/patientdash");
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
