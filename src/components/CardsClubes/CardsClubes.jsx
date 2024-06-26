import React, { useState, useEffect } from 'react';
import './CardsClubes.css';
import Card from '../Card/Card'

const ClubList = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch('http://localhost:5000/registro/clubs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setClubs(data);
      } catch (error) {
        console.error('Error fetching club data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="club-list">
      {clubs.map((club) => (
        <Card
          key={club._id}
          id={club._id}
          imagen={club.imagenPerfil}
          titulo={club.nombreClub}
          direccion={club.direccion}
          localidad={club.localidad}
        />
      ))}
    </div>
  );
};

export default ClubList;