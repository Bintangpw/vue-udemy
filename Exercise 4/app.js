const { createApp } = Vue;

createApp({
    data() {
        return {
            currentEffect: 'highlight',
            userClass: '',
            isVisible: true,
            myStyle: {
                backgroundColor: 'gray'
            },
            progressBarWidth: 0
        };
    },
    methods: {
        startEffect() {
            setInterval(() => {
                this.currentEffect = this.currentEffect === 'highlight' ? 'shrink' : 'highlight';
            }, 1000);
        },
        startProgress() {
            this.progressBarWidth = 0;
            const interval = setInterval(() => {
                if (this.progressBarWidth >= 200) {
                    clearInterval(interval);
                } else {
                    this.progressBarWidth += 10;
                }
            }, 500);
        }
    }
}).mount("#exercise");