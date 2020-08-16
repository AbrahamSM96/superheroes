import React, { useEffect } from 'react';
import '../assets/styles/components/Card.scss';
import { useSearchCharacter } from '../hooks/useSearchCharacter';

export const Card = () => {
  const { data, error, loading } = useSearchCharacter();

  return (
    <div className="main">
      <div className="info">
        <div className="title">
          {data.results.map((character) => {
            return <h1 key={character.id}>{character.name}</h1>;
          })}
        </div>

        <div className="description">
          {data.results.map((character) => {
            return [
              <p key={character.id}>{character.biography['full-name']}</p>,
              <p>{character.biography['place-of-birth']}</p>,
              <p>{character.biography.publisher}</p>,
            ];
          })}
        </div>
      </div>

      <div className="picture">
        {data.results.map((character) => {
          return <img key={character.id} src={character.image.url} alt={character.name} />;
        })}
      </div>
    </div>
  );
};
