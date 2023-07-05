const calculateButton  =  document.querySelector(".submit-button");
let currentExp = document.getElementById("exp-input");
let targetLvl = document.getElementById("lvl-input");
const button1 = document.getElementById("check-1");
const button2 = document.getElementById("check-2");
const button3 = document.getElementById("check-3");
const enterButton = document.querySelector(".submit-button");
let glasLabel = document.getElementById("glas-label");
let seaweedLabel = document.getElementById("seaweed-label");
let sandLabel = document.getElementById("sand-label");
const expForLightOrb = 3972294;

function calculateTargetExp(num) {
    const x = 0.25;
    let sum = 0;
    for(let i = 0; i < num; i++) {
        sum += i + (300*Math.pow(2,(i/7)))
    }
    console.log("target exp = " + (sum * x).toFixed());
    return (sum * x).toFixed();
}



function calculateResult() {
    let total = 0;
    let targetExp = calculateTargetExp(parseInt(targetLvl.value));
    let firstSum = 0;
    let secondSum = 0;
    if(button2.checked) {
        if(targetLvl.value < 87) {
            firstSum = (targetExp - parseInt(currentExp.value)) / 551;
        }
        else {
            firstSum = (expForLightOrb - parseInt(currentExp.value)) / 551;
        }
        if(currentExp.value >= expForLightOrb) {
            secondSum = (targetExp - currentExp.value) / 685;
        }
        else {
            secondSum = (targetExp - expForLightOrb) / 685;
        }
        if(firstSum < 0) {
            firstSum = 0;
        }
        if(secondSum < 0) {
            secondSum = 0;
        }
        console.log("current exp = " + currentExp.textContent);
        console.log("target exp = " + targetExp);
        console.log("first sum = " + firstSum);
        console.log("second sum = " + secondSum);

        total = firstSum + secondSum;
        seaweedLabel.textContent = total.toFixed();
        sandLabel.textContent = (total * 6).toFixed();
        glasLabel.textContent = (total * 6 * 1.488).toFixed();
        
    }
    else if(button1.checked) {
        if(targetLvl.value < 87) {
            firstSum = (targetExp - parseInt(currentExp.value)) / 538.5;
        }
        else {
            firstSum = (expForLightOrb - parseInt(currentExp.value)) / 538.5;
        }
        if(currentExp.value >= expForLightOrb) {
            secondSum = (targetExp - currentExp.value) / 669;
        }
        else {
            secondSum = (targetExp - expForLightOrb) / 669;
        }
        if(firstSum < 0) {
            firstSum = 0;
        }
        if(secondSum < 0) {
            secondSum = 0;
        }
        console.log("current exp = " + currentExp.textContent);
        console.log("target exp = " + targetExp);
        console.log("first sum = " + firstSum);
        console.log("second sum = " + secondSum);

        total = firstSum + secondSum;
        seaweedLabel.textContent = total.toFixed();
        sandLabel.textContent = (total * 6).toFixed();
        glasLabel.textContent = (total * 6 * 1.45).toFixed();


    }
    else if(button3.checked) {
        if(targetLvl.value < 87) {
            firstSum = (targetExp - parseInt(currentExp.value)) / 588;
        }
        else {
            firstSum = (expForLightOrb - parseInt(currentExp.value)) / 588;
        }
        if(currentExp.value >= expForLightOrb) {
            secondSum = (targetExp - currentExp.value) / 732;
        }
        else {
            secondSum = (targetExp - expForLightOrb) / 732;
        }
        if(firstSum < 0) {
            firstSum = 0;
        }
        if(secondSum < 0) {
            secondSum = 0;
        }
        console.log("current exp = " + currentExp.textContent);
        console.log("target exp = " + targetExp);
        console.log("first sum = " + firstSum);
        console.log("second sum = " + secondSum);

        total = firstSum + secondSum;
        seaweedLabel.textContent = total.toFixed();
        sandLabel.textContent = (total * 6).toFixed();
        glasLabel.textContent = (total * 6 * 1.6).toFixed();

    }

    return total;
}

button2.click();



enterButton.addEventListener("click",function(e) {
    console.log(targetLvl.textContent);
    calculateResult();
});

button1.addEventListener("click", function() {
    if(button2.checked) {
        button2.click();
        enterButton.click();
    }

    if(button3.checked) {
        button3.click();
        enterButton.click();
    }

});
button2.addEventListener("click", function() {
    if(button1.checked) {
        button1.click();
        enterButton.click();
    }

    if(button3.checked) {
        button3.click();
        enterButton.click();
    }

});
button3.addEventListener("click", function() {
    if(button2.checked) {
        button2.click();
        enterButton.click();
    }

    if(button1.checked) {
        button1.click();
        enterButton.click();
    }
});


