let myApp = new Vue({
    el:"#my-app",
    data:{
        fname:"",
        lname:"",
        changeName:"Asim"
    },
    methods:{

    },
    computed:{
        fullName:{
            //getter function of computed property 'fullName'
            get: function () {
                return this.fname+' '+this.lname;
            },
            set: function () {
                // console.log("in getter function")
                this.changeName = "update Asim"
            }
        }
    }
})
