<!-- <template>
  <div v-if="doctor">
    <h1>{{ doctor.name }}</h1>
    <p>التخصص: {{ doctor.specialty }}</p>
  </div>

  <div vh-else>
    <p>❌ الدكتور غير موجود.</p>
  </div>
</template> -->

<template>
  <div>
    <navbar />
    <div class="doctor">
      <div class="containerr">
        <div class="header flex pt-20">
          <img class="mr-7 rounded-[50%] w-[170px]" :src="doctor.img" alt="" />
          <div class="flex flex-col justify-center">
            <h1 class="font-bold text-[22px]">{{ doctor.name }}</h1>
            <p class="opacity-[.7] font-semibold">{{ doctor.specialty }}</p>
            <p class="opacity-[.7] font-semibold">4.8 (120 reviews)</p>
          </div>
        </div>
        <div class="mt-8 flex flex-col" action="">
          <div class="flex">
            <label for="" class="font-bold text-[22px] mt-1"
              >Select Day :</label
            >
            <div class="select-wrapper ml-6">
              <select v-model="Day" name="" id="">
                <option disabled selected hidden value="">Seleeeeeeect</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
              </select>
            </div>
          </div>
          <div class="mt-8 flex mb-4">
            <label for="" class="font-bold text-[22px] mt-1"
              >Select Type :</label
            >
            <div class="select-wrapper ml-6">
              <select v-model="Type" name="" id="">
                <option disabled selected hidden value="">Seleeeeeeect</option>
                <option value="Consultation">Consultation</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Check-up">Check-up</option>
              </select>
            </div>
          </div>
          <h1 class="mt-12 font-bold text-[22px]">Availavle Slots</h1>
          <div ref="navList" class="slots mt-7 flex gap-7">
            <div value="9:00 AM" class="slot">9:00 AM</div>
            <div value="10:00 AM" class="slot">10:00 AM</div>
            <div value="11:00 AM" class="slot">11:00 AM</div>
            <div value="12:00 PM" class="slot">12:00 PM</div>
            <div value="1:00 PM" class="slot">1:00 PM</div>
            <div value="2:00 PM" class="slot">2:00 PM</div>
            <div value="3:00 PM" class="slot">3:00 PM</div>
            <div value="4:00 PM" class="slot">4:00 PM</div>
            <div value="5:00 PM" class="slot">5:00 PM</div>
            <div value="6:00 PM" class="slot">6:00 PM</div>
            <div value="7:00 PM" class="slot">7:00 PM</div>
            <div value="8:00 PM" class="slot">8:00 PM</div>
            <div value="9:00 PM" class="slot">9:00 PM</div>
            <div value="10:00 PM" class="slot">10:00 PM</div>
          </div>
          <div class="button mt-4 mb-5">
            <button @click="submit" class="mt-14 btn">Book</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Doctors from "../assets/Doctors.json";
import { ref } from "vue";

import { useAppointmentStore } from "../Store/index";

export default {
  name: "Doctor",
  props: ["id"], // استقبل الـ id من الراوتر
  data() {
    return {
      doctors: Doctors,
      doctor: null,

      doctorId: parseInt(localStorage.getItem("doctorId") - 1),

      Day: "",
      Type: "",
      active: document.getElementsByClassName("active")[0],
      slot: this.active,
      navList: ref(""),
    };
  },
  components: {
    Navbar,
  },
  methods: {
    submit() {
      const store = useAppointmentStore();
      const active = document.getElementsByClassName("active")[0];
      const slot = active.getAttribute("value");
      store.addAppointment({
        doctorId: this.doctor.id - 1,
        patientId: parseInt(localStorage.getItem("patientId")),
        time: this.Day,
        type: this.Type,

        slot: slot,
      });
    },

    // sumbit() {
    //   if (!this.doctorId) {
    //     console.log(this.Day);
    //     console.log(this.Type);
    //     const active = document.getElementsByClassName("active")[0];
    //     const slot = active.getAttribute("value");
    //     console.log(slot);
    //     // console.log("تم الحجزززززززززززززز");
    //   } else {
    //     console.log("plese log in First");
    //   }
    // },
  },
  mounted() {
    this.$refs.navList.addEventListener("click", (event) => {
      const clicked = event.target.closest(".slot");
      if (!clicked) return;

      const links = this.$refs.navList.querySelectorAll(".slot");
      links.forEach((link) => link.classList.remove("active"));
      clicked.classList.add("active");
    });
  },

  created() {
    const doctorId = parseInt(this.id); // نحول الـ id لـ رقم

    this.doctor = this.doctors.find((doc) => doc.id === doctorId);
  },
};
</script>

<style lang="scss" scoped>
.slots {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
.slots ul {
  list-style: none;
  padding: 0;
}
.slots li {
  padding: 10px;
  margin: 5px 0;
  background: #f2f2f2;
  cursor: pointer;
}
.slots li:hover {
  background: #ddd;
}

.header {
  border-bottom: 1px solid #3333332a;
  padding-bottom: 40px;
}

.select-wrapper {
  display: inline-block;
  position: relative;
  width: 220px;
}

.select-wrapper select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  appearance: none;
  background-color: #fff;
  font-size: 16px;
  font-family: "Segoe UI", sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.select-wrapper select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.15);
}
select option[disabled][hidden] {
  display: none;
}

.slot {
  padding: 11px 14px;
  border: 1px solid #3333337d;
  border-radius: 8px;
  width: 150px;
  font-weight: bold;
  cursor: pointer;
}
.active {
  background: #000;
  color: #eee;
}

.button {
  width: 100%;
  display: flex;
  justify-content: end;
}
.btn {
  background: var(--sc-main-color);
  color: #ffffff;
  padding: 12px 20px !important;
  border-radius: 28px;
  box-shadow: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  transition: 0.2s;
  width: 180px;
  margin-bottom: 5px;
  cursor: pointer;
  margin-top: 25px;
}

@media (max-width: 1280px) {
  .slots {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}
@media (max-width: 1150px) {
  .slots {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}
@media (max-width: 1024px) {
  .slots {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media (max-width: 767px) {
  .slots {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .slot {
    width: fit-content;
    padding-right: 30px;
  }
}
@media (max-width: 600px) {
  img {
    width: 140px;
    height: 140px;
  }
  .slot {
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
