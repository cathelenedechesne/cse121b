/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Cathelène Dechesne",
    photo : "images/profile_pic.jpg",
    favoriteFoods: [
        "French Food",
        "Asian Food",
        "Chocolate",
        "Fast Food"
    ],
    hobbies: [
        "Art",
        "Craft",
        "Music",
        "Traveling",
        "Dreaming"
    ],
    placesLived: []
    
};


/* Populate Profile Object with placesLive objects */


myProfile.placesLived.push(

    {
        place:"Monein, France",
        length: "6 years"
    },

    {
        place: "Oloron Sainte-Marie, France",
        length: "12 years"
    },

    {
        place: "Fraser, ACT, Australia",
        length: "8 months"
    },

    {
        place: "Belconnen, ACT, Australia",
        length: "10 months"
    },      
)


/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;

// Assign the value of the 'name' property as the 'alt' attribute of the HTML <img> with ID 'photo'
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    // Create HTML <dt> element and put its 'place' property in it
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    // Create HTML <dd> element and put its 'length' property in it
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    // Append the HTML <dt> and <dd> elements to the HTML <dl> with ID 'places-lived'
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
