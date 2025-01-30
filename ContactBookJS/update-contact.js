import {runScript} from "./home.js";
import {updateContact, contactList} from "./contact.js";


let contactType = '';
let contactName = '';
let firstName = '';
let lastname = '';
let address = '';
let phoneNumber ='';
let email = '';

export function addSelectionButtons(){
    document.querySelectorAll('.contact-block').forEach(block => {
        block.innerHTML =
        `<div class="contact-block-update">
            <button class="select-update-button">select</button>
            <div class="update-contact-info">${block.innerHTML}</div>
        </div>`
    })

    document.querySelector('.update-contact-button')
        .addEventListener('click', () => {
            runScript();
        })


    document.querySelectorAll('.select-update-button')
        .forEach(selectButton => {
            selectButton.addEventListener('click', () => {
        const selectedContactData = (selectButton.nextElementSibling.innerHTML);

            contactList.map((contact) => {
                if(selectedContactData === `ContactType: ${contact.contactType}\n
                                        ContactName: ${contact.contactName}\n                                      
                                        FirstName: ${contact.firstName}\n
                                        LastName: ${contact.lastName}\n
                                        Address: ${contact.address}\n
                                        PhoneNumber: ${contact.phoneNumber}\n
                                        Email: ${contact.email}`){
                     contactType = contact.contactType;
                     contactName = contact.contactName;
                     firstName = contact.firstName;
                     lastname = contact.lastName;
                     address = contact.address;
                     phoneNumber = contact.phoneNumber;
                     email = contact.email;

                    renderUpdateContact(contactType, contactName, firstName,
                        lastname, address, phoneNumber, email);

                }
            })
        })
    })


    function renderUpdateContact(contactType, contactName, firstName,
                                 lastName, address, phoneNumber, email){
        document.querySelector('.home-contacts-container').innerHTML =
            `<div class="update-home-contact-container">\n 
            <div class="update-contact-box">\n 
                <p>\n 
                    Update Contact\n 
                </p>\n 
                <form class="update-form" id="update-contact-form">\n 
                    <label for="new-contact-type">Contact Type</label>\n 
                    <input class="contact-type" type="text" id="new-contact-type"\n 
                           name="contact-type" placeholder=${contactType} required>\n 
                    <br><br>\n 
            \n 
                    <label for="new-contact-name">Contact Name</label>\n 
                    <input class="contact-name" type="text" id="new-contact-name"\n 
                           name="contact-name" placeholder=${contactName} required>\n 
                    <br><br>\n 
            \n 
                    <label for="new-first-name">First Name</label>\n 
                    <input class="first-name" type="text" id="new-first-name"\n 
                           name="first-name" placeholder=${firstName} required>\n 
                    <br><br>\n 
            \n 
                    <label for="new-last-name">Last Name</label>\n 
                    <input class="last-name" type="text" id="new-last-name"\n 
                           name="last-name" placeholder=${lastName} required>\n 
                    <br><br>\n 
            \n 
                    <label for="new-address">Address</label>\n 
                    <input class="address" type="text" id="new-address"\n 
                           name="address" placeholder=${address} required>\n 
                    <br><br>\n 
            \n 
                    <label for="new-phone-number">Phone Number</label>\n 
                    <input class="phone-number" type="text" id="new-phone-number"\n 
                           name="phone-number" placeholder=${phoneNumber} required>\n 
                    <br><br>\n 
            \n 
                    <label for="new-email">email</label>\n 
                    <input class="email" type="text" id="new-email"\n 
                           name="email" placeholder=${email} required>\n 
                    <br><br>\n
            
                </form>\n 
               </div>

             <div class="option-buttons">\n 
                        </button>\n 
                        <button type="submit" class="update-selected-button" 
                        id="js-update-selected-button">\n 
                            Update\n 
                        </button>\n 
                   </div>
            </div>`
        ;

        document.querySelector('.update-selected-button')
            .addEventListener('click',() => {
                    let newContactType, newContactName, newFirstName,
                        newLastName, newAddress, newPhoneNumber, newEmail;

                    if (document.getElementById('new-contact-type').value !== '') {
                        newContactType = document.getElementById('new-contact-type').value;
                    } else newContactType = contactType;

                    if (document.getElementById('new-contact-name').value !== '') {
                        newContactName = document.getElementById('new-contact-name').value;
                    } else newContactName = contactName;

                    if (document.getElementById('new-first-name').value !== '') {
                        newFirstName = document.getElementById('new-first-name').value;
                    } else newFirstName = firstName;

                    if (document.getElementById('new-last-name').value !== '') {
                        newLastName = document.getElementById('new-last-name').value;
                    } else newLastName = lastName;

                    if (document.getElementById('new-address').value !== '') {
                        newAddress = document.getElementById('new-address').value;
                    } else newAddress = address;

                    if (document.getElementById('new-phone-number').value !== '') {
                        newPhoneNumber = document.getElementById('new-phone-number').value;
                    } else newPhoneNumber = phoneNumber;

                    if (document.getElementById('new-email').value !== '') {
                        newEmail = document.getElementById('new-email').value;
                    } else newEmail = email;

                    updateContactInList(contactName,
                        newContactType, newContactName, newFirstName,
                        newLastName, newAddress, newPhoneNumber, newEmail
                    );
                    runScript();
            })
        document.querySelector('.update-form').addEventListener('keydown', (event) => {
            if (event.key === 'Enter')
            {
                document.querySelector('.update-selected-button').click();
            }
        })
    }

    function updateContactInList(updateContactName, newContactType, newContactName, newFirstName,
                                 newLastName, newAddress, newPhoneNumber, newEmail) {

        updateContact(updateContactName, newContactType, newContactName, newFirstName,
            newLastName, newAddress, newPhoneNumber, newEmail)
    }
}

