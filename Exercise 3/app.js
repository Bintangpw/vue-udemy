const { createApp} = Vue;

createApp({
    data() {
        return {
            value: 0,
            timeout: null
        };
    },
    computed: {
        result() {
            if(this.value>37){
            	return 'too much!';
            } else if (this.value==37){
            	return 'done';
            } else {
            	return 'not there yet!';
            }
        }
    },
    watch: {
        result(newValue) {
            if (newValue === 'done') {
                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.value = 0;
                }, 5000);
            }
        }
    }
}).mount("#exercise");