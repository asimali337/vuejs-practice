let myApp = new Vue({
    el: "#my-app",
    data: {

    },
    methods: {
        btnSubmit:function () {
            console.log(this.$refs)
            console.log(this.$refs.txtName.value);
            console.log(this.$refs.txtEmail.value);
            console.log(this.$refs.para.innerHTML);

        }
    },
});
