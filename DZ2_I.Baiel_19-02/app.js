var Bank = {
    balance: 10000,
    numberCheck:"4123456769587132",
    currencyAccount:"KG",
    department:{
        Name:"baiel",
        adress:"ul:" + " " +"ibraimova" + "57",
    },
};

var trafficlight = prompt ("введите цвет");
if (trafficlight === "red"){
    alert("stop");
}else if (trafficlight==="green"){
    alert("can ride");
}else if (trafficlight==="yellow"){
    alert("getting ready");
}else{
    alert("такого цвета нет");
}

var Card = {
   UNISTREAM:{ 
    Pan:"1456 2345 5690 0923",
    ExpiryDate:"02.05.2025",
    PrintName:"baiel"
   },
   GoldCrown:{ 
    Pan:"7896 1688 2345 0921",
    ExpiryDate:"02.05.2030",
    PrintName:"baiel"
   },
   RIA:{ 
    Pan:"0213 1182 1234 5132",
    ExpiryDate:"02.05.2035",
    PrintName:"baiel"
   },
   Contact:{ 
    Pan:"1231 9706 4637 1235",
    ExpiryDate:"02.05.2040",
    PrintName:"baiel"
   }
}
console.log(Card.UNISTREAM + "был переведен");
 