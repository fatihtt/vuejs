app.component("review-form", {
    template:
    /*html*/
    `
        <form class="form-review" @submit.prevent="onSubmit">
            <h3>Leave a review</h3>
            <label for="name">Name:</label>
            <input id="name" v-model="name">

            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>

            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <label>Would you recommend this product?</label>
            <div class="div-radio">
                <input id="recommendYes" type="radio" value="yes" v-model="recommend">
                <label for="recommendYes">Yes</label>
            </div>
            <div class="div-radio">
                <input id="recommendNo" type="radio" value="no" v-model="recommend">
                <label for="recommendNo">No</label>
            </div>

            <input class="button-9" type="submit" value="Submit">
        </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend:'',
        }
    },
    methods: {
        onSubmit() {
            if (this.name === "" || this.review === "" || this.rating === null || this.recommend === "") {
                alert("Please fill the form completely!");
                return;
            }

            let ProductReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            this.$emit('review-submitted', ProductReview)

            this.name = "";
            this.review = "";
            this.rating = null;
            this.recommend = "";
        }
    }
})