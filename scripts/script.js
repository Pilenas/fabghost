'use strict';

window.addEventListener('load', () => {
    //Här kickar ni igång ert program
    //eventlyssnare som reagerar på 'Play game'-knappen och returnerar TRUE när validateLogin är true.
    const playBtnRef = document.querySelector('#spela');
    playBtnRef.addEventListener('click', (event) => {
        event.preventDefault();
        if(validateLogin()) {
            //Här sätter vi upp spelplanen med en function som heter gameFieldInit
            gameFieldInit();
        }
    });
           
});

function gameFieldInit() {
// en for-loop som genererar femton spöken på random platser
// i form av image-objekt (som namnges ghostOne etc???) som sedan kan byta bild mha toggle 
// som triggas av att musen passerar objektet
// när femton spöken placerats anropas playGame() och spelet börjar.
//
//FRÅGOR: kan scriptet manipulera style.css och skriva in femton olika namn/id för positionering av varje unikt object?
// Kan vi skapa spökena som objects i en array i oGameData, och använda de objecten för att manipulera DOMen? Vad ska
// då objecten som vi skapar i HTML-filen vara eftersom vi vill byta bild på dem? Ska de vara img<> eller något annat?


}

function playGame() {
// eventlyssnare som när pekaren passerar ett image-objekt togglar objektet så att det byter bildkälla(?).
// räknare som kontrollerar antal fångade spöken, samt avslutar spelet när antal spöken är noll.
// Eventuellt räknare som räknar antal toggles för att publicera vid gameOver.


}

function validateLogin() {
    try {
        const userNameRef = document.querySelector('#username');
        const passwordRef = document.querySelector('#password');
        
        if(!users.some(user => user.username === userNameRef.value)) {
            console.log(userNameRef.value);
            throw{
                'nodeRef' : userNameRef,
                'msg' : 'No such username!',
            }            
        } else {
            const user = users.find(user => userNameRef.value)
            
            if(user.password !== passwordRef.value) {
                throw {
                    'nodeRef' : passwordRef,
                    'msg' : 'Please, check your password!',
                }
            }   else { 
                    if(checkFear() === false){
                        throw {
                        'nodeRef' : document.querySelector('#question'),
                        'msg' : 'This is no place for a chicken like you!',
                        }
                    }
                }
        console.log('Inloggning lyckades');
        return true;
    }
        
    } catch(error) {
        console.log(error);
        error.nodeRef.value = '';
        error.nodeRef.focus();
        msg.textContent = error.msg;
        return false;
    }
}

function checkFear() {
    const checkbox = document.querySelector('#question');
    if (checkbox.checked) {
        return true;
    } else {
        return false;
    }    
}
