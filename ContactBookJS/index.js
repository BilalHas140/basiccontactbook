import {renderLoginBox} from "./log-in.js";
import {renderCreateAccount} from "./create-account.js";
import {renderResetPassword} from "./reset-password.js";

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
}




