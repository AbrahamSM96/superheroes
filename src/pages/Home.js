import React from 'react';
import { useSearchCharacter } from '../hooks/useSearchCharacter';
import { Search } from '../components/Search';
import { Card } from '../components/Card';
export const Home = () => {
  const { data, error, loading } = useSearchCharacter();

  data.results.map((char) => {
    const name = char.name;
    console.log('name', name);
    console.log('character', char);
  });

  return (
    <div>
      <Card />
      <Search />
    </div>
  );
};
