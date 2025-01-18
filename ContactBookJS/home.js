
runScript();

export function runScript() {
    document.querySelector('.js-home-top-container').innerHTML =
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
    </div>`

        document.querySelector('.js-home-side-container').innerHTML =
    `<div class="contact-actions-panel">
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
    </div>`
}