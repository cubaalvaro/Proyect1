// homepage
let circle = document.querySelector("#circle");
let upBtn = document.querySelector("#upBtn");
let downBtn = document.querySelector("#downBtn");
let rotateValue = circle.style.transform;
let rotateSum;


upBtn.onclick = function() {
rotateSum = rotateValue + "rotate(-90deg)";
circle.style.transform = rotateSum;
rotateValue = rotateSum;
}

downBtn.onclick = function() {
rotateSum = rotateValue + "rotate(+90deg)";
circle.style.transform = rotateSum;
rotateValue = rotateSum;
}

// personalized plan page 

const personalizedPlan = document.querySelector(".pp-view");

function personalizedPlanClick (event) {
    event.preventDefault();
    window.location.href = "personalized_plan.html";
}

personalizedPlan.addEventListener("click", personalizedPlanClick);
