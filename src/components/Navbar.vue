<template>
  <div class="navbar">
    <div class="containerr flex justify-between">
      <router-link to="/"
        ><div class="logo p-2 flex items-center">
          <img src="../assets/logo.png" class="w-[35px] h-[35px] mr-3" alt="" />
          <h1 class="logo font-bold mt-1 text-[24px]">MV Clinic</h1>
        </div></router-link
      >
      <ul class="flex gap-7 items-center font-semibold">
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/doctors"><li>Doctors</li></router-link>
        <li>Clinics</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Book Appointment</li>
      </ul>
      <router-link class="flex" to="/login"
        ><svg
          class="cursor-pointer"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
          /></svg
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
.navbar {
  border: 1px solid #00000013;
  padding: 10px;
  height: 11%;
}
ul li {
  cursor: pointer;
  transition: 0.5s;
  opacity: 0.6;
}
ul li:hover {
  opacity: 1;
}

@media (max-width: 1024px) {
  ul li:nth-child(3),
  ul li:nth-child(4),
  ul li:nth-child(5),
  ul li:nth-child(6) {
    display: none;
  }
}
@media (max-width: 600px) {
  img {
    width: 25px;
    height: 25px;
  }
  h1 {
    font-size: 19px;
  }
  li {
    font-size: 14px;
  }
  svg {
    width: 15px;
  }
}
@media (max-width: 600px) {
  .containerr {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0rem; /* 16px */
    padding-right: 0rem;
  }
}
</style>
