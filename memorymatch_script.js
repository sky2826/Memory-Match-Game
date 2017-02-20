var ready=true;
var time=0;
var start=true;
function starttimer(){
    if(start){
        interval=setInterval(function(){
        time++;
        document.getElementById("timer").innerHTML="time : "+time;
    },1000);
    }
    start=false;
}

var count=0;
var clickarray=[];
function reveal(a){
    document.getElementById(a.id).innerHTML=a.value;
    a.completed=true;
    a.style.backgroundColor="red";
}
function hide(a){
    a.style.backgroundColor="blue";
    a.innerHTML="";
    a.completed=false;
}
function  complete(a){
    a.style.backgroundColor="purple";
}

var new_array= new Array(1,1,2,2,3,3,4,4,5);
new_array.sort(function(){
    return Math.random(0,1000000000)-Math.random(0,10000000000);
})
function check(){
    if(clickarray[0].value==clickarray[1].value){
        complete(clickarray[0])
        complete(clickarray[1])
        clickarray=[];
        count+=2;
        if(count==8){
            setTimeout(function() {
            clearInterval(interval);
            window.alert("won in time: "+time);},500);
        }
    }
    else{
        
        document.getElementById("table").style.border="5px red solid";
        setTimeout(function(){document.getElementById("table").style.border="5px black solid";
        hide(clickarray[0]);
        hide(clickarray[1]);
        clickarray=[];
        },500);

}
}
function setup(){
    starttimer();
    for (var i=0;i<9;i++){
        var temp=document.getElementById(i);
        temp.completed=false;
        temp.clicked=false;
        temp.value=new_array[i];
           temp.onmouseenter =function(){
        if(this.completed==false && this.clicked==false){
            this.style.background="orange";
        }
    };
    temp.onmouseleave=function(){
        if(this.completed==false &&  this.clicked==false){
            this.style.backgroundColor="blue";
        }
    };
    temp.onclick=function(){
        if(this.completed==false && this.clicked==false){
            clickarray.push(this);
            reveal(this);
            if(clickarray.length==2){
                check();
            }

        }
    }
    }

 
}
function reload(){
    location.reload();
}
