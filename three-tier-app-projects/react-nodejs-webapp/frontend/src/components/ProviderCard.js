import React from 'react';

function ProviderCard({ provider }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{provider.name}</h2>
      <p><strong>Specialty:</strong> {provider.specialty}</p>
      <p><strong>Location:</strong> {provider.location}</p>
      <p><strong>Contact:</strong> {provider.contact}</p>
    </div>
  );
}

export default ProviderCard;
