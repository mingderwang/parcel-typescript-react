import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
 
import useHackerNewsApi from './useHackerNewsApi';

function App() {
  const [data, setData] = useState({ hits: [] });
  const [{ data, isLoading, isError }, doFetch] = useHackerNewsApi();
  const [query, setQuery] = useState('redux');
 
  return (
    <Fragment>
      <form onSubmit={event => {
        doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
 
        event.preventDefault();
      }}>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
 
export default App;