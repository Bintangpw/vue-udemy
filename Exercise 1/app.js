const {createApp,ref} = Vue

createApp({
    setup() {
        const name= ref("Bintang")
        age=23
        image= "https://upload.wikimedia.org/wikipedia/en/c/c7/Chill_guy_original_artwork.jpg"
        return {
            name,age,image
        };
    },
    methods: {
        random() {
            return Math.random();
        }
    }
}).mount("#exercise");