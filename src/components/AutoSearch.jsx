import React, { useState } from 'react';

const AutoSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to fetch search results based on the input
  const fetchSearchResults = async (input) => {
    // Perform an API call or fetch data from your database
    // For example, you can use the fetch API to send a request to your backend
    // and retrieve search results based on the input
    try {
      const response = await fetch(`your_api_endpoint?q=${input}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data.results); // Assuming your API returns an array of search results
    } catch (error) {
      console.error('Error fetching search results:', error.message);
    }
  };

  // Function to handle input change and fetch search results
  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchTerm(input);
    fetchSearchResults(input);
  };

  return (
    <div>
      <h1>Auto Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li> // Assuming each result has an id and name
        ))}
      </ul>
    </div>
  );
};

export default AutoSearch;
