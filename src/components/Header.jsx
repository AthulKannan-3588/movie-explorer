import React from 'react';

export default function Header() {
  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    color: '#ffc107'  
  };

  return (
    <header className="bg-dark text-white py-3 text-center">
      <h1 style={titleStyle}>Movie Explorer</h1>
    </header>
  );
}
