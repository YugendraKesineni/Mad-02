const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : "",
      confirmedName: ""
    };
  },

  methods: {

    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("SUbmitted");
    },
    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
    },

    setName(lastname) {
      this.name = event.target.value +" "+ lastname;
    }
  }
});

app.mount('#events');
