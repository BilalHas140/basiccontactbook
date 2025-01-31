import {contactList} from "./contact.js";
import {renderAddContact} from "./add-contact.js";
import {addSelectionButtons} from "./update-contact.js";
import {addRemoveButtons} from "./delete-contact.js";
import {verifyDeleteAll} from "./delete-all-contacts.js";

runScript();

    function addDiv(parentID,className) {
        contactList.map((contact) => {
            const parentElement = document.getElementById(parentID);
                const newDiv = document.createElement('div');
                newDiv.className = className;
                newDiv.parentID = parentID;
                newDiv.textContent =   `ContactType: ${contact.contactType}\n
                                        ContactName: ${contact.contactName}\n                                      
                                        FirstName: ${contact.firstName}\n
                                        LastName: ${contact.lastName}\n
                                        Address: ${contact.address}\n
                                        PhoneNumber: ${contact.phoneNumber}\n
                                        Email: ${contact.email}`;

                if (parentElement) {
                    parentElement.appendChild(newDiv);
                }
        })
        return newDiv.textContent;
    }


export function runScript() {
    document.querySelector('.js-home-body').innerHTML =
    `<div class="title-panel">
        <p class="people-log-text">PEOPLE LOG</p>
    </div>
    <div class="options-panel">
        <div class="option-block">
            Account Settings
        </div>
        
        <div class="option-block">
            Search Contacts
        </div>
        
        <div class="option-block">
            Grid View
        </div>
        
        <div class="option-block">
            Log Out
        </div>
    </div>
    
    <div class="main-container">
         <div class="contact-actions-panel">
            <div class="side-option-block">
                <button class="side-option-button add-contact-button">+</button>
                <li class="bullet"></li>
                Add
            </div>
            
            <div class="side-option-block">   
                <button class="side-option-button update-contact-button">U</button>         
                <li class="bullet"></li>
                Update
            </div>
            
            <div class="side-option-block">
                <button class="side-option-button delete-contact-button">-</button>
                <li class="bullet"></li>
                Delete
            </div>
            
            <div class="side-option-block">
                <button class="side-option-button delete-all-button">--</button>
                <li class="bullet"></li>
                Delete All
            </div>
        </div>
        
        <div class="home-contacts-container" id="div-container">
        </div>
    </div>`

    document.querySelector('.add-contact-button')
        .addEventListener('click', () => {
            renderAddContact();
        })
    document.querySelector('.update-contact-button')
        .addEventListener('click', () => {
            addSelectionButtons();
        })
    document.querySelector('.delete-contact-button')
        .addEventListener('click', () => {
            addRemoveButtons();
        })
    document.querySelector('.delete-all-button')
        .addEventListener('click', () => {
            verifyDeleteAll();
        })

    document.querySelector('.home-contacts-container').innerHTML =
        addDiv('div-container', 'contact-block');

}