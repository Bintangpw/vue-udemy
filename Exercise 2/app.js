const { createApp, ref } = Vue;

createApp({
    data() {
        return {
            value: ""
        };
    },
    methods: {
        showAlert() {
            alert("Button Clicked!");
        },
        updateValue(event) {
            this.value = event.target.value;
        }
    }
}).mount("#exercise");