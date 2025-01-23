import {contactList} from "./Contact.js";

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
                <li class="bullet"></li>
                Add Contact
            </div>
            
            <div class="side-option-block">
                <li class="bullet"></li>
                Update Contact
            </div>
            
            <div class="side-option-block">
                <li class="bullet"></li>
                Delete A Contact
            </div>
            
            <div class="side-option-block">
                <li class="bullet"></li>
                Delete All Contacts
            </div>
        </div>
        
        <div class="home-contacts-container" id="div-container">
        </div>
    </div>
`
    document.querySelector('.home-contacts-container').innerHTML =
        addDiv('div-container', 'contact-block');
}

