import {renderLoginBox} from "./log-in.js";
import {renderCreateAccount} from "./create-account.js";
import {renderResetPassword} from "./reset-password.js";
import {accountList} from "../AccountScripts/accountList.js";


runScript();

export function runScript() {
    renderLoginBox();


    document.querySelector('.js-create-account-button')
        .addEventListener('click', () => {
            renderCreateAccount()
        });

    document.querySelector('.js-reset-password-button')
        .addEventListener('click', () => {
            renderResetPassword()
        });

    document.querySelector('.submit-button')
        .addEventListener('click', () => {
            const loginUserName = document.getElementById('user-name').value
            const loginPassword = document.getElementById('password').value

            let login = false;

            accountList.forEach(account => {
                if (account.userName === loginUserName
                && account.password === loginPassword) {
                    login = true;
                }
            })

            if( loginUserName === ''
            ||  loginPassword === '')
            {
                alert('Please enter a username and password');
                runScript();
                return;
            } else if (login === false) {
                    alert('Please enter a valid username and password');
                    runScript();
                } else if(login === true){
                    localStorage.setItem('currentAccountUserName', JSON.stringify(loginUserName));
                    location.href = 'home.html';
                }
        })
}




