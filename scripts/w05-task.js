/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Create HTML <article> element
        const article = document.createElement('article');

        // Create HTML <h3> element
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        // Create HTML <img> element
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append <h3> and <img> to <article>
        article.appendChild(h3);
        article.appendChild(img);

        // Append <article> to global templesElement variable
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
    console.log(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
};

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.getElementById("filtered").value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break
    }
}

/* Event Listener */

// Add change event listener to the HTML element with ID 'filtered'
document.querySelector("#filtered").addEventListener("change", () => {
    // Call filterTemples function and pass the arrow function result with templeList as the argument
    filterTemples(templeList);
});

getTemples();
