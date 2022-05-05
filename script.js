window.onload=function(){
keyler();
var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var button3=document.getElementById("button3");
var button4=document.getElementById("button4");
var button5=document.getElementById("button5");
var button6=document.getElementById("button6");
var button7=document.getElementById("button7");
var button8=document.getElementById("button8");
var button9=document.getElementById("button9");
var button0=document.getElementById("button0");


var values=document.getElementById("valus1");
var values1=document.getElementById("valus2");
var values2=document.getElementById("valus3");
var values3=document.getElementById("valus4");
var values4=document.getElementById("valus5");
var values5=document.getElementById("valus66");
var values54=document.getElementById("valus64");

var values6=document.getElementById("button_r");
var inp1=document.querySelector(".out2");
var inp=document.querySelector(".out3");


var take='';
var result='' ;
var result1='' ;
var res='';
var check=0;
var checker=0;
var fil=0;
var fil1=0;

console.log(take);

function keyler(){
   
    document.addEventListener('keydown', function (event) {
        if(checker==0){
        if (event.key === '0') {
            result = result + "0";
            console.log(result);
            inp.innerHTML=result;
res='';
    
        }
        if (event.key === '1') {
            result = result + "1";
            console.log(result);
    inp.innerHTML=result;
res='';
    
        }
        if (event.key === '2') {
            result = result + "2";
            console.log(result);
    inp.innerHTML=result;
res='';
 
    
        }
        if (event.key === '3') {
            result = result + "3";
            console.log(result);
    inp.innerHTML=result;
res='';
    
        }
        if (event.key === '4') {
            result = result + "4";
            console.log(result);
    inp.innerHTML=result;
res='';
    
        }
        if (event.key === '5') {
            result = result + "5";
            console.log(result);
    inp.innerHTML=result;
res='';
    
        }
        if (event.key === '6') {
            result = result + "6";
            console.log(result);
    inp.innerHTML=result;
res='';
    
        }
        if (event.key === '7') {
            result = result + "7";
            console.log(result);
    inp.innerHTML=result;
res='';
    
        }
        if (event.key === '8') {
            result = result + "8";
            console.log(result);
    inp.innerHTML=result;
res='';
    
        }
        if (event.key === '9') {
            result = result + "9";
            console.log(result);
    inp.innerHTML=result;
res='';
    
        }
        if (event.key === '.') {
            result = result + ".";
            console.log(result);
    inp.innerHTML=result;
res='';
    
        }
    }
        if (event.key === '-') {   
        inp1.innerHTML=result+" - ";
        checker=1;
check=1;
        }
        if (event.key === '+') {
            inp1.innerHTML=result+" + ";
            checker=1;
            check=2;

        }
        if (event.key === '/') {
              
            inp1.innerHTML=result+" / ";
            checker=1;
check=3;

        }
        if (event.key === '*') {
                    
            inp1.innerHTML=result+" * ";
    checker=1;
check=4;

        }
if(checker==1){
    if (event.key === '0') {
        result1 = result1 + "0";
        console.log(result1);
        inp.innerHTML=result1;
        res='';

    }
    if (event.key === '1') {
        result1 = result1 + "1";
        console.log(result1);
inp.innerHTML=result1;
res='';

    }
    if (event.key === '2') {
        result1 = result1 + "2";
     
inp.innerHTML=result1;

res='';

    }
    if (event.key === '3') {
        result1 = result1 + "3";
        console.log(result);
inp.innerHTML=result1;
res='';

    }
    if (event.key === '4') {
        result1 = result1 + "4";
        console.log(result1);
inp.innerHTML=result1;
res='';

    }
    if (event.key === '5') {
        result1 = result1 + "5";
        console.log(result1);
inp.innerHTML=result1;
res='';

    }
    if (event.key === '6') {
        result1 = result1 + "6";
        console.log(result1);
inp.innerHTML=result1;
res='';

    }
    if (event.key === '7') {
        result1 = result1 + "7";
        console.log(result1);
inp.innerHTML=result1;
res='';

    }
    if (event.key === '8') {
        result1 = result1 + "8";
        console.log(result1);
inp.innerHTML=result1;
res='';

    }
    if (event.key === '9') {
        result1 = result1 + "9";
        console.log(result1);
inp.innerHTML=result1;
res='';
    }
    if (event.key === '.') {
        result1 = result1 + ".";
        console.log(result1);
inp.innerHTML=result1;
res='';
    }
}
       
          
    
        if (event.key === '='&&check==1) {

            if (event.key === '-') {   
                inp1.innerHTML=result+" - ";
                checker=1;
        check=1;
res='';

                }

                if (event.key === '+') {
                    inp1.innerHTML=result+" + ";
                    checker=1;
                    check=2;
res='';
        
                }
                if (event.key === '/') {
                      
                    inp1.innerHTML=result+" / ";
                    checker=1;
        check=3;
res='';
        
                }
                if (event.key === '*') {
                            
                    inp1.innerHTML=result+" * ";
                    checker=1;
                    check=2;
res='';

                }
          
                
        if (event.key === '='&&check==1) {
  
            res=result - result1;
            inp.innerHTML=res;
    
            inp1.innerHTML='';

            result='';
            result1='';
            result=res;



        }
    }


        if (event.key === '='&&check==2) {
            res= +result+ + result1;
           inp.innerHTML=res;
    
            inp1.innerHTML='';

            result='';
            result1='';
            result=res;

        }
        if (event.key === '='&&check==3) {
            res= result / result1;
            inp.innerHTML=res;
    
            inp1.innerHTML='';

            result='';
            result1='';
            result=res;

        }
        if (event.key === '='&&check==4) {
  
             res=result * result1;
            inp.innerHTML=res;
    
            inp1.innerHTML='';

            result='';
            result1='';
            result=res;



        }
    
    });

}
function first(){
    result = result + this.value;
    inp.innerHTML=result;
}
function first12(){
    result = result + ".";
    inp.innerHTML=result;
}
if(fil==0){

 
    values54.onclick=first12;
fil=1;
}
else if(fil==1){
    values54.onclick=null;

}
function first1(){
    result1 = result1 + this.value;
    inp.innerHTML=result1;
 
}



function plus(){

    inp1.innerHTML=result+ " + ";
    inp.innerHTML='';

    button1.onclick=first1;
    button2.onclick=first1;
    button3.onclick=first1;
    button4.onclick=first1;
    button5.onclick=first1;
    button6.onclick=first1;
    button7.onclick=first1;
    button8.onclick=first1;
    button9.onclick=first1;
    button0.onclick=first1;
    values6.onclick=resul;

}
function minus(){

    inp1.innerHTML=result+ " - ";
    inp.innerHTML='';

    button1.onclick=first1;
    button2.onclick=first1;
    button3.onclick=first1;
    button4.onclick=first1;
    button5.onclick=first1;
    button6.onclick=first1;
    button7.onclick=first1;
    button8.onclick=first1;
    button9.onclick=first1;
    button0.onclick=first1;
    values6.onclick=resul1;

}
function umno(){

    inp1.innerHTML=result+ " * ";
    inp.innerHTML='';
 
    button1.onclick=first1;
    button2.onclick=first1;
    button3.onclick=first1;
    button4.onclick=first1;
    button5.onclick=first1;
    button6.onclick=first1;
    button7.onclick=first1;
    button8.onclick=first1;
    button9.onclick=first1;
    button0.onclick=first1;
    values6.onclick=resul3;

}
function pro1(){
    console.log("hi");
    inp1.innerHTML=result+ " % ";
    inp.innerHTML='';
  
 
    button1.onclick=first1;
    button2.onclick=first1;
    button3.onclick=first1;
    button4.onclick=first1;
    button5.onclick=first1;
    button6.onclick=first1;
    button7.onclick=first1;
    button8.onclick=first1;
    button9.onclick=first1;
    button0.onclick=first1;
    values6.onclick=resul5;

}

function del(){

    inp1.innerHTML=result+ " / ";
    inp.innerHTML='';
 

    values6.onclick=resul2;

    button1.onclick=first1;
    button2.onclick=first1;
    button3.onclick=first1;
    button4.onclick=first1;
    button5.onclick=first1;
    button6.onclick=first1;
    button7.onclick=first1;
    button8.onclick=first1;
    button9.onclick=first1;
    button0.onclick=first1;
  
}



function resul(){
inp.innerHTML='';
var lol=inp1.innerHTML= +result1+ +result;
result='';
result1='';
result=lol;

}
function resul1(){
    inp.innerHTML='';
    var lol=inp1.innerHTML= result - result1;
    result='';
    result1='';
    result=lol;
    
    }
    function resul2(){
        inp.innerHTML='';
        var lol=inp1.innerHTML= result / result1;
        result='';
        result1='';
        result=lol;
        
        }
        function resul3(){
            inp.innerHTML='';
            var lol=inp1.innerHTML= result1 * result;
            result='';
            result1='';
            result=lol;
            
            
            }
            function resul5(){
                inp.innerHTML='';
                var lol=result1 /100*result;
                inp1.innerHTML=lol;
                result='';
                result1='';
                result=lol;
                console.log("hi");
                
                }

  
        
function clear(){
    inp.innerHTML='';
    inp1.innerHTML= '';
    result='';
    result1='';
    check=0;
    lol='';
    res='';
    checker=0;
    button1.onclick=first;
button2.onclick=first;
button3.onclick=first;
button4.onclick=first;
button5.onclick=first;
button6.onclick=first;
button7.onclick=first;
button8.onclick=first;
button9.onclick=first;
button0.onclick=first;
values2.onclick=del;
values3.onclick=plus;
values1.onclick=minus;
values5.onclick=pro1;


values.onclick=clear;
values4.onclick=umno;
    }

button1.onclick=first;
button2.onclick=first;
button3.onclick=first;
button4.onclick=first;
button5.onclick=first;
button6.onclick=first;
button7.onclick=first;
button8.onclick=first;
button9.onclick=first;
button0.onclick=first;
values2.onclick=del;
values3.onclick=plus;
values1.onclick=minus;


values.onclick=clear;
values4.onclick=umno;
values5.onclick=pro1;


}
