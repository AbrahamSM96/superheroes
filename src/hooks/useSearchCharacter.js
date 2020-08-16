import { useState, useEffect } from 'react';

export function useSearchCharacter() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ results: [] });
  const [query, setQuery] = useState('');

  const API = `https://superheroapi.com/api/143654970703543/search/${query}`;
  const proxyurl = 'https://cors-anywhere.herokuapp.com/';
  console.log(query, 'queryy');
  const fetchCharacter = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(proxyurl + API);
      const data = await response.json();
      setData({ results: data.results.slice(0, 1) });
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    fetchCharacter();
  }, []);
  return { error, loading, data, query, setQuery };
}
