var money = 0
var completion = 0
var completionPlus = 0.01
var comnpletionPlusUpgarde = 3000
var learnNumCost = 50
var employCost = 100
var employ;

function getEarn() {
  money += 1;
  document.getElementById("moneyNum").innerHTML = money;
}

function getWork() {
  completion = completion += completionPlus;
  document.getElementById("completionNum").innerHTML = completion;
  
  if (completion > 5 <5.3) {
    window.alert("module completed!");
  }
  
  if (completion > 10 < 10.3){
  window.alert("boosters completed!");  
  }
  
  if (completion > 20 < 20.3) {
    window.alert("engines completed!");
  }
  
  if (completion > 30 < 30.3) {
    window.alert("fuel tanks completed!");
  }
  
  if (completion > 50 < 50.3){
    window.alert("main fusalge completed!");
  }
  
  if (completion > 60 < 60.25){
    window.alert("Oh no! your workshop has been hit by an earthquake and much of your work has been desroyed!");
    completion = completion *= 0.4;
    document.getElementById("completionNum").innerHTML = completion;
    completionPlus = completionPlus *= 0.4;
     document.getElementById("workExtraNum").innerHTML = completionPlus;
  }
  
  if ("completion > 75 < 75.3"){
    window.alert("launch pad foundations completed!");
  }
  
 if (completion > 90 < 90.3) {
   window.alert("launch pad completed!");
 }
 
 if (completion > 96 < 96.3) {
   window.alert("moving rocket onto launch - nearly there now!");
 }
 
 if (completion < 100) {
   window.alert("Wow! You've escaped from earth and will now survive!");
 }
}

function getLearn() {
  if (money > learnNumCost) {
    money = money -= learnNumCost;
    document.getElementById("moneyNum").innerHTML = money;
    learnNumCost = learnNumCost += learnNumCost *= 2;
    document.getElementById("learnNum").innerHTML = learnNumCost;
    completionPlus = completionPlus += 
    
    if (completionPlus < 0.2) {
    completionPlus = completionPlus += completionPlus /= 0.3;
    document.getElementById("workExtraNum").innerHTML = completionPlus;
    }
  }
}

function getEmploy() {
  if (money > employCost) {
    money = money -= employCost;
    document.getElementById("moneyNum").innerHTML = money;
    employCost = employCost += employCost *= 2;
    document.getElementById("employNum").innerHTML = employCost;
    completionPlusUpgrade =  completionPlusUpgrade *= 0.2;
    
    if (completion < 500) {
   employ = setInterval(getEmploy(),  completionPlusUpgrade);
}
}
