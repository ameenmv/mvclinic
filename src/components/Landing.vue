<template>
  <div class="landing">
    <div class="containerr h-[100%] flex items-center gap-10">
      <div class="left">
        <h1 class="font-bold text-[51px] mb-5">
          Speak to a Egyption healthcare provider
        </h1>
        <p>
          Online appointments within minutes. Free in Ontario, Alberta and BC
          with a valid health card for applicable services.
        </p>
        <button>Book Now</button>
      </div>
      <div class="right">
        <img src="../assets/landing.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style lang="scss" scoped>
.containerr {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 5rem; /* 16px */
  padding-right: 5rem;
}
.landing {
  background-image: url(../assets/w19.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 89%;
}
.left,
.right {
  width: 50%;
  margin-top: 150px;
}
button {
  background: #fe637c !important;
  color: #ffffff;
  padding: 16px 30px !important;
  border-radius: 28px;
  box-shadow: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  transition: 0.2s;
  width: 250px;
  margin-bottom: 5px;
  cursor: pointer;
  margin-top: 25px;
}
.right img {
  animation: ani 3s infinite;
}

@keyframes ani {
  0%,
  100% {
    transform: translateY(30px);
  }
  50% {
    transform: translateY(-30px);
  }
}

@media (max-width: 1300px) {
  .left {
    width: 60%;
  }
  .right {
    width: 40%;
  }
  .right img {
    width: 400px;
  }
}
@media (max-width: 1024px) {
  h1 {
    font-size: 30px;
  }
  p {
    font-size: 14px;
  }
  .containerr {
    padding-bottom: 150px;
  }
  button {
    width: 160px;
    padding: 12px 20px !important;
    font-size: 17px;
  }
}
@media (max-width: 767px) {
  img {
    display: none;
  }
  .left {
    width: 100%;
  }
  .right {
    width: 0%;
  }
}
@media (max-width: 600px) {
  .containerr {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem; /* 16px */
    padding-right: 2rem;
  }
}
</style>
