import React, { useState, useEffect } from 'react';
import ProviderCard from './ProviderCard';

function ProviderList() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Adjust the API URL as needed (e.g., using environment variables)
    fetch('/api/providers')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProviders(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching providers:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading healthcare providers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {providers.length === 0 ? (
        <p>No healthcare providers found.</p>
      ) : (
        providers.map(provider => (
          <ProviderCard key={provider.id} provider={provider} />
        ))
      )}
    </div>
  );
}

export default ProviderList;
