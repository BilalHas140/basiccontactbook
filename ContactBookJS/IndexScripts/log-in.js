

export function renderLoginBox() {
    document.querySelector('.js-body').innerHTML =
        `
<div class="log-in-box">
    <p>
        ENTER PEOPLE LOG
    </p>
    <form>
        <label for="user-name">UserName</label>
        <input class="user-name" type="text" id="user-name"
               name="user-name" required>
            <br><br>

        <label for="password">Password</label>
        <input class="password" type="text" id="password"
               name="password" required>
            <br><br>
    </form>
</div>

<div class="option-buttons">
    <button class="create-account-button js-create-account-button">
        Create Account
    </button>
    <button class="submit-button">
        Submit
    </button>
    <button class="reset-password-button js-reset-password-button">
        Reset Password
    </button>
</div>
    `
}