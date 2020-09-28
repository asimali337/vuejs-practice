let vueApp1 = new Vue({
    el:'#instanceOne',
    data:{
        title:'This title from instance 1',
    },
    methods: {
        commonFunction:function(){
            return "function called from instance 1"
        },
        makeRound:function (x) {
            return Math.round(x)
        }
    },
    computed:{

    }
})
//---------------------------------------------------------
let vueApp2 = new Vue({
    el:'#instanceTwo',
    data:{
        title:'This title from instance 2',
        titleFromInstance1:vueApp1.title,
        num1:20.02,
        num2:32.56
    },
    methods:{
        commonFunction:function(){
            return "function called from instance 1"
        },
        addTwoWholeNumbers: function (){
            return vueApp1.makeRound(this.num1) + vueApp1.makeRound(this.num2);
        }
    },
    computed:{

    }

})
