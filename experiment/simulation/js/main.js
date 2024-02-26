//Your JavaScript goes in here
var enableButton=document.getElementById("enable");
var purzeButton=document.getElementById("purze")
var valvePositioning = document.querySelector("#flow-rate-slider")
var svg=document.getElementById("Layer_1");
var weightSelection = document.getElementById("weightSelect")
var count=0
window.appData = window.appData || {};
window.appData.powerFlag = false;

// get the id for the flow of water
var w1=document.getElementById("Water_1")
var w2=document.getElementById("Water_2_00000178177592295888132300000003812885317886448053_")
var w3=document.getElementById("Water_3")
var w4=document.getElementById("Water_4_00000018221326492914578470000014473808141724045220_")
var w5=document.getElementById("Water_5_00000121246892066337760400000013494994064657416380_")
var w6=document.getElementById("Water_6_00000168117311549382392820000000397660189640725679_")
var w7=document.getElementById("Water_8_00000181053212070445114170000008715850457176008092_")
var w8 = document.getElementById("Water_7_00000023989809500161872000000016802065931885833653_")
var w9 = document.getElementById("Water_8")
var vr = document.getElementById("Verturimeter_Water_Right")
var mwl = document.getElementById("Verturimeter_Water_Left_00000035524620157501483550000011411495042354387355_")
var vl = document.getElementById("Water_4_00000046320982811315112380000003719977335309594753_")
var vt = document.getElementById("Verturimeter_Water_Left")
var mwr = document.getElementById("Verturimeter_Water_Right_00000068643826572147975590000011604526973254985363_")
var sW2=document.getElementById("Main_Jet")
var turbine = document.getElementById("turbine")
var turbineWater = document.getElementById("turbine-water")
var rpmText = document.getElementById("rpm-text")
var w1Text = document.getElementById("w1-text")
var w2Text = document.getElementById("w2-text")
var p1Text = document.getElementById("p1-text")
var p2Text = document.getElementById("p2-text")
var h1 = document.getElementById("Handle_P1")
var h2 = document.getElementById("Handle_P2")
var h3 = document.getElementById("Handle_P3")
var h4 = document.getElementById("Handle_P4")
var h5 = document.getElementById("Handle_P5")

function power(){
    if(count==0){
        enableButton.style.backgroundColor="#4cae4c"
        document.getElementById("steps").innerHTML="Please wait until the water reaches the Flow Rate Valve."
        enableButton.textContent = "POWER OFF"
        count=1
        waterFlow1()
    }else{
        if(!window.appData.powerFlag){
            alert("Please complete the experiment to turn power off!");
            count=1
        }else{
            location.reload()
        }
    }
}

function waterFlow1(){
    w1.style.opacity="1"
    var currentwidth = parseFloat(w1.getAttribute("width"))
    if (currentwidth < 140.1) {
        currentwidth += 3;
        w1.setAttribute("width", currentwidth);
        setTimeout(waterFlow1, 100); 
    }
    waterFlow2()
}

function waterFlow2(){
    w2.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "22.6");
    animateElement.setAttribute("dur", "0.5s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    w2.appendChild(animateElement)
    animateElement.beginElement();

    setTimeout(function(){
        waterFlow3()
    },500);
}
function waterFlow3(){
    w3.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "230");
    animateElement.setAttribute("dur", "3s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");

    w3.appendChild(animateElement)

    animateElement.beginElement(); 
    setTimeout(function(){
        purzeButton.disabled = false;
        document.getElementById("steps").innerHTML = "Click On Flow Valve On."
    },8000);
}
function waterFlow4(){
    w4.setAttribute("opacity", "1")
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "height");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "191.7");
    animateElement.setAttribute("dur", "2s");
    animateElement.setAttribute("begin", "0s");
    animateElement.setAttribute("fill","freeze");
    w4.appendChild(animateElement)
    animateElement.beginElement();
    setTimeout(function(){
    waterFlow5()
    },2000);
}
function purzeAction(){
    waterFlow4()   
    purzeButton.disabled= true;
}
function waterFlow5(){
    w5.setAttribute("opacity", "1")
    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "78.7");
    animateElement.setAttribute("dur", "1.5s");
    animateElement.setAttribute("fill","freeze");
    w5.appendChild(animateElement)
    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "989.2");
    animateX.setAttribute("to", "910.5");
    animateX.setAttribute("dur", "1.5s");
    animateX.setAttribute("fill","freeze");

    w5.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
        waterFlowmr()
        vr.setAttribute("opacity","1")
        vt.setAttribute("opacity","1")
        waterFlowml()
        vl.setAttribute("opacity","1")
        waterFlow6()    
    }, 1500);
    
}

function waterFlow6(){
    w6.setAttribute("opacity", "1")

    const animateElement = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateElement.setAttribute("attributeName", "width");
    animateElement.setAttribute("from", "0");
    animateElement.setAttribute("to", "447.6");
    animateElement.setAttribute("dur", "3s");
    animateElement.setAttribute("fill","freeze");

    w6.appendChild(animateElement)

    const animateX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animateX.setAttribute("attributeName", "x");
    animateX.setAttribute("from", "698.9");
    animateX.setAttribute("to", "251.3");
    animateX.setAttribute("dur", "3s");
    animateX.setAttribute("fill","freeze");

    w6.appendChild(animateX)

    animateElement.beginElement();
    animateX.beginElement();

    setTimeout(function() {
    waterFlow7()
    }, 3000);
    
}
function waterFlow7(){
    var currentHeight = parseFloat(w7.getAttribute("height"))
        if (currentHeight < 185.4) {
            currentHeight += 3;
            w7.setAttribute("height", currentHeight);
            setTimeout(waterFlow7, 10); 
        }
        setTimeout(function() {
            waterFlow8()
            document.getElementById("steps").innerHTML = "Select the brake weight value of 5 kg for the first reading."
        }, 1000);
}
function waterFlow8(){
    sW2.setAttribute("opacity","1")
    var currentwidth = parseFloat(sW2.getAttribute("width"))
        if (currentwidth < 97.4) {
            currentwidth += 5;
            sW2.setAttribute("width", currentwidth);
            setTimeout(waterFlow8, 200); 
        }
    setTimeout(function() {
            rotateImage()
            turbineWater.setAttribute("opacity","1")
            waterFlow9()
          }, 1000)
}
function rotateImage() {
    turbine.style.transformOrigin = `382.5px 462.5px`; 
    turbine.style.animation = "rotate 5s linear infinite";

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
    @keyframes rotate {
        from {
        transform: rotate(360deg);
        }
        to {
        transform: rotate(0deg);
        }
    }
    `, styleSheet.cssRules.length);
}
function waterFlow9(){
    w9.style.opacity="1"
    var currentwidth = parseFloat(w9.getAttribute("width"))
    // if(shouldStop){
    //     return;
    // }else{
        if (currentwidth < 109.6) {
            currentwidth += 3;
            w9.setAttribute("width", currentwidth);
            setTimeout(waterFlow9, 100); 
        }
        setTimeout(function() {
            // waterFlow10()
            w8.setAttribute("opacity","1")

            rpmText.textContent = "1200"
            weightSelection.disabled = false;

          }, 500);
    // }
}
function waterFlowmr(){
    var currentHeight = parseFloat(mwr.getAttribute("height"))
    if (currentHeight < 119.3) {
        currentHeight += 3;
        mwr.setAttribute("height", currentHeight);
            setTimeout(waterFlowmr, 10); 
        }
    }
function waterFlowml(){
    var currentHeight = parseFloat(mwl.getAttribute("height"))
    if (currentHeight < 99.1) {
        currentHeight += 3;
        mwl.setAttribute("height", currentHeight);
            setTimeout(waterFlowml, 10); 
        }
    }
var weightflag = 0
function updateBrakeWeight(){
    var selectedWeight = weightSelection.value;
    if(selectedWeight == 3){
        rpmText.textContent = "950"
        w1Text.textContent = "3.0 kg";
        w2Text.textContent = "0.3 kg";
        document.getElementById("steps").innerHTML = "Set the value of vane opening for 3kg brake weight to 2. "
    }if(selectedWeight == 5){
        if(weightflag==0){
            rpmText.textContent = "900"
            w2Text.textContent = "5.0 kg"; 
            w1Text.textContent = "1.4 kg";
            document.getElementById("steps").innerHTML = "Set the value of vane opening for 5kg brake weight to 1."
            weightflag = 1
        }else{
            rpmText.textContent = "800"
            w2Text.textContent = "5.0 kg"; 
            w1Text.textContent = "2.0 kg";
            document.getElementById("steps").innerHTML = "Set the value of vane opening for 5kg brake weight to 3."
            weightflag == 0
        }
    }if(selectedWeight == 6){
        rpmText.textContent = "750"
        w2Text.textContent = "6.0 kg";
        w1Text.textContent = "2.4 kg";
        document.getElementById("steps").innerHTML = "Set the value of vane opening for 6kg brake weight to 4."
    }
    if(selectedWeight == 0){
        rpmText.textContent = "0"
        // w2Text = "3";
        document.getElementById("steps").innerHTML = "Set the value of vane opening greater than 0."
    }
    valvePositioning.disabled= false;
    weightSelection.disabled = true;

}
function updateValvePositioning(){
    if(valvePositioning.value == 1){
        h1.setAttribute("opacity","0")
        h2.setAttribute("opacity","1")
        h3.setAttribute("opacity","0")
        h4.setAttribute("opacity","0")
        h5.setAttribute("opacity","0")
        rpmText.textContent = "984"
        p1Text.textContent = "1.4"
        p2Text.textContent= "0.19"
        document.getElementById("steps").innerHTML = "Again, set the value of brake weight to 3 kg for second reading. "
    }if(valvePositioning.value == 2){
        h1.setAttribute("opacity","0")
        h2.setAttribute("opacity","0")
        h3.setAttribute("opacity","1")
        h4.setAttribute("opacity","0")
        h5.setAttribute("opacity","0")
        document.getElementById("steps").innerHTML = "Again, set the value of brake weight to 5 kg for second reading. "
        rpmText.textContent = "1024"
        p1Text.textContent = "2.1"
        p2Text.textContent= "0.28"
    }if(valvePositioning.value == 3){
        h1.setAttribute("opacity","0")
        h2.setAttribute("opacity","0")
        h3.setAttribute("opacity","0")
        h4.setAttribute("opacity","1")
        h5.setAttribute("opacity","0")
        document.getElementById("steps").innerHTML = "Again, set the value of brake weight to 6 kg for second reading. "
        rpmText.textContent = "910"
        p1Text.textContent = "2.63"
        p2Text.textContent= "0.44"
    }if(valvePositioning.value == 4){
        h1.setAttribute("opacity","0")
        h2.setAttribute("opacity","0")
        h3.setAttribute("opacity","0")
        h4.setAttribute("opacity","0")
        h5.setAttribute("opacity","1")
        document.getElementById("steps").innerHTML = "Now, Use further readings to calculate efficiency"
        rpmText.textContent = "858"
        p1Text.textContent = "3.21"
        p2Text.textContent= "0.48"
    }if(valvePositioning.value == 0){
        h1.setAttribute("opacity","1")
        h2.setAttribute("opacity","0")
        h3.setAttribute("opacity","0")
        h4.setAttribute("opacity","0")
        h5.setAttribute("opacity","0")
        document.getElementById("steps").innerHTML = "Select value of vane opening greater than 0!"
    }
    valvePositioning.disabled = true;
    weightSelection.disabled = false;

}