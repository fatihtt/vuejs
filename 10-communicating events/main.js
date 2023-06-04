const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            console.log("pushing", id);
            this.cart.push(id);
        },
        removeFromCart(id) {
            // when remove one element on each click
            // const arrayIndex = this.cart.indexOf(id);
            // if (arrayIndex > -1) this.cart.splice(arrayIndex, 1);

            // when remove all elements on each click
            while (this.cart.indexOf(id) > -1) {
                const arrayIndex = this.cart.indexOf(id);
                if (arrayIndex > -1) this.cart.splice(arrayIndex, 1);
            }
        }
    }
});