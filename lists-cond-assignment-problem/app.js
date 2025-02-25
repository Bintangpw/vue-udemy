const {createApp, ref} = Vue

createApp({
  data() {
    const enteredValue  = ref('')
    tasks = ([])
    taskListIsVisible = (true)
    
    return {
      enteredValue,tasks,taskListIsVisible
    };
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? 'Hide List' : 'Show List';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
    },
    deleteTask(index){
      this.tasks.splice(index,1);
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    }
  },
}).mount('#assignment');
