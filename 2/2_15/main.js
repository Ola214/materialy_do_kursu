new Vue({
    el: '#app',
    data:{
        fruits: [
            "Jabłko",
            "Brzoskwinia",
            "Pomarańcza"
        ],
        character: {
            name: 'Thomas',
            age: 19,
            supperhero: 'Spiderman'
        }
    },
    computed:{
        filteredFruits: function() {
            return this.fruits.filter(function(v) {
                return v.length >= 7;
            });
        }
    }
})