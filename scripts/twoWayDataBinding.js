let myApp = new Vue({
    el:'#my-app',
    data:{
        character: '',
        username: 'Asim',
        useremail: 'asim@email.com'
    },
    methods:{
        keypressFunction:function (event)
        {
            console.log(event);
            this.character = event.key;
        }
    }
});
