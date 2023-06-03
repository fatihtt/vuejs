const app = Vue.createApp({
    data() {
        return {
            product: {
                name: 'Socks',
                description: "Green socks with VueJS logo",
                image_url: "./assets/images/socks_green.jpg",
                image_description: "green socks",
                url: "https://google.com/search?q=green+socks"
            }
        }
    }
});