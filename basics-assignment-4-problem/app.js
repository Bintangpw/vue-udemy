const {createApp,ref} = Vue

createApp({
  setup() {
    const inputClass=ref('');
    const paragraphIsVisible = ref(true);
    const inputBackgroundColor=ref('');
    return {
      inputClass, paragraphIsVisible, inputBackgroundColor
  };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === 'user1',
        user2: this.inputClass === 'user2',
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible
      };
    },
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
}).mount('#assignment');
