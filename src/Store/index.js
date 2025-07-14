// stores/appointmentStore.js
import { defineStore } from "pinia";

export const useAppointmentStore = defineStore("appointments", {
  state: () => ({
    appointments: [],
    Patient: "",
    Doctor: "",
    Type: "",
    time: "",
    Status: "",
  }),

  actions: {
    // لما المريض يحجز
    addAppointment(data) {
      this.appointments.push({
        id: Date.now(),
        status: "pending",
        ...data,
      });
    },

    // لما الدكتور يقبل أو يرفض
    updateStatus(id, newStatus) {
      const appointment = this.appointments.find((a) => a.id === id);
      if (appointment) appointment.status = newStatus;
    },
  },

  getters: {
    getByDoctor: (state) => (doctorId) => {
      return state.appointments.filter((a) => a.doctorId === doctorId);
    },
    getByPatient: (state) => (patientId) => {
      return state.appointments.filter((a) => a.patientId === patientId);
    },
  },
});

// // src/stores/cartStore.js
// import { defineStore } from "pinia";

// export const useCartStore = defineStore("cart", {
//   state: () => ({
//     cartCount: 0,
//     price: 599,
//     vat: 0,
//     total: 0,
//     shiping: 0,
//     id: 0,
//     cart: [],
//     quantity: 1,
//   }),
//   actions: {
//     increment() {
//       this.cartCount++;
//     },
//     calctotal() {
//       this.total = this.price * this.cartCount;
//     },
//     calcvat() {
//       const a = 129;
//       this.vat = a * this.cartCount;
//     },
//     calcshiping() {
//       if (this.cartCount > 0) {
//         this.shiping = 50;
//       }
//     },
//     minus(item) {
//       if (item.quantity > 0) {
//         this.cartCount = this.cartCount - 1;
//         item.quantity = item.quantity - 1;
//         this.vat = this.vat - 129;
//         this.total = this.total - this.price;
//       }
//     },
//     plus(item) {
//       this.cartCount++;
//       item.quantity++;
//       this.vat = this.vat + 129;
//       this.total = this.total + this.price;
//     },
//     addCart(product) {
//       const existingProduct = this.cart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         existingProduct.quantity++;
//       } else {
//         this.cart.push({ ...product, quantity: 1 });
//       }
//     },
//   },
// });
