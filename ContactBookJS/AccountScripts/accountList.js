
export let accountList;

loadFromStorage();
export function loadFromStorage(){
    accountList = JSON.parse(localStorage.getItem('accountList'));

    if (!accountList){
        accountList =
            [{
                userName: 'friend',
                password: 'BJ',
                firstName: 'Brian',
                lastName: 'Jordan',
                address: '4542 long st',
                phoneNumber: '543345543',
                email: 'bj@mail'
            }]
    }
}

function saveToStorage(){
    localStorage.setItem('accountList', JSON.stringify(accountList));
}

export function addAccount(userName, password, firstName,
                           lastName, address, phoneNumber, email) {
    accountList.push({
        userName: userName,
        password: password,
        firstName: firstName,
        lastName: lastName,
        address: address,
        phoneNumber: phoneNumber,
        email: email
    });
    saveToStorage();
}

export function updateAccount(updateUserName, newUserName, newPassword, newFirstName,
                              newLastName, newAddress, newPhoneNumber, newEmail){

    accountList.map((account)=>{
        if (account.userName === updateUserName){
            account.userName = newUserName;
            account.password = newPassword;
            account.firstName = newFirstName;
            account.lastName = newLastName;
            account.address = newAddress;
            account.phoneNumber = newPhoneNumber;
            account.email = newEmail;
        }
    })
    saveToStorage();
}

export function deleteAccount(userName){
    accountList.map((account)=>{
        if (account.userName === userName){
            accountList.splice(accountList.indexOf(account), 1);
        }
    })
    saveToStorage();
}







