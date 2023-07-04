const app = Vue.createApp({
    data() {
        return {
            name: "Yugendra Kesineni",
            age: 22,
            imageURL : "https://media.licdn.com/dms/image/C4D03AQHx5y2VIQLh-w/profile-displayphoto-shrink_800_800/0/1655811175178?e=2147483647&v=beta&t=r-r1yScpE1HbQ4y436rieYjx0b1Lyp2l2Eq-D2UsXVc"
        };
    },

    methods: {
        calculateAge() {
            return this.age + 5;
        },

        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');