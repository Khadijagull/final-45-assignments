let myFriendNames:string[] = ["Nayab" , "Reeha" , "Hira" , "Naosheen" , "Hafsa"];
//  loop
for (let i = 0; i < myFriendNames.length; i++) {

    console.log (`hello, ${myFriendNames[i]}! how are you?`);
}

// for each
myFriendNames.forEach(names => {
    console.log(` hi ${names}! how are you?`);
})

// for of loop

for (let friendsName of myFriendNames) {

    console.log(`Asalam-o-alaekum ${friendsName}! kesay ho sb?`);
    }
    