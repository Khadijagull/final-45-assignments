let transportationMode:string[] = ["bike", "car" , "motorcycle" , "jet"];

// // loop

for (let i = 0; i < transportationMode.length; i++){
 console.log(`i would like to own ${transportationMode[i]}`);
}

// for each

transportationMode.forEach(names =>{
    console.log(`i would like to own ${names}`);
})

//  for of loop

for (let names of transportationMode){
    console.log(`i would like to own ${names}`);
}

