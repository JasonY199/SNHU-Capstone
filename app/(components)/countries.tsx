"use client"; // This ensures the component is a client-side component, utilising Next.js's client directives for enhanced control over rendering.

import { useEffect, useState } from 'react'; // Importing essential hooks from React. useEffect for side-effects, and useState for state management.
import Image from 'next/image'; // Importing Next.js's Image component for optimised image loading.

interface Destination { // Defining the structure of a 'Destination' object, ensuring type safety throughout the component.
  _id: string; // Unique identifier for each destination.
  title: string; // The name/title of the destination.
  location: string; // Geographic location of the destination.
  price: number; // Estimated cost for visiting the destination.
  days: number; // Recommended number of days to spend at the destination.
  description: string; // Brief description of the destination.
  rating: number; // User-generated rating for the destination (out of 5).
  activities: string[]; // List of activities available at the destination.
  bestTime: string[]; // Best time of the year to visit, e.g., seasons or specific months.
  tips: string; // Travel tips or advice for visitors.
  cuisine: string; // Notable local cuisine to try.
  imageUrl: string; // URL of an image representing the destination.
}

// QuickSort implementation for efficient sorting of destinations by price.
const quickSort = (arr: Destination[], low: number, high: number): Destination[] => {
  const insertionSortThreshold = 10; // Threshold for using insertion sort for small subarrays.

  if (low < high) {
    if (high - low < insertionSortThreshold) {
      insertionSort(arr, low, high); // Opting for insertion sort for smaller arrays as it's more efficient in those cases.
    } else {
      const pi = partition(arr, low, high); // Partitioning the array and getting the pivot index.
      quickSort(arr, low, pi - 1); // Recursively sorting the elements before the pivot.
      quickSort(arr, pi + 1, high); // Recursively sorting the elements after the pivot.
    }
  }

  return arr; // Returning the sorted array.
};

// Function to partition the array based on a pivot element.
const partition = (arr: Destination[], low: number, high: number): number => {
  const pivotIndex = medianOfThree(arr, low, high); // Determining the pivot using the median-of-three method.
  const pivotValue = arr[pivotIndex].price; // Pivot is based on the price of the destination.

  [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]]; // Moving pivot to the end of the array for easier partitioning.

  let i = low; // Starting index for comparison.
  for (let j = low; j < high; j++) {
    if (arr[j].price < pivotValue) { // If the current element's price is less than the pivot's price.
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap the elements.
      i++; // Move the index forward.
    }
  }
  [arr[i], arr[high]] = [arr[high], arr[i]]; // Place the pivot in its correct position in the array.
  return i; // Return the pivot's final position.
};

// A method to choose a better pivot by considering the first, middle, and last elements.
const medianOfThree = (arr: Destination[], low: number, high: number): number => {
  const mid = Math.floor((low + high) / 2); // Calculating the middle index.
  const a = arr[low].price;
  const b = arr[mid].price;
  const c = arr[high].price;

  if ((a > b) !== (a > c)) return low; // Comparing and returning the index of the median value.
  if ((b > a) !== (b > c)) return mid;
  return high;
};

// Insertion sort for small subarrays, which is more efficient than QuickSort for small datasets.
const insertionSort = (arr: Destination[], low: number, high: number): void => {
  for (let i = low + 1; i <= high; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= low && arr[j].price > current.price) { // Shift elements to the right to make room for the current element.
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current; // Place the current element in its correct position.
  }
};

// Main React functional component, handling the display of filtered and sorted destinations.
const Countries: React.FC<{ searchQuery: string; sortOption: string }> = ({ searchQuery, sortOption }) => {
  const [destinations, setDestinations] = useState<Destination[]>([]); // State to hold the list of destinations.
  const [loading, setLoading] = useState(true); // State to manage loading status.
  const [error, setError] = useState<string | null>(null); // State to handle errors.

  useEffect(() => { // Side effect to fetch data when the component is mounted.
    const fetchData = async () => {
      try {
        const res = await fetch('/api/destinations', {
          headers: {
            'X-API-SECRET-KEY': process.env.NEXT_PUBLIC_API_SECRET_KEY || '', // Securing API request with a secret key.
          },
        });
        if (!res.ok) { // Error handling if the response status is not ok.
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();

        if (Array.isArray(data)) { // Ensuring the response data is an array.
          setDestinations(data); // Setting the fetched data to state.
        } else {
          throw new Error('Data is not an array');
        }
      } catch (error) {
        console.error('Error fetching data:', error); // Logging errors to the console for debugging.
        setError(error instanceof Error ? error.message : 'An unexpected error occurred'); // Handling unexpected errors gracefully.
      } finally {
        setLoading(false); // Setting loading to false after the fetch is complete.
      }
    };

    fetchData(); // Initiating data fetch.
  }, []); // Empty dependency array means this effect runs only once on component mount.

  if (loading) { // Conditional rendering based on loading state.
    return <p>Loading...</p>; // Display a loading message while data is being fetched.
  }

  if (error) { // Conditional rendering if an error occurred.
    return <p>{error}</p>; // Display the error message.
  }

  // Filtering destinations based on the search query.
  const filteredDestinations = destinations.filter(destination => 
    destination.title ? destination.title.toLowerCase().includes(searchQuery.toLowerCase()) : false
  );

  // Sorting the filtered destinations based on the sort option.
  const sortedDestinations = sortOption === 'price-asc' 
    ? quickSort(filteredDestinations, 0, filteredDestinations.length - 1) // Sort in ascending order by price.
    : quickSort(filteredDestinations, 0, filteredDestinations.length - 1).reverse(); // Sort in descending order by price.

  // Returning the JSX for the component, rendering each destination as a card.
  return (
    <div className="max-w-screen-lg mx-auto mt-7"> {/* Container for the destinations */}
      {sortedDestinations.map((destination) => (
        <div key={destination._id} className="flex flex-col md:flex-row shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 mb-6">
          {/* Card layout for each destination with hover effects */}
          <div className="flex-1 bg-white p-6">
            <h3 className="text-2xl font-bold mb-4 text-font-title" data-testid="title">{destination.title}</h3> {/* Destination title */}
            <p className="text-base mb-2">
              <strong className="text-font-primary">Location:</strong> <span className="text-font-secondary">{destination.location}</span> {/* Location */}
            </p>
            <p className="text-base mb-2">
              <strong className="text-font-primary">Approximate Price:</strong> <span className="text-font-secondary">${destination.price}</span> {/* Price */}
            </p>
            <p className="text-base mb-2">
              <strong className="text-font-primary">Recommended Days:</strong> <span className="text-font-secondary">{destination.days}</span> {/* Recommended days */}
            </p>
            <p className="text-base mb-2 text-font-secondary" data-testid="description">{destination.description}</p> {/* Description */}
            <p className="text-base mb-2">
              <strong className="text-font-primary">Rating:</strong> <span className="text-font-secondary">{destination.rating}/5</span> {/* User rating */}
            </p>
            <p className="text-base mb-2">
              <strong className="text-font-primary">Activities:</strong> <span className="text-font-secondary">{destination.activities.join(', ')}</span> {/* Available activities */}
            </p>
            <p className="text-base mb-2">
              <strong className="text-font-primary">Best Time to Visit:</strong> <span className="text-font-secondary">{destination.bestTime.join(', ')}</span> {/* Optimal visiting time */}
            </p>
            <p className="text-base mb-2">
              <strong className="text-font-primary">Travel Tips:</strong> <span className="text-font-secondary">{destination.tips}</span> {/* Travel tips */}
            </p>
            <p className="text-base">
              <strong className="text-font-primary">Local Cuisine:</strong> <span className="text-font-secondary">{destination.cuisine}</span> {/* Local food specialties */}
            </p>
          </div>
          <div className="flex-1 h-64 md:h-auto relative" data-testid="image-container"> {/* Image container with adaptive height */}
            <Image src={destination.imageUrl} alt={destination.title} layout="fill" objectFit="cover" data-testid="image" /> {/* Destination image */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries; // Exporting the component for use in other parts of the application.
