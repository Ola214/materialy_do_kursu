new Vue({
    el: '#app',
    data: {
        firstName: 'John',
        lastName: 'Kowalski'
    },
    computed: {
        fixedName: function() {
            return this.firstName.charAt(0).toUpperCase() + this.firstName.substring(1);
        },
        // fullName: function() {
        //     return this.firstName + ' ' + this.lastName;
        // }
        fullName: {
            get: function() {
                return this.firstName + ' ' + this.lastName;
            },
            set: function(newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    }
})