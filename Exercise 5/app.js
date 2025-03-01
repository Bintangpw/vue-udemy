const { createApp } = Vue;

createApp({
  data() {
    return {
      isShown: true,
      array: ['Table', 'Chair', 'Fork', 'Spoon'],
      myObject: {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkiens',
        books: '3'
      },
      testData: {
        name: 'TESTOBJECT',
        id: 10,
        data: [1.67, 1.33, 0.98, 2.21]
      }
    };
  }
}).mount("#exercise");