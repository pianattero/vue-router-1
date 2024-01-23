import { defineStore } from "pinia";

//OPTION API
export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

//COMPOSITION API
// export const useCounterStore = defineStore("counter", () => {
//   //DATA
//   const count = ref(0);

//   //METHODS
//   const increment = () => count.value++;

//   //COMPUTED
//   const double = computed(() => count.value * 2);

//   return {
//     count,
//     increment,
//     double,
//   };
// });
