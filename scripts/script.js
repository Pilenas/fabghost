"use strict";

window.addEventListener("load", () => {
  //eventlyssnare som reagerar på 'Play game'-knappen och returnerar TRUE när validateLogin är true.
  const playBtnRef = document.querySelector("#spela");
  playBtnRef.addEventListener("click", (event) => {
    event.preventDefault();
    if (validateLogin()) {
    document.querySelector("#formDiv").classList.add("d-none");

    //Här sätter vi upp spelet med en function som heter gamePlay
    gamePlay();
    }              
  });
});

// Inloggningsverifiering

function validateLogin() {
  try {
    const userNameRef = document.querySelector("#username");
    const passwordRef = document.querySelector("#password");
    
    if (!users.some((user) => user.username === userNameRef.value)) {
      console.log(userNameRef.value);
      throw {
        nodeRef: userNameRef,
        msg: "No such username!",
      };
    } else {
      const user = users.find((user) => userNameRef.value);
      
      if (user.password !== passwordRef.value) {
        throw {
          nodeRef: passwordRef,
          msg: "Please, check your password!",
        };
      } else {
        if (checkFear() === false) {
          throw {
            nodeRef: document.querySelector("#question"),
            msg: "This is no place for a chicken like you!",
          };
        }
      }
      console.log("Inloggning lyckades");
      return true;
    }
  } catch (error) {
    console.log(error);
    error.nodeRef.value = "";
    error.nodeRef.focus();
    msg.textContent = error.msg;
    return false;
  }
}

// Funktion för att kontrollera rädsla
function checkFear() {
  const checkbox = document.querySelector("#question");
  if (checkbox.checked) {
    return true;
  } else {
    return false;
  }
}

// själva spelfunktionen med inbäddade functions.
function gamePlay() {
  let totalValue = 0;
  let toggledCount = 0;
  let ghosts = Math.floor(Math.random() * 6) + 10;
  gameFieldInit();
  
  
  function gameFieldInit() {
    const mainElement = document.querySelector("main");
    const gameContainer = document.createElement("div");
    gameContainer.id = "gameContainer";
    
    
    for (let i = 0; i < ghosts; i++) {
      const ghostImage = document.createElement("img");
      ghostImage.src = "resources/ghost.png";
      ghostImage.style.position = "absolute";
      ghostImage.style.left = oGameData.left() + "px";
      ghostImage.style.top = oGameData.top() + "px";
      ghostImage.value = 0;
      ghostImage.addEventListener("mouseover", toggleValue);
      gameContainer.appendChild(ghostImage);
    }
    
    mainElement.appendChild(gameContainer);
  }
  
  function toggleValue(event) {
    const ghostImage = event.target;
    ghostImage.value ^= 1;
    
    if (ghostImage.value === 1) {
      totalValue += 1;
    } else {
      totalValue -= 1;
    }
    toggledCount++;
    
    if (ghostImage.value === 1) {
      ghostImage.src = "resources/net.png";
    } else {
      ghostImage.src = "resources/ghost.png";
    }
    console.log(totalValue);
    
    if (totalValue === ghosts) {
      gameOver();
    }
  }
  function gameOver() {
    console.log("Spelet är över!");
    console.log("Antal spöken berörda:", toggledCount);
    let gameContainer = document.querySelector("#gameContainer");
    gameContainer.remove();
    restartGame();
  }
}
// function för att starta om spelet
function restartGame() {
    document.querySelector("#username").value = "";
    document.querySelector("#password").value = "";
    document.querySelector("#question").checked = false;
    document.querySelector("#username").focus();
    document.querySelector('#msg').textContent = `Grattis! Du fångade alla spöken.`;
    document.querySelector("#formDiv").classList.remove("d-none");
}