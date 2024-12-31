

document.querySelector('.js-create-button')
    .addEventListener('click', ()=>{createAccount()});

document.querySelector('.js-reset-password-button')
    .addEventListener('click', ()=>{resetPassword()});

function createAccount(){
    document.querySelector('.js-body-wrapper').innerHTML =
        '<div class="create-account-box">\n' +
        '    <p>\n' +
        '        Create Account\n' +
        '    </p>\n' +
        '    <form>\n' +
        '        <label for="new-user-name">UserName</label>\n' +
        '        <input class="user-name" type="text" id="new-user-name"\n' +
        '               name="user-name" required>\n' +
        '        <br><br>\n' +
        '\n' +
        '        <label for="new-password">Password</label>\n' +
        '        <input class="password" type="text" id="new-password"\n' +
        '               name="password" required>\n' +
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
        '        <label for="new-phone-number">Phone Number</label>\n' +
        '        <input class="phone-number" type="text" id="new-phone-number"\n' +
        '               name="phone-number" required>\n' +
        '        <br><br>\n' +
        '\n' +
        '        <label for="new-email">email</label>\n' +
        '        <input class="email" type="text" id="new-email"\n' +
        '               name="email" required>\n' +
        '        <br><br>\n' +
        '    </form>\n' +
        '</div>'

        + '<div class="option-buttons">\n' +
        '            <button class="home-button">\n' +
        '                Home\n' +
        '            </button>\n' +
        '            <button class="submit-button">\n' +
        '                Submit\n' +
        '            </button>\n' +
        '            <button class="log-in-button">\n' +
        '                Log In\n' +
        '            </button>\n' +
        '        </div>';
}

function resetPassword(){
    document.querySelector('.js-body-wrapper').innerHTML =
        '<div class="reset-password-box">\n' +
        '    <p>\n' +
        '        Reset Password\n' +
        '    </p>\n' +
        '    <form>\n' +
        '        <label for="current-password">Current Password</label>\n' +
        '        <input class="current-password" type="text" id="current-password"\n' +
        '               name="current-password" required>\n' +
        '        <br><br>\n' +
        '\n' +
        '        <label for="new-password">New Password</label>\n' +
        '        <input class="new-password" type="text" id="new-password"\n' +
        '               name="new-password" required>\n' +
        '        <br><br>\n' +
        '\n' +
        '        <label for="new-password">Reenter New Password</label>\n' +
        '        <input class="reenter-new-password" type="text" id="new-password"\n' +
        '               name="new-password" required>\n' +
        '        <br><br>\n' +
        '    </form>\n' +
        '</div>'

        + '<div class="option-buttons">\n' +
        '            <button class="home-button">\n' +
        '                Home\n' +
        '            </button>\n' +
        '            <button class="submit-button">\n' +
        '                Submit\n' +
        '            </button>\n' +
        '            <button class="forgot-password-button">\n' +
        '                Forgot Password\n' +
        '            </button>\n' +
        '        </div>';

}