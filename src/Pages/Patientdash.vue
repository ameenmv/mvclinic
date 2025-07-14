<template>
  <div>
    <navbar />
    <div class="">
      <div class="flex dashboard p-10">
        <div class="left w-[25%]">
          <div class="flex items-center">
            <img
              :src="Patients[doctorId].img"
              class="w-[50px] rounded-[50%] h-[50px] mr-4"
              alt=""
            />
            <h1 class="font-semibold">{{ Patients[doctorId].name }}</h1>
          </div>
          <div class="dash flex mt-10 items-center">
            <svg
              class="mr-4"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
              />
            </svg>
            <h1 class="font-semibold font-[20px]">Dashboard</h1>
          </div>
        </div>
        <div class="right w-[75%]">
          <h1 class="font-bold mb-5 text-[32px]">Dashboard</h1>
          <h1 class="font-semibold text-[20px]">
            Welcome Back {{ Patients[doctorId].name }}
          </h1>
          <div class="pt-10">
            <div class="bg-white shadow rounded-lg overflow-hidden">
              <table class="min-w-full table-auto text-sm">
                <thead class="bg-gray-50">
                  <tr class="text-left text-gray-600 font-semibold">
                    <th class="px-6 py-4">Time</th>
                    <th class="px-6 py-4">Doctor</th>
                    <th class="px-6 py-4">Type</th>
                    <th class="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr
                    v-for="(appointment, index) in appointments"
                    :key="index"
                    class="hover:bg-gray-50 transition"
                  >
                    <td
                      class="px-6 py-4 text-blue-600 font-medium cursor-pointer"
                    >
                      {{ appointment.time }} ,
                      {{ appointment.slot }}
                    </td>
                    <td class="px-6 py-4 font-medium text-gray-800">
                      {{ Doctors[appointment.doctorId].name }}
                    </td>
                    <td class="px-6 py-4">
                      <a class="text-blue-500">
                        {{ appointment.type }}
                      </a>
                    </td>
                    <td class="px-6 py-4">
                      <span
                        :class="[
                          'px-3 py-1 rounded-full text-xs font-semibold',
                          appointment.status === 'Confirmed'
                            ? 'bg-gray-100 text-gray-700'
                            : 'bg-yellow-100 text-yellow-800',
                        ]"
                      >
                        {{ appointment.status }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Patients from "../assets/Patients.json";
import Doctors from "../assets/Doctors.json";

import { useAppointmentStore } from "../Store/index";
import { computed } from "vue";

export default {
  name: "Patientdash",
  components: {
    Navbar,
  },
  data() {
    return {
      Patients: Patients,
      Doctors: Doctors,
      doctorId: parseInt(localStorage.getItem("patientId") - 1),
      // appointments: [
      //   {
      //     time: "9:00 AM",
      //     patient: "Sophia Bennett",
      //     type: "Consultation",
      //     status: "Confirmed",
      //   },
      //   {
      //     time: "10:00 AM",
      //     patient: "Ethan Carter",
      //     type: "Follow-up",
      //     status: "Confirmed",
      //   },
      //   {
      //     time: "11:00 AM",
      //     patient: "Olivia Davis",
      //     type: "Check-up",
      //     status: "Pending",
      //   },
      //   {
      //     time: "12:00 PM",
      //     patient: "Noah Foster",
      //     type: "Consultation",
      //     status: "Confirmed",
      //   },
      // ],
    };
  },
  setup() {
    const store = useAppointmentStore();
    const patientId = parseInt(localStorage.getItem("patientId"));

    const filteredAppointments = computed(() => {
      return store.appointments.filter(
        (appointment) => appointment.patientId === patientId
      );
    });

    return {
      appointments: filteredAppointments,
    };
  },
};
</script>

<style lang="scss" scoped>
.dash {
  background: rgba(0, 0, 0, 0.0862745098);
  padding: 15px;
  border-radius: 5px;
  width: fit-content;
  padding-right: 75px;
  cursor: pointer;
}
.buttons button {
  cursor: pointer;
  border-radius: 5px;
  background: #4699a0;
  color: white;
  padding: 8px;
}
.buttons button:last-of-type {
  background: rgba(255, 0, 0, 0.702);
}
@media (max-width: 1024px) {
  .dashboard {
    flex-direction: column;
    gap: 50px;
  }
  .left,
  .right {
    width: 100%;
  }
}
@media (max-width: 600px) {
  .dash {
    padding: 12px;
    font-size: 15px;
  }
  .dash svg {
    width: 25px;
  }
  .right h1:nth-child(1) {
    font-size: 28px;
  }
  .right h1:nth-child(2) {
    font-size: 18px;
  }
  td,
  th {
    padding: 10px 20px;
  }
  .containerr {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0rem; /* 16px */
    padding-right: 0rem;
  }
  .dashboard {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
