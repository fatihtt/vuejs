app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div class="div-product-image">
                <img :src="image" :alt="imageDescription">
            </div>
            <div class="div-product">
                <div class="div-product-name">
                    {{ title }}
                </div>
                <div>
                    {{ sale }}
                </div>
                <h2>Components and Props</h2>
                <div class="div-stock">
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                </div>
                <div class="div-shipping">
                    Shipping: {{ shipping }}
                </div>
                <div class="div-details">
                    <product-details :details="details"></product-details>
                </div>
                <div class="div-variants">
                    <h4>Variants:</h4>
                    <div class="div-variant color-circle" v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index);" :style="{ backgroundColor: variant.color}"></div>
                </div>
                <div class="div-button">
                    <button :disabled="!inStock" class="button-9" @click="addToCart"  :class="{ disabledButton: !inStock }">Add to Cart</button>
                </div>
                <div class="div-button">
                    <button :disabled="!inStock" class="button-9" @click="removeFromCart"  :class="{ disabledButton: !inStock }">Remove from Cart</button>
                </div>
            </div>
    `,
    data() {
        return {
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
                    quantity: 10
                }
            ]
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.name
        },
        image() {
            return this.variants[this.selectedVariant].imageUrl
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            return this.onSale ? this.brand + ' ' + this.name + ' is on sale!' : ''
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})