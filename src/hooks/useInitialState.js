import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [result, setResult] = useState({ sprites: [] });
  const arr = [];

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setResult(
        data.results.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((data) => {
              const myVar = data.sprites.front_default
              setResult(myVar)
            })
          // .then((allpokemon) => arr.push(allpokemon));
          //console.log(allpokemon)
        }),
      ));
  }, []);
  return result;
}

export default useInitialState;
