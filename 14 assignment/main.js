"use strict";
let guestList = ["Ayesha baji", "Duaa baji", "Rimsha baji", "Marium baji"];
// //  for each
guestList.forEach(guestName => {
    console.log(`Sister ${guestName}, you are cordially invited to dinner.`);
});
// map method
let additionalGuestList = guestList.map(guestName => `sister ${guestName}, you are cordially invited to dinner.`);
console.log(additionalGuestList);
additionalGuestList.forEach(invitations => {
    console.log(invitations);
});
