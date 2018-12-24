var workmate1={
    name:'JSPang',
    age:33,
    sex:1,
    job:'前端',
    skill:{
        skillOne:'HTML+CSS',
        skillTwo:'JavaScript',
        skillThree:'PHP'
    },
    regeditTime:new Date()
};

var workmate2={
    name:'huanggua',
    age:18,
    sex:1,
    job:'java后台',
    skill:{
        skillOne:'mySqile',
        skillTwo:'javaEe',
        skillThree:'PHP'
    },
    regeditTime:new Date()
};

var workmate3={
    name:'MIMI',
    age:18,
    sex:1,
    job:'UI',
    skill:{
        skillOne:'photoShop',
        skillTwo:'UI',
        skillThree:'ppt'
    },
    regeditTime:new Date()
};

var db =connect('company');
var workmateArray=[workmate1,workmate2,workmate3];
db.workmate.insert(workmateArray);
print('[SUCCESS:] The data was insert success')
