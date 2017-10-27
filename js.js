var bgImage = 0;
var titleName = 0;
var desName = 0;
var textColor = 0;
var srcStr = "";

function expandMenu(){
    document.getElementById("control").style.bottom = "0px";
}
document.getElementById("menu").addEventListener("click", function(){
    expandMenu();
});

document.getElementById("BGinput").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        document.getElementById(pointToDiv()).style.backgroundImage = "url("+changeBG()+")";
        document.getElementById(pointToDiv()).style.backgroundSize = "cover";
    }
});

document.getElementById("titleInput").addEventListener("keyup", function(ev){
    
        document.getElementById(pointToTitle()).innerHTML = changeTitle();

   
});

document.getElementById("desInput").addEventListener("keyup", function(ev){
    
        document.getElementById(pointToDes()).innerHTML = changeDescription();
   
});

document.getElementById("colorInput").addEventListener("change", function(){
    document.getElementById(pointToTitle()).style.color = changeColor();
   document.getElementById(pointToTitle()).style.borderBottomColor = changeColor(); document.getElementById(pointToDes()).style.color = changeColor();
});

document.getElementById("addStuff").addEventListener("click", function(){
    newStoryboard();
});
function changeColor(){
    textColor = document.getElementById("colorInput").value;
    return textColor
}
function changeDescription(){
    desName = document.getElementById("desInput").value;
    return desName
}
function changeTitle(){
    titleName = document.getElementById("titleInput").value;
    return titleName
}

var goup = 0;
var goleft = 0;
var expand = 300;
function up(){
    goup -= 10;
    document.getElementById("BG").style.backgroundPosition = goleft+"px "+goup+"px";
}
function down(){
    goup += 10;
    document.getElementById("BG").style.backgroundPosition = goleft+"px "+goup+"px";
}
function left(){
    goleft -= 10;
    document.getElementById("BG").style.backgroundPosition = goleft+"px "+goup+"px";
}

function right(){
    goleft += 10;
    document.getElementById("BG").style.backgroundPosition = goleft+"px "+goup+"px";
}

function bigger(){
    
    expand += 10;
    document.getElementById("BG").style.height = expand+"px";
}
function smaller(){
    
    expand -= 10;
    document.getElementById("BG").style.height = expand+"px";
}
var keyNumber = 0;
function moveBG(keyNumber){
  
    
    if (keyNumber == 38){
        up();
    } else if (keyNumber == 40){
        down();
    } else if (keyNumber == 37){
        left();
    } else if (keyNumber == 39){
        right();
    } else if (keyNumber == 107){
        bigger();
    } else if (keyNumber == 109){
        smaller();
    }  
}
document.body.addEventListener("keyup", function(ev){
    console.log(ev.keyCode);
    keyNumber = ev.keyCode;
    moveBG(keyNumber);
});

    
function changeBG(){
 
        var val = document.getElementById("BGinput").value;
        x = val.indexOf("epic")
        if (val == "horse"){
            srcStr = "img/bg1.jpg";
        } else if(val == "night"){
            srcStr = "img/bg2.jpg";

        } else if (val == "mountain"){
            srcStr = "img/bg3.jpg";
        } else if (x >= 0){
            srcStr = "img/bg4.jpg";
        } else {
            srcStr = val;
    
        }return srcStr
}


function newStoryboard(){
    var newDiv = document.createElement("div");
    var newTitle = document.createElement("div");
    var newDes = document.createElement("div");
   newDiv.id = "divClass"; 
    newDiv.style.height = "300px";
   newDiv.appendChild(newTitle);
    newDiv.appendChild(newDes); document.getElementById("strapped").appendChild(newDiv);
    
    newDiv.style.textAlign = "left";
    
    newTitle.className = "titleTed";
    newDes.className = "desTed";
    
    
    newDiv.style.backgroundImage = "url("+srcStr+")";
    
    newTitle.innerHTML = document.getElementById("titleDad").innerHTML;
    newDes.innerHTML = document.getElementById("descriptionDad").innerHTML;
    newTitle.style.cssText = "font-size: 20px;left:10%;position:absolute;top:10%;border-bottom:2px solid grey;";
    newDes.style.cssText = "left:10%;position:absolute;top:20%;";
    
    newDiv.style.display = "inline-block";
    
    newDiv.className = "col-12 col-sm-6 col-md-4 col-lg-3";
}
var exists = "BG";
function pointToDiv(){
   if (document.querySelector('#divClass') == null){
        exists = "BG";
        
        
    } else{
        exists = "divClass";
        
    }return exists
        
}

function pointToTitle(){
    
    if (document.querySelector('#divClass') == null){
        exists = "BG";
        
        
    } else{
        exists = "divClass";
        
        
    }return exists
        
}
function pointToDes(){
    if (document.querySelector('#divClass') == null){
        exists = "BG";
        
        
    } else{
        exists = "divClass";
        
    }return exists
        
}