import {runScript} from "./home.js";
import {deleteAllContacts} from "./contact.js";



    export function verifyDeleteAll() {
    document.querySelector('.home-contacts-container').innerHTML =
        '<div class="delete-all-container">' +
        '<div class="delete-all-box">\n' +
        '    <p class="delete-all-box-text">\n' +
        '        Delete All Contacts?\n' +
        '    </p>\n' +
        '</div>'

        + '<div class="option-buttons">\n' +
        '            </button>\n' +
        '            <button class="verify-delete-all-button js-verify-delete-all-button">\n' +
        '                Delete All\n' +
        '            </button>\n' +
        '        </div>' +
        '</div>'
    document.querySelector('.js-verify-delete-all-button')
        .addEventListener('click', () => {
            deleteAll();
            runScript()
        });
        document.querySelector('.delete-all-button')
            .addEventListener('click', () => {
                runScript();
            })
    }

    function deleteAll() {
        deleteAllContacts();
    }
