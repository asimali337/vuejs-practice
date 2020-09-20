let myApp = new Vue({
    el:'#my-app',
    data:{
        fname:'',
        lname:'',
        meter:'',
        english:0,
        math:0,
        science:0
    },
    methods:{
        runMe:function () {
            console.log("Method is called")
            return "function returned with some data";
        }
    },
    computed:{
        getFullName:function () {
            return this.fname+" "+this.lname;
        },
        convertToCentimeter:function () {
            return this.meter*100;
        },
        totalSubjectsMarks:function () {
            if(this.english == '')
            {
                this.english = 0;
            }
            if(this.math == '')
            {
                this.math = 0;
            }
            if(this.science == '')
            {
                this.science = 0;
            }
            return parseInt(this.english) + parseInt(this.math) + parseInt(this.science);
        },
        totalSubjectsAverage:function () {
            if(this.english == '')
            {
                this.english = 0;
            }
            if(this.math == '')
            {
                this.math = 0;
            }
            if(this.science == '')
            {
                this.science = 0;
            }
            return ((parseInt(this.english) + parseInt(this.math) + parseInt(this.science))/3).toFixed(2);
        }

    }
});
