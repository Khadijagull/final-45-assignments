"use strict";
//  loop
let myFriendNames = ["Nayab", "Reeha", "Hira", "Naosheen", "Hafsa"];
for (let i = 0; i < myFriendNames.length; i++) {
    console.log(myFriendNames[i]);
}
;
// for each
myFriendNames.forEach(names => {
    console.log(names);
});
// for of loop
for (let friendsName of myFriendNames) {
    console.log(friendsName);
}
