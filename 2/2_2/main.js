new Vue({
    el: '#app',
    data: {
        firstName: 'Mateusz',
        lastName: 'Kowalski',
        rawHtml: '<h1 style=\'color:magenta\'>Witaj</h1>'
    },
    methods: {
        changeName: function(event) {
            this.firstName = event.target.value;
        },
        upperFirstName: function() {
            return this.firstName.toUpperCase();
        }
    }
})