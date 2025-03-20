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
}

// Example Usage:
try {
    let addressBook = new AddressBook();

    let contact1 = new Contact(
        "John", "Doe", "123 Main St", "New York", "New York", "123456", "9876543210", "john.doe@example.com"
    );

    let contact2 = new Contact(
        "Alice", "Brown", "456 Elm St", "Los Angeles", "California", "654321", "9123456789", "alice.brown@example.com"
    );

    addressBook.addContact(contact1);
    addressBook.addContact(contact2);
    addressBook.displayContacts();
} catch (error) {
    console.error(error.message);
}
