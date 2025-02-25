<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="courseData.goalIsVisible">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import {reactive, ref} from 'vue';

export default {
  setup(){
    // separate refs
    // let goalIsVisible = ref(false);
    // const courseGoal= ref("Finish Vue Course!");

    //ref object
    // const courseData = ref({
    //     goalIsVisible : false,
    //     courseGoal: "Finish Vue Course!"
    // })

    //reactive object
    const courseData = reactive({
        goalIsVisible : false,
        courseGoal: "Finish Vue Course!"
    })

    function toggleGoalVisibility(){
      // goalIsVisible.value=!goalIsVisible.value
      //ref object
      // courseData.value.goalIsVisible = !courseData.value.goalIsVisible
      //reactive object
      courseData.goalIsVisible = !courseData.goalIsVisible
    }

    return{goal:courseData.courseGoal, courseData, toggleGoalVisibility};
  },
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>