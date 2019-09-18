new Vue({
    el: '#app',
    data: {
        health: 100,
        gameIsRunning: false,

    },
    methods: {
        punch: function() {
            this.health -= 10;
            if (this.health <= 0) {
                this.gameIsRunning = false;
            }
        },
        restart: function() {
            this.gameIsRunning = true;
            this.health = 100;
        }
    },


});