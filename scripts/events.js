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
        },
        mouseOverFunction:function (event) {
            console.log('Message is from mouse over event');
        },
        mouseOutFunction:function (event) {
            console.log('Mouse out function called');
        },
        keypressFunction:function () {
            console.log("Key Pressed");
        },
        keyupFunction:function () {
            console.log("Key Up");
        },
        keydownFunction:function () {
            console.log("Key Down");
        }

    }
});
