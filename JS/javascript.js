const sidebar = document.querySelector(".sidebar2");
// const arrowLeft = document.querySelector(".arrowleft");
// const arrowRight = document.querySelector(".arrowright");

// arrowLeft.addEventListener("click", () => {
 
//   sidebar.style.display = "flex";
// });

// arrowRight.addEventListener("click", () => {
 
//   sidebar.style.display = "none";
// });

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    sidebar.style.display = "none";
    // sidebar.style.transform = "translateX(-100%)";
  } else if (event.key === "ArrowLeft") {
   sidebar.style.display = "flex";
    // sidebar.style.transform = "translateX(0)";
  }
});

   
  document.addEventListener('DOMContentLoaded', function () {
   
    var changeColorButton = document.getElementById('changeColorButton');

     
    changeColorButton.addEventListener('click', function () {

      var randomColor = getRandomColor();
      document.body.style.backgroundColor = randomColor;
    });

  
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  
 document.addEventListener("DOMContentLoaded", function () {
  
   var triggerElement = document.getElementById("night_mode");

 
   var targetElement1 = document.getElementById("targetElement1");
   var targetElement2 = document.getElementById("targetElement2");
   var targetElement3 = document.getElementById("targetElement3");
   var targetElement4 = document.getElementById("targetElement4");

   
   triggerElement.addEventListener("click", function () {
      
     if (
       targetElement1.style.backgroundColor === "rgb(255, 255, 255)"
     ) {
       targetElement1.style.backgroundColor = "#8d98a9";
     } else {
       targetElement1.style.backgroundColor = "#fff";
     }
     if (targetElement2.style.backgroundColor === "rgb(170, 183, 204)") {
       targetElement2.style.backgroundColor = "#8d98a9";
     } else {
       targetElement2.style.backgroundColor = "#aab7cc";
     }
     if (targetElement3.style.backgroundColor === "rgb(221, 221, 221)") {
       targetElement3.style.backgroundColor = "#828282";
     } else {
       targetElement3.style.backgroundColor = "#dddddd";
     }
     if (targetElement4.style.borderColor === "rgb(223, 224, 230)") {
       targetElement4.style.borderColor = "#828282";
     } else {
       targetElement4.style.borderColor = "#dfe0e6";
     }


   });
 });


  function updateTemperature() {
  
    const randomTemperature = (Math.random() * 2+35).toFixed(1);

    
    document.getElementById("temperature").textContent = randomTemperature;
  }

 
  const updateInterval = 1000;
setInterval(updateTemperature, updateInterval);
function onoroffforlamp() {
  var button_switch = document.getElementById("button-switch1");
  if (button_switch.style.justifyContent === "end") {
    button_switch.style.justifyContent = "start";
    button_switch.style.backgroundColor = "#242424";
  } else {
    button_switch.style.justifyContent = "end";
    button_switch.style.backgroundColor = "green";

  }
}
function onoroffforfan() {
  var button_switch = document.getElementById("button-switch2");
  if (button_switch.style.justifyContent === "end") {
    button_switch.style.justifyContent = "start";
    button_switch.style.backgroundColor = "#242424";
  } else {
    button_switch.style.justifyContent = "end";
    button_switch.style.backgroundColor = "green";
    
  }
}