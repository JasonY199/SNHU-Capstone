document.addEventListener('DOMContentLoaded', function() {
    includeHTML();
    loadDestinations();
    document.getElementById('searchButton').addEventListener('click', searchDestinations);
});

// W3 Schools include HTML files function.
// Credit: https://www.w3schools.com/howto/howto_html_include.asp
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain attribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
        }
    }
}

const destinations = [
    {
        "name": "Paris",
        "location": "France",
        "approximate_price": "$1500",
        "days": "5",
        "description": "The city of love, known for its art, fashion, and culture.",
        "image": "images/locations/paris.jpg", // Credits: Photo by Chris Karidis on Unsplash
        "rating": 4.8,
        "activities": ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
        "best_time_to_visit": "April to June, September to November",
        "travel_tips": "Book tickets for attractions in advance to avoid long queues.",
        "local_cuisine": "Try the croissants, escargot, and French wine."
    },
    {
        "name": "Tokyo",
        "location": "Japan",
        "approximate_price": "$2000",
        "days": "7",
        "description": "A bustling metropolis that blends modernity with tradition.",
        "image": "images/locations/tokyo.jpg", // Credits: Photo by Jezael Melgoza on Unsplash
        "rating": 4.7,
        "activities": ["Shibuya Crossing", "Sensoji Temple", "Tokyo Tower"],
        "best_time_to_visit": "March to May, September to November",
        "travel_tips": "Get a JR Pass for unlimited travel on Japan Railways.",
        "local_cuisine": "Sushi, ramen, and tempura are must-tries."
    },
    {
        "name": "New York",
        "location": "USA",
        "approximate_price": "$1800",
        "days": "5",
        "description": "The city that never sleeps, famous for its skyline and vibrant culture.",
        "image": "images/locations/newyork.jpg", // Credits: Photo by Thomas Habr on Unsplash
        "rating": 4.9,
        "activities": ["Statue of Liberty", "Central Park", "Broadway Shows"],
        "best_time_to_visit": "April to June, September to November",
        "travel_tips": "Use public transportation to get around the city efficiently.",
        "local_cuisine": "New York-style pizza, bagels, and cheesecake."
    },
    {
        "name": "Sydney",
        "location": "Australia",
        "approximate_price": "$2200",
        "days": "6",
        "description": "A vibrant city known for its iconic Sydney Opera House and stunning beaches.",
        "image": "images/locations/sydney.jpg", // Credits: Photo by Dan Freeman on Unsplash
        "rating": 4.6,
        "activities": ["Sydney Opera House", "Bondi Beach", "Harbour Bridge"],
        "best_time_to_visit": "September to November, March to May",
        "travel_tips": "Use the Opal card for convenient public transport.",
        "local_cuisine": "Try the seafood, especially the Sydney rock oysters."
    },
    {
        "name": "Rome",
        "location": "Italy",
        "approximate_price": "$1600",
        "days": "5",
        "description": "A historical city known for its ancient ruins and vibrant culture.",
        "image": "images/locations/rome.jpg", // Credits: Photo by David Köhler on Unsplash
        "rating": 4.7,
        "activities": ["Colosseum", "Vatican Museums", "Trevi Fountain"],
        "best_time_to_visit": "April to June, September to October",
        "travel_tips": "Wear comfortable shoes for exploring the city's cobblestone streets.",
        "local_cuisine": "Try the pasta, pizza, and gelato."
    },
    {
        "name": "Cape Town",
        "location": "South Africa",
        "approximate_price": "$1700",
        "days": "6",
        "description": "A city with stunning landscapes, from mountains to beaches.",
        "image": "images/locations/capetown.jpg", // Credits: Photo by Sharaan Muruvan on Unsplash
        "rating": 4.8,
        "activities": ["Table Mountain", "Cape Point", "Robben Island"],
        "best_time_to_visit": "March to May, September to November",
        "travel_tips": "Don't miss the sunset at Signal Hill.",
        "local_cuisine": "Try the braai, bobotie, and Cape Malay curry."
    },
    {
        "name": "Bangkok",
        "location": "Thailand",
        "approximate_price": "$1300",
        "days": "5",
        "description": "A bustling city known for its vibrant street life and cultural landmarks.",
        "image": "images/locations/bangkok.jpg", // Credits: Photo by Florian Wehde on Unsplash
        "rating": 4.6,
        "activities": ["Grand Palace", "Wat Arun", "Chatuchak Market"],
        "best_time_to_visit": "November to February",
        "travel_tips": "Use the Skytrain to avoid traffic jams.",
        "local_cuisine": "Try the street food, especially pad thai and mango sticky rice."
    },
    {
        "name": "Barcelona",
        "location": "Spain",
        "approximate_price": "$1400",
        "days": "5",
        "description": "A city famous for its art, architecture, and vibrant culture.",
        "image": "images/locations/barcelona.jpg", // Credits: Photo by Enes on Unsplash
        "rating": 4.8,
        "activities": ["Sagrada Familia", "Park Güell", "La Rambla"],
        "best_time_to_visit": "May to June, September to October",
        "travel_tips": "Book tickets for popular attractions in advance.",
        "local_cuisine": "Try the tapas, paella, and churros."
    }
];

function loadDestinations() {
    const container = document.getElementById('destinations');
    container.innerHTML = '';  // Clear existing content

    destinations.forEach(destination => {
        const destinationElement = document.createElement('div');
        destinationElement.classList.add('destination');

        destinationElement.innerHTML = `
            <div>
                <h3>${destination.name}</h3>
                <p><strong>Location:</strong> ${destination.location}</p>
                <p><strong>Approximate Price:</strong> ${destination.approximate_price}</p>
                <p><strong>Recommended Days:</strong> ${destination.days}</p>
                <p>${destination.description}</p>
                <p><strong>Rating:</strong> ${destination.rating}/5</p>
                <p><strong>Activities:</strong> ${destination.activities.join(', ')}</p>
                <p><strong>Best Time to Visit:</strong> ${destination.best_time_to_visit}</p>
                <p><strong>Travel Tips:</strong> ${destination.travel_tips}</p>
                <p><strong>Local Cuisine:</strong> ${destination.local_cuisine}</p>
            </div>
            <img src="${destination.image}" alt="${destination.name}">
        `;

        container.appendChild(destinationElement);
    });
}

function searchDestinations() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const container = document.getElementById('destinations');
    container.innerHTML = '';  // Clear existing content

    const filteredDestinations = destinations.filter(destination => 
        destination.name.toLowerCase().includes(searchInput) ||
        destination.location.toLowerCase().includes(searchInput) ||
        destination.description.toLowerCase().includes(searchInput)
    );

    if (filteredDestinations.length === 0) {
        container.innerHTML = '<p>No destinations found.</p>';
        return;
    }

    filteredDestinations.forEach(destination => {
        const destinationElement = document.createElement('div');
        destinationElement.classList.add('destination');

        destinationElement.innerHTML = `
            <div>
                <h3>${destination.name}</h3>
                <p><strong>Location:</strong> ${destination.location}</p>
                <p><strong>Approximate Price:</strong> ${destination.approximate_price}</p>
                <p><strong>Recommended Days:</strong> ${destination.days}</p>
                <p>${destination.description}</p>
                <p><strong>Rating:</strong> ${destination.rating}/5</p>
                <p><strong>Activities:</strong> ${destination.activities.join(', ')}</p>
                <p><strong>Best Time to Visit:</strong> ${destination.best_time_to_visit}</p>
                <p><strong>Travel Tips:</strong> ${destination.travel_tips}</p>
                <p><strong>Local Cuisine:</strong> ${destination.local_cuisine}</p>
            </div>
            <img src="${destination.image}" alt="${destination.name}">
        `;

        container.appendChild(destinationElement);
    });
}
