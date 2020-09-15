let myApp = new Vue({
    el:"#my-app",
    data:{
        counter: 0
    },
    methods:{
        incrementByOne:function () {
            this.counter++;
            //alert("aa");
        },
        submitFunction:function (event) {
            console.log(event)
        },
        parentFunction:function () {
            console.log("parent called....")
        },
        childFunction:function () {
            console.log("child called....")
        }
    }
});
