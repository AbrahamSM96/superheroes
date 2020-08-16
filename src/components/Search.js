import React, { useState } from 'react';
import '../assets/styles/components/Search.scss';
import { useSearchCharacter } from '../hooks/useSearchCharacter';
export const Search = () => {
  const { query, setQuery } = useSearchCharacter('');
  const [form, setForm] = useState({
    form: { search: '' },
  });
  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="search">
      <form
        className="container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>Search superheroe</h1>
        <input type="text" name="Searcher" placeholder="Search..." onChange={(e) => handleInput(e)} />
      </form>
    </div>
  );
};
