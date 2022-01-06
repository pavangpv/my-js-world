
// innner text 
//document.write
//window.alert
//console.log
function clickMe(){
    //document.getElementsByClassName('gridchild1')[0].innerText = 'Hi Js'
    //document.getElementsByClassName('gridchild1')[0].style.backgroundColor='red';
   // window.alert("alert message")
   // console.log("click me function called")
   // window.print();
   // let a = 4;
   // let b = 6;
    //let c = (a+b);
   // console.log(c);
}

function doSomthing(){
    let  a;
    let b;
    a = 5;

    b = 6;
    var c;
    // equal sign '=' is called  assignment
   // arthemetic operators
    c = 11;
    let product = c*a;
    let sum = c+a;
    let difference = c-a;
    let multiplier = c/a;

    //let b =1;
    //b +=1;
    console.log(product,sum,difference,multiplier)
// expresion 
let expresionVal = 5*b+sum-product;
console.log(expresionVal)

 firstName = "pavan";
let secondName = "kalyan";
 //string concaterating
 let resulstString = firstName+" "+secondName;
 console.log(resulstString);
 
}
function variables(){
   // var name;//declaring
   // name = 'sidhu'//assigning
   var name = "sidhu";
    console.log(name)
    var firstName ="FirstName",
    secondName ="SecondName",
    _class=10;
    console.log(firstName,secondName,_class);
    var mySpecialVar ="special";
    var mySpecialVar;
    console.log(mySpecialVar)
}
variables();
//doSomthing();
/*let   keyword                                             
   1. canot be re declared
   invalid
   let a = 5;
   let a = 6 ;

    valid
    var b = 6; 
    var b = 5;

    2. Blocked scope {
        let x = 2;
    }
    let x = 3;
    {
        let x = 5;
    }
    For var
    {
            var x = 2;
    }
    var x = 3;
    {
        var x = 5;
    }
    3. cannot be hoisted
    function abc (){
        carName = 'abc';
        let x = 5*3;
        let y = 5*7;
        let z = 5*10;
        let carName;
    }
    */

    /*
    const keyword
    1.Blocked scope {
        const x = 2;
    }
    const x = 3;
    {
        const x = 5;
    }
    2. must be intialised at the time of declaration
    valid:
    const abc = 10;
     invalid :
     const abc;
     abc = 30;
valid:
let def;
def = 40;
    */