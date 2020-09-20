let myApp = new Vue({
    el:'#my-app',
    data:{
        isActive : false
    },
    methods:{
        toggleClass:function () {
            this.isActive = ! this.isActive;
        }
    }

});
