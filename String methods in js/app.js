// ****************************Task 1*********************************************
// let user_1 = prompt("Enter your first name");
// let user_2 = prompt("Enter your first name");
// let fullName = `${user_1} ${user_2}`;
// alert(fullName);
// ****************************Task 2*********************************************
// let phone = "Samsung Galaxy S6 Edge Plus";
// document.write(`My favorite phone is: ${phone} <br> Lenght of string: ${phone.length}`);

// ****************************Task 3*********************************************
// let pak = "Pakistani";
// let find = pak.indexOf('n')
// document.write(`String: ${pak} <br> Index of 'n': ${find}`);

// ****************************Task 4*********************************************
// let world = "Hello World";
// let find = world.lastIndexOf('l')
// document.write(`String: ${world} <br> Last index of 'l': ${find}`);

// ****************************Task 5*********************************************
// let pak = "Pakistani";
// let find = pak.charAt(3);
// document.write(`Strings: ${pak} <br> Character at index 3: ${find}`);

// ****************************Task 6*********************************************
// let user_1 = prompt("Enter your first name");
// let user_2 = prompt("Enter your second name");
// alert(`${user_1.concat(user_2)}`);

// ****************************Task 7*********************************************
// let country = "Hyderabad";
// document.write(`City: ${country} <br> After Replacement:` + country.replace("Hyder", "Islam"));

// ****************************Task 8*********************************************
// let msg = "Ali and Sami are best friends. They play cricket and football together";
// document.write(`${msg}<br> ` + msg.replaceAll("and", "&"));

// ****************************Task 9*********************************************
// let string = 472;
// let con = string.toString();
// document.write(`Value: ${string} <br> Type: ${typeof con} <br> Value: ${string} <br> Type: ${typeof string} `);

// ****************************Task 10*********************************************
// let user = prompt("User input");
// document.write(`User input: ${user} <br> Upper case: ` + user.toUpperCase());

// ****************************Task 11*********************************************
// let user = prompt("User input");
// let upper = user.slice(0,1).toUpperCase() + user.slice(1).toLocaleLowerCase();
// document.write(`User input: ${user}<br> Title case: ${upper}`)

// ****************************Task 12*********************************************
// let num = 35.36;
// document.write(`Number:  ${num} <br> Result: ` + num.toString().replace(".", ""));

// ****************************Task 13*********************************************
// let user = prompt("Enter your name");
// let charac = ["!", ",",".","@"];
// let sp = user.split("");

// for(let i=0; i<user.length; i++){
//     if(sp[i]== "!" || sp[i] =="," || sp[i] =="." || sp[i] =="@" ){
//         alert(`Please Enter a valid name`);
//     }
// }

// ****************************Task 14*********************************************
// let bake = ["cake","apple pie","cookie","chips","patties"];
// let user = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am?");
// let match = false;
// for(let i =0; i<bake.length; i++){
//     if(bake[i]==user){
//         match = true;
//         alert(`${user} is available at index ${i+1} in our bakery`);
//         break;
//     }
// }
// if(match == false){
//      alert(`We are sorry. ${user} isn't available in our bakery`);
// }

// ****************************Task 15*********************************************


// ****************************Task 16*********************************************
// let user = prompt("Enter a random word");
// let sp = user.split("");
// for(let i=0; i<sp.length; i++){
//     document.write(sp[i] + "<br>");
// }

// ****************************Task 17*********************************************
// let user = prompt("Enter plzz");
// if(user.length>0){
//     document.write(`User input: ${user} <br>  Last character of input: ${user.charAt(user.length -1)}`);
// }else{
//     alert("Input in empty:");
// }

// ****************************Task 18*********************************************
//  let string = "The quick brown fox jumps over the lazy dog";
//  let spl = string. toLowerCase().split(" ");
//  var count = 0;
// // document.write(spl);
//  for(let i=0; i<spl.length; i++){
//     if(spl[i]==="the"){
//         count++;
//     }
// }
// document.write(`Text: The quick brown fox jumps over the lazy dog <br> There are ${count} occurrence(s) of the word "the"`);


