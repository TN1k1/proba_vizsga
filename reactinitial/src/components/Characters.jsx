import React from 'react';
import Character from './Character';

function Characters({ characters }) {
  return (
    <div>
        {characters
        .map((character, i) => <Character key={i} characterData={character}/>)}
    </div>
  )
}

export default Characters