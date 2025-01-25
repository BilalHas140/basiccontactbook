import {addContact} from "./contact.js";
import {runScript} from "./home.js";

export function renderAddContact(){
    document.querySelector('.home-contacts-container').innerHTML =
        '<div class="add-home-contact-container">\n' +
        '<div class="add-contact-box">\n' +
        '    <p>\n' +
        '        Add Contact\n' +
        '    </p>\n' +
        '    <form id="new-contact-form">\n' +
        '        <label for="new-contact-type">Contact Type</label>\n' +
        '        <input class="contact-type" type="text" id="new-contact-type"\n' +
        '               name="contact-type" required>\n' +
        '        <br><br>\n' +
        '\n' +
        '        <label for="new-contact-name">Contact Name</label>\n' +
        '        <input class="contact-name" type="text" id="new-contact-name"\n' +
        '               name="contact-name" required>\n' +
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
        '        <label for="new-address">Address</label>\n' +
        '        <input class="address" type="text" id="new-address"\n' +
        '               name="address" required>\n' +
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
        '        <br><br>\n'
        +
        '    </form>\n' +
        '   </div>'

        + '<div class="option-buttons">\n' +
        '            </button>\n' +
        '            <button class="create-contact-button js-create-contact-button">\n' +
        '                Create\n' +
        '            </button>\n' +
        '        </div>'+
        '</div>'
        ;
    document.querySelector('.add-contact-button')
        .addEventListener('click', () => {
            runScript();
        })

    document.querySelector('.create-contact-button')
        .addEventListener('click', () => {
            addNewContactToList(
                document.getElementById('new-contact-type').value,
                document.getElementById('new-contact-name').value,
                document.getElementById('new-first-name').value,
                document.getElementById('new-last-name').value,
                document.getElementById('new-address').value,
                document.getElementById('new-phone-number').value,
                document.getElementById('new-email').value
                );
            runScript();
        })
}

function addNewContactToList(contactType, contactName, firstName,
                             lastName, address, phoneNumber, email) {
 addContact(contactType, contactName, firstName,
     lastName, address, phoneNumber, email)
}
