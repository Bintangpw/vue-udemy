const {createApp, ref} = Vue;

createApp({
    data() {
        const number = 0
      return {
        number
      };
    },
    computed: {
      result() {
        if (this.number < 37) {
          return 'Not there yet!';
        } else if (this.number === 37) {
          return this.number;
        } else {
          return 'Too much!';
        }
      }
    },
    watch: {
      result() {
        console.log('Watcher executing...');
        const that = this;
        setTimeout(function() {
          that.number = 0;
        }, 5000);
      }
    },
    methods: {
      addNum(num) {
        this.number = this.number + num;
      }
    }
  }).mount('#assignment');