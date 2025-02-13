
import {runScript} from "./index.js";
import {addAccount} from "../AccountScripts/accountList.js";

export function renderCreateAccount(){
    document.querySelector('.js-body').innerHTML =
        `<div class="create-account-box">
            <p>
                Create Account
            </p>
            <form>
                <label for="new-user-name">UserName</label>
                <input class="user-name" type="text" id="new-user-name"
                       name="user-name" required>
                <br><br>
        
                <label for="new-password">Password</label>
                <input class="password" type="text" id="new-password"
                       name="password" required>
                <br><br>
        
                <label for="new-first-name">First Name</label>
                <input class="first-name" type="text" id="new-first-name"
                       name="first-name" required>
                <br><br>
        
                <label for="new-last-name">Last Name</label>
                <input class="last-name" type="text" id="new-last-name"
                       name="last-name" required>
                <br><br>
        
                <label for="new-address">Address</label>
                <input class="address" type="text" id="new-address"
                       name="address" required>
                <br><br>
        
                <label for="new-phone-number">Phone Number</label>
                <input class="phone-number" type="text" id="new-phone-number"
                       name="phone-number" required>
               <br><br>
        
                <label for="new-email">email</label>
                <input class="email" type="text" id="new-email"
                       name="email" required>
                <br><br>
            </form>
        </div>

                <div class="option-buttons">
                   </button>
                    <button class="create-button js-create-button">
                        Create
                    </button>
                </div>`;

    document.querySelector('.js-create-button')
        .addEventListener('click', () => {
            addAccount(
                document.getElementById('new-user-name').value,
                document.getElementById('new-password').value,
                document.getElementById('new-first-name').value,
                document.getElementById('new-last-name').value,
                document.getElementById('new-address').value,
                document.getElementById('new-phone-number').value,
                document.getElementById('new-email').value);

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
