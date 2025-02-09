import {accountList, deleteAccount, updateAccount} from "./accountList.js";

runScript();

export function runScript() {
    let userName = '';
    let password = '';
    let firstName = '';
    let lastName = '';
    let address = '';
    let phoneNumber = '';
    let email = '';

    accountList.map((account) => {
        if ('friend' === account.userName) {
            userName = account.userName;
            password = account.password;
            firstName = account.firstName;
            lastName = account.lastName;
            address = account.address;
            phoneNumber = account.phoneNumber;
            email = account.email;
        }
    })
    document.querySelector('.js-account-body').innerHTML =
        `<div class="title-panel">
        <p class="account-settings-text">AccountSettings</p>
    </div>
 
    <div class="main-container">
         <div class="account-actions-panel">
            <div class="side-option-block">
                <button class="side-option-button return-home-button">O</button>
                <li class="bullet"></li>
                Return Home
            </div>
            
            <div class="side-option-block">   
                <button class="side-option-button log-out-button">O</button>         
                <li class="bullet"></li>
                Log Out
            </div>
            
            <div class="side-option-block">
                <button class="side-option-button delete-account-button">O</button>
                <li class="bullet"></li>
                Delete Account
            </div>                
        </div>
        
        <div class="account-info-container" id="div-container">     
            <div class="account-info-box">
                <p> 
                    Account Info
                </p>
           
                <form class="account-form" id="account-form"> 
                    <label for="new-user-name">User Name</label> 
                    <input class="user-name" type="text" id="new-user-name"
                           name="user-name" placeholder='${userName}' required>
                    <br><br>
                    <label for="new-password">Password</label> 
                    <input class="password" type="text" id="new-password"
                           name="password" placeholder='*******' required>
                    <br><br> 
                    <label for="new-first-name">First Name</label>
                    <input class="first-name" type="text" id="new-first-name" 
                           name="first-name" placeholder='${firstName}' required>
                    <br><br>
                    <label for="new-last-name">Last Name</label> 
                    <input class="last-name" type="text" id="new-last-name"
                           name="last-name" placeholder='${lastName}' required>
                    <br><br>
                    <label for="new-address">Address</label> 
                    <input class="address" type="text" id="new-address" 
                           name="address" placeholder='${address}' required> 
                    <br><br>
                    <label for="new-phone-number">Phone Number</label> 
                    <input class="phone-number" type="text" id="new-phone-number" 
                           name="phone-number" placeholder='${phoneNumber}' required> 
                    <br><br>
                    <label for="new-email">email</label> 
                    <input class="email" type="text" id="new-email" 
                           name="email" placeholder='${email}' required> 
                    <br><br>            
                </form>
                 </div>
               
                <div class="option-buttons">                   
                    <button type="submit" class="update-selected-button" 
                    id="js-update-selected-button"> 
                        Update
                    </button>
                </div>
           </div>
        </div>`


    document.querySelector('.update-selected-button')
        .addEventListener('click', () => {
            let newUserName, newPassword, newFirstName,
                newLastName, newAddress, newPhoneNumber, newEmail;

            if (document.getElementById('new-user-name').value !== '') {
                newUserName = document.getElementById('new-user-name').value;
            } else newUserName = userName;

            if (document.getElementById('new-password').value !== '') {
                newPassword = document.getElementById('new-password').value;
            } else newPassword = password;

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

            updateAccountInList(userName, newUserName, newPassword, newFirstName,
                newLastName, newAddress, newPhoneNumber, newEmail
            );
            runScript();
        })
    document.querySelector('.account-form').addEventListener('keydown', (event) => {
        if (event.key === 'Enter')
        {
            document.querySelector('.update-selected-button').click();
        }
    })

    function updateAccountInList(updateUserName, newUserName, newPassword, newFirstName,
                                 newLastName, newAddress, newPhoneNumber, newEmail) {

        updateAccount(updateUserName, newUserName, newPassword, newFirstName,
            newLastName, newAddress, newPhoneNumber, newEmail)
    }

    document.querySelector('.return-home-button')
        .addEventListener('click', () => {
            location.href = 'home.html';
        })
    document.querySelector('.log-out-button')
        .addEventListener('click', () => {
            location.href = 'index.html';
        })
    document.querySelector('.delete-account-button')
        .addEventListener('click', () => {
            renderConfirmDelete()
        })

    function renderConfirmDelete() {
        document.querySelector('.js-account-body').innerHTML =
            `<div class="title-panel">
        <p class="account-settings-text">AccountSettings</p>
    </div>
 
    <div class="main-container">
         <div class="account-actions-panel">
            <div class="side-option-block">
                <button class="side-option-button return-home-button">O</button>
                <li class="bullet"></li>
                Return Home
            </div>
            
            <div class="side-option-block">   
                <button class="side-option-button log-out-button">O</button>         
                <li class="bullet"></li>
                Log Out
            </div>
            
            <div class="side-option-block">
                <button class="side-option-button delete-account-button">O</button>
                <li class="bullet"></li>
                Dont Delete
            </div>                
        </div> 

            <div class="confirm-delete-container">
            <div class="confirm-delete-box">
                <p class="confirm-delete-box-text">
                    Are You Sure You Would Like To Delete
                </p>
            </div>

            <div class="option-buttons">
                        <button class="confirm-delete-button js-confirm-delete-button">
                            Delete
                        </button>
            </div>`

        document.querySelector('.js-confirm-delete-button')
            .addEventListener('click', () => {
                deleteAccount(userName);
                runScript();
            });
        document.querySelector('.delete-account-button')
            .addEventListener('click', () => {
                runScript();
            })
    }
}