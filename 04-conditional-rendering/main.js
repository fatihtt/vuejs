const app = Vue.createApp({
    data() {
        return {
            product: {
                name: 'Socks',
                description: "Green socks with VueJS logo",
                imageUrl: "./assets/images/socks_green.jpg",
                imageDescription: "green socks",
                url: "https://google.com/search?q=green+socks",
                inStock: true,
                inventory: 10,
                onSale: true
            }
        }
    }
});