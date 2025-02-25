const {createApp, ref} = Vue

createApp({
    setup(){
        const name= ref("Bintang")
        age=23
        inFive = ref(`My age in five years = ${age + 5}`)
        image="https://upload.wikimedia.org/wikipedia/en/c/c7/Chill_guy_original_artwork.jpg";
        return{
            name, age, inFive, image
        }
    },
    methods: {
        randomNum() {
            return Math.random();
        }
    }
    
}).mount('#assignment');