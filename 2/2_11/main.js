new Vue({
    el: '#app',
    data:{
        isBackgroundCyan: false,
        isColorRed: 'colorRed',
        fontOrBackground: false
    },
    computed: {
        classObject: function() {
            return {
                colorRed: this.isColorRed, 
                'background-cyan' : this.isBackgroundCyan
            }
        }
    }
})