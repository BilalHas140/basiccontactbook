import {runScript} from "./home.js";
import {deleteAContact, contactList} from "./contact.js";


let contactType = '';
let contactName = '';
let firstName = '';
let lastname = '';
let address = '';
let phoneNumber ='';
let email = '';

export function addRemoveButtons(){
    document.querySelectorAll('.contact-block').forEach(block => {
        block.innerHTML =
            `<div class="contact-block-remove">
            <button class="select-remove-button">select</button>
            <div class="remove-contact-info">${block.innerHTML}</div>
        </div>`
    })

    document.querySelector('.delete-contact-button')
        .addEventListener('click', () => {
            runScript();
        })


    document.querySelectorAll('.select-remove-button')
        .forEach(removeButton => {
            removeButton.addEventListener('click', () => {
                const selectedContactData = (removeButton.nextElementSibling.innerHTML);

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

                        renderRemoveContact(contactType, contactName, firstName,
                            lastname, address, phoneNumber, email);

                    }
                })
            })
        })


    function renderRemoveContact(contactType, contactName, firstName,
                                 lastName, address, phoneNumber, email){
        document.querySelector('.home-contacts-container').innerHTML =
            `<div class="delete-home-contact-container">\n 
            <div class="delete-contact-box">\n 
                <p>\n 
                    Delete Contact\n 
                </p>\n 
                <form class="delete-form" id="delete-contact-form">\n 
                    <label for="new-contact-type">Contact Type</label>\n 
                    <input class="contact-type" type="text" id="new-contact-type"\n 
                           name="contact-type" placeholder=${contactType} disabled>\n 
                    <br><br>\n 
            \n 
                    <label for="new-contact-name">Contact Name</label>\n 
                    <input class="contact-name" type="text" id="new-contact-name"\n 
                           name="contact-name" placeholder=${contactName} disabled>\n 
                    <br><br>\n 
            \n 
                    <label for="new-first-name">First Name</label>\n 
                    <input class="first-name" type="text" id="new-first-name"\n 
                           name="first-name" placeholder=${firstName} disabled>\n 
                    <br><br>\n 
            \n 
                    <label for="new-last-name">Last Name</label>\n 
                    <input class="last-name" type="text" id="new-last-name"\n 
                           name="last-name" placeholder=${lastName} disabled>\n 
                    <br><br>\n 
            \n 
                    <label for="new-address">Address</label>\n 
                    <input class="address" type="text" id="new-address"\n 
                           name="address" placeholder=${address} disabled>\n 
                    <br><br>\n 
            \n 
                    <label for="new-phone-number">Phone Number</label>\n 
                    <input class="phone-number" type="text" id="new-phone-number"\n 
                           name="phone-number" placeholder=${phoneNumber} disabled>\n 
                    <br><br>\n 
            \n 
                    <label for="new-email">email</label>\n 
                    <input class="email" type="text" id="new-email"\n 
                           name="email" placeholder=${email} disabled>\n 
                    <br><br>\n
    
                </form>\n 
               </div>

             <div class="option-buttons">\n 
                        </button>\n 
                        <button type="submit" class="delete-selected-button" 
                        id="js-delete-selected-button">\n 
                            Delete\n 
                        </button>\n 
                   </div>
            </div>`
        ;

        document.querySelector('.delete-selected-button')
            .addEventListener('click',() => {
                deleteOne(contactName);
                runScript();
        })
    }

    function deleteOne(contactName) {
        deleteAContact(contactName);
    }
}
