<template>
  <div>
    <active-user :username="user.username" :age="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "Bintang",
        age: 23,
      },
    };
  },
  methods: {
    setUserData(username, age) {
      this.user = {
        username: username,
        age: +age
      };
    }
  }
};
</script>


<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>