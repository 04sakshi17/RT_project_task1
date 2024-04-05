import Character from './Character';
 //import { useState } from 'react';
 import { useEffect, useState } from 'react';
function List() {
// return <h2>Characters</h2>;
const [loading, setLoading] = useState(true);
const [characters, setCharacters] = useState([]);
useEffect(() => {
async function fetchData() {
const data = await fetch(
'https://rickandmortyapi.com/api/character');
const { results } = await data.json();
setCharacters(results);
setLoading(false);
}
fetchData();
}, [characters.length]);
// return (
//  <div>
//  <h2>Characters</h2>
//  <Character />
//  <Character />
//  </div>
//  );
// }

return (
<div>
<h2>Characters</h2>
<div className='row'>
 {loading ? (
 <div>Loading...</div>
 ) : (
 characters.map((character) => (
 <Character
 key={character.id}
 name={character.name}
 origin={character.origin}
 image={character.image}
 />
 ))
 )}
</div>
</div>
);
}
export default List;