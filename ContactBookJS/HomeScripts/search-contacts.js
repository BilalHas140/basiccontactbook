import {searchContacts} from "./contact.js";
import {runScript} from "./home.js";



    export function renderSearchedContact () {

        document.querySelector('.home-contacts-container').innerHTML =
            `
        <div class="contact-search-container">
        <div class="contact-search-box">
            <p>
                Enter Contact Name
            </p>
            <form>
                <label for="searched-contact-name"></label>
                <input class="contact-name" type="text" id="searched-contact-name"
                       name="contact-name" required>
                    <br><br>
            </form>
        </div>
        
            <div class="option-buttons">
                <button class="submit-search-button">
                    Search
                </button>
            </div>
        </div>`

        document.querySelector('.submit-search-button')
            .addEventListener('click', () => {

        document.querySelector('.home-contacts-container').innerHTML =
                    `<div class="home-searched-contact-container">
        <div class="searched-contact-box">
        <form class="searched-contact-form" id="new-contact-form">
            <label for="searched-contact-type">Contact Type</label>
            <input class="contact-type" type="text" id="searched-contact-type"
                   name="contact-type" placeholder="
            ${(searchContacts(document.getElementById('searched-contact-name').value).contactType)}" 
            required>
            <br><br>
    
            <label for="searched-contact-name">Contact Name</label>
            <input class="contact-name" type="text" id="searched-contact-name"
                   name="contact-name" placeholder="
            ${(searchContacts(document.getElementById('searched-contact-name').value).contactName)}" 
            required>
            <br><br>
    
            <label for="searched-first-name">First Name</label>
            <input class="first-name" type="text" id="searched-first-name"
                   name="first-name" placeholder="
            ${(searchContacts(document.getElementById('searched-contact-name').value).firstName)}" 
            required>
            <br><br>
    
            <label for="searched-last-name">Last Name</label>
            <input class="last-name" type="text" id="searched-last-name"
                   name="last-name" placeholder="
            ${(searchContacts(document.getElementById('searched-contact-name').value).lastName)}" 
            required>
            <br><br>
    
            <label for="searched-address">Address</label>
            <input class="address" type="text" id="searched-address"
                   name="address" placeholder="
            ${(searchContacts(document.getElementById('searched-contact-name').value).address)}" 
            required>
            <br><br>
    
            <label for="searched-phone-number">Phone Number</label>
            <input class="phone-number" type="text" id="searched-phone-number"
                   name="phone-number" placeholder="
            ${(searchContacts(document.getElementById('searched-contact-name').value).phoneNumber)}" 
            required>
            <br><br>
    
            <label for="searched-email">email</label>
            <input class="email" type="text" id="searched-email"
                   name="email" placeholder="
            ${(searchContacts(document.getElementById('searched-contact-name').value).email)}" 
            required>
            <br><br>
  
        </form>
       </div>

    <div class="option-buttons">
                </button>
                <button class="return-to-contacts-button js-return-to-contacts-button">
                    Return
                </button>
            </div>
    </div>`;

            document.querySelector('.return-to-contacts-button')
                .addEventListener('click', () => {
                    runScript();
                })
        })
    }

