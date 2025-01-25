
    export let contactList;

    loadFromStorage();
    export function loadFromStorage(){
        contactList = JSON.parse(localStorage.getItem('contactList'));

        if (!contactList){
            contactList =
                [{
                    contactType: 'friend',
                    contactName: 'BJ',
                    firstName: 'Brian',
                    lastName: 'Jordan',
                    address: '4542 long st',
                    phoneNumber: '543345543',
                    email: 'bj@mail'
                }]
        }
    }

    function saveToStorage(){
        localStorage.setItem('contactList', JSON.stringify(contactList));
}

    export function addContact(contactType, contactName, firstName,
                               lastName, address, phoneNumber, email) {
        contactList.push({
            contactType: contactType,
            contactName: contactName,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phoneNumber: phoneNumber,
            email: email
        });
        saveToStorage();
    }



