
const personDetails = {
    "name": "John Doe",
    "age": 32,
    "isEmployed": true,
    "hobbies": ["Reading", "Traveling", "Swimming"],
    "address": {
      "street": "123 Elm St",
      "city": "Metropolis",
      "postalCode": 12345
    },
    "familyMembers": [
      {
        "name": "Jane Doe",
        "relation": "Spouse",
        "age": 30
      },
      {
        "name": "Jimmy Doe",
        "relation": "Son",
        "age": 5
      }
    ]
  }

console.log(personDetails);
const jsonObjToString=JSON.stringify(personDetails);
console.log(jsonObjToString);
const retrievedPerDetails = JSON.parse(jsonObjToString);
console.log(retrievedPerDetails);

console.log(retrievedPerDetails.hobbies);
console.log(retrievedPerDetails.name);
console.log(retrievedPerDetails.familyMembers[0].name);

retrievedPerDetails.familyMembers.forEach(member => { console.log(`Member name is - ${member.name} and Member relation is - ${member.relation}`);
    
});
