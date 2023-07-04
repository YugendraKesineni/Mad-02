const app = Vue.createApp({
    data() {
        return {
            courseGoal: "Hello",
            courseGoalA : "Learn and Master Vue",
            courseGoalB : "Master and learn Vue",
            vueLink: "https://vuejs.org"
        };
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');