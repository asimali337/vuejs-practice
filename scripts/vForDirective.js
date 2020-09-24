let myApp = new Vue({
   el:'#wrapper',
   data:{
       students:[
           'student1','student2','student3','student4','student5'
       ],
       teachers:[
            {name:'Teacher 1',subject:'Subject 1',location:{street:'street 1', city:'city 1'}, hisStudents:['std 11','std 12','std 13','std 14','std 15']},
            {name:'Teacher 2',subject:'Subject 2',location:{street:'street 2', city:'city 2'}, hisStudents:['std 21','std 22','std 23','std 24','std 25']},
            {name:'Teacher 3',subject:'Subject 3',location:{street:'street 3', city:'city 3'}, hisStudents:['std 31','std 32','std 33','std 34','std 35']},
            {name:'Teacher 4',subject:'Subject 4',location:{street:'street 4', city:'city 4'}, hisStudents:['std 41','std 42','std 43','std 44','std 45']}
       ]
   },
    methods:{

    }
});
