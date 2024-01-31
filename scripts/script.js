'use strict';

window.addEventListener('load', () => {
    //Här kickar ni igång ert program
    //validateLogin();
    //startaSpelet();
});

//funktion för validate login

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
            //const user = users.find(user => userNameRef.value)
            
            if(user.password !== passwordRef.value) {
                throw {
                    'nodeRef' : passwordRef,
                    'msg' : 'Please, check your password!',
                }
            } else { if(checkFear() === 'false'){
                'msg' : 'This is no place for a chicken like you!',

            }
                
            }
        }
        return true;
        
    } catch(error) {
        console.log(error.msg);
        error.nodeRef.value = '';
        error.nodeRef.focus();
        topMsg.textContent = error.msg;
        return false;
        
        
    }
}
checkFear();
function checkFear() {
    const checkbox = document.querySelector('#question');
    if (checkbox.checked) {
        return true;
    } else {
        return false;
    }    
}

console.log(checkFear());