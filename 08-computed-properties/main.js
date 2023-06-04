const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: {
                name: "Socks",
                brand: "Vue Mastery",
                description: "Green socks with VueJS logo",
                selectedVariant: 0,
                imageDescription: "socks",
                onSale: true,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    {
                        id: "2234", color: "green",
                        imageUrl: "./assets/images/socks_green.jpg",
                        quantity: 50
                    },
                    {
                        id:"2235", color: "blue",
                        imageUrl: "./assets/images/socks_blue.jpg",
                        quantity: 0
                    }
                ]
            }
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateVariant(index) {
            this.product.selectedVariant = index;
        },
        removeFromCart() {
            if (this.cart > 0) this.cart -= 1;
        }
    },
    computed: {
        title() {
            return this.product.brand + ' ' + this.product.name
        },
        image() {
            return this.product.variants[this.product.selectedVariant].imageUrl
        },
        inStock() {
            return this.product.variants[this.product.selectedVariant].quantity
        },
        sale() {
            return this.product.onSale ? this.product.brand + ' ' + this.product.name + ' is on sale!' : ''
        }
    }
});