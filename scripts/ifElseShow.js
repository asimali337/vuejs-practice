let app = new Vue({
    el:'#my-app',
    data:{
        isActive: true,
        counter:0
    },
    methods:{
        incrementByOne:function () {
            this.counter++;
        }
    }
})
