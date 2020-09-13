var myApp = new Vue({
    el:'#my-app',
    data:{
        counter: 0,
        x:0,
        y:0
    },
    methods:{
        increment: function (inc) {
            this.counter = this.counter + inc;
        },
        decrement: function (decr) {
            this.counter = this.counter - decr;
        },
        moveFunction:function (event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }

    }
});
