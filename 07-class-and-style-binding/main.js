const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: {
                name: 'Socks',
                description: "Green socks with VueJS logo",
                imageUrl: "./assets/images/socks_green.jpg",
                imageDescription: "socks",
                inStock: false,
                inventory: 10,
                onSale: true,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    {
                        id: "2234", color: "green",
                        imageUrl: "./assets/images/socks_green.jpg"
                    },
                    {
                        id:"2235", color: "blue",
                        imageUrl: "./assets/images/socks_blue.jpg"
                    }
                ]
            }
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        showImage(imageUrl) {
            this.product.imageUrl = imageUrl;
        },
        removeFromCart() {
            if (this.cart > 0) this.cart -= 1;
        }
    }
});