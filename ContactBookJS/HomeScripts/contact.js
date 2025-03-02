
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

   export function searchContacts(contactName) {
        let exampleContact = {}
        contactList.map((contact)=>{
            if(contact.contactName === contactName){
              exampleContact = contact;
            }
        })
       return exampleContact;
    }

   export function updateContact(updateContactName, newContactType, newContactName, newFirstName,
                           newLastName, newAddress, newPhoneNumber, newEmail){

        contactList.map((contact)=>{
            if (contact.contactName === updateContactName){
                contact.contactType = newContactType;
                contact.contactName = newContactName;
                contact.firstName = newFirstName;
                contact.lastName = newLastName;
                contact.address = newAddress;
                contact.phoneNumber = newPhoneNumber;
                contact.email = newEmail;
            }
        })
       saveToStorage();
    }

    export function deleteAContact(contactName){
        contactList.map((contact)=>{
            if (contact.contactName === contactName){
                contactList.splice(contactList.indexOf(contact), 1);
            }
        })
        saveToStorage();
    }

    export function deleteAllContacts(){
     contactList.splice(0, contactList.length);
        saveToStorage();
    }

