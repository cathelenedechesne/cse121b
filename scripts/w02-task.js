/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Cathelène Dechesne";
let currentYear = "2024";
let profilePicture = "images/profile_pic.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('img[src="images/profile_pic.jpg"]');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName} </strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

// JavaScript
let favoriteFoods = ["Ice Cream", "French Food", "Asian Food", "Chocolate", "Fast Food"];
foodElement.innerHTML = `<br>${favoriteFoods}`
let additionalFavoriteFood = "Strawberry";
favoriteFoods.push(additionalFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`









