import {runScript} from "./index.js";

export function renderResetPassword(){
    document.querySelector('.js-body').innerHTML =
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
        '            <button class="home-button js-home-button">\n' +
        '                Home\n' +
        '            </button>\n' +
        '            <button class="submit-button">\n' +
        '                Submit\n' +
        '            </button>\n' +
        '            <button class="forgot-password-button">\n' +
        '                Forgot Password\n' +
        '            </button>\n' +
        '        </div>';

    document.querySelector('.js-home-button')
        .addEventListener('click', () => {runScript()});
}