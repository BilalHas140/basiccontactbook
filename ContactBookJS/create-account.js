
import {runScript} from "./index.js";

export function renderCreateAccount(){
    document.querySelector('.js-body').innerHTML =
        '<div class="create-account-box">\n' +
        '    <p>\n' +
        '        Create Account\n' +
        '    </p>\n' +
        '    <form>\n' +
        '        <label for="new-user-name">UserName</label>\n' +
        '        <input class="user-name" type="text" id="new-user-name"\n' +
        '               name="user-name" required>\n' +
        '        <br><br>\n' +
        '\n' +
        '        <label for="new-password">Password</label>\n' +
        '        <input class="password" type="text" id="new-password"\n' +
        '               name="password" required>\n' +
        '        <br><br>\n' +
        '\n' +
        '        <label for="new-first-name">First Name</label>\n' +
        '        <input class="first-name" type="text" id="new-first-name"\n' +
        '               name="first-name" required>\n' +
        '        <br><br>\n' +
        '\n' +
        '        <label for="new-last-name">Last Name</label>\n' +
        '        <input class="last-name" type="text" id="new-last-name"\n' +
        '               name="last-name" required>\n' +
        '        <br><br>\n' +
        '\n' +
        '        <label for="new-phone-number">Phone Number</label>\n' +
        '        <input class="phone-number" type="text" id="new-phone-number"\n' +
        '               name="phone-number" required>\n' +
        '        <br><br>\n' +
        '\n' +
        '        <label for="new-email">email</label>\n' +
        '        <input class="email" type="text" id="new-email"\n' +
        '               name="email" required>\n' +
        '        <br><br>\n' +
        '    </form>\n' +
        '</div>'

        + '<div class="option-buttons">\n' +
        '            </button>\n' +
        '            <button class="create-button js-create-button">\n' +
        '                Create\n' +
        '            </button>\n' +
        '        </div>';

    document.querySelector('.js-create-button')
        .addEventListener('click', () => {
            renderAccountCreatedBox()
    })

}

function renderAccountCreatedBox() {
    document.querySelector('.js-body').innerHTML =
        '<div class="account-created-box">\n' +
        '    <p class="account-created-box-text">\n' +
        '        Account Created Please Log In\n' +
        '    </p>\n' +
        '</div>'

        + '<div class="option-buttons">\n' +
        '            </button>\n' +
        '            <button class="account-log-in-button js-account-log-in-button">\n' +
        '                Log In\n' +
        '            </button>\n' +
        '        </div>'
    document.querySelector('.js-account-log-in-button')
        .addEventListener('click', () => {runScript()});
}
