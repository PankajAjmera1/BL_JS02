const Contact = require("./Contact");

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
            console.log("Contact added successfully!");
        } else {
            throw new Error("Invalid contact. Must be an instance of Contact class.");
        }
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("Address Book is empty.");
        } else {
            console.log("Address Book:");
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
    }

    editContact(firstName, lastName, updatedDetails) {
        let contact = this.contacts.find(c => c.firstName === firstName && c.lastName === lastName);
        
        if (!contact) {
            console.log(`Contact with name ${firstName} ${lastName} not found.`);
            return;
        }

        // Updating only the provided fields
        Object.keys(updatedDetails).forEach(key => {
            if (contact.hasOwnProperty(key)) {
                contact[key] = updatedDetails[key];
            }
        });

        console.log(`Contact ${firstName} ${lastName} updated successfully!`);
    }
}

// Example Usage:
try {
    let addressBook = new AddressBook();

    let contact1 = new Contact(
        "John", "Doe", "123 Main St", "New York", "NY", "123456", "9876543210", "john.doe@example.com"
    );
    
    addressBook.addContact(contact1);
    addressBook.displayContacts();

    // Editing Contact
    addressBook.editContact("John", "Doe", { address: "456 Park Ave", city: "Los Angeles", phone: "9123456789" });

    addressBook.displayContacts(); // Updated Contact Details
} catch (error) {
    console.error(error.message);
}
