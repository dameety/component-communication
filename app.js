Vue.component('pin', {

    template: '<input v-model="pin" @blur="checkValidity">',

    data () {
        return {
            pin: ""
        }
    },

    methods: {

        checkValidity () {
            if(this.pin !== "12345670") {
                this.$emit('incorrect-pin');
            }
            //make ajax request  OR
            //navigate to next page OR 
            //you can do whatever...
        }

    }
})

new Vue ({

    el: '#root',

    methods: {
        alertUser () {
            alert('You typed a wrong pin');
        }
    }

})
