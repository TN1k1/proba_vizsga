import React, { useState } from 'react';

function Character({characterData}) {

    const [showDetails, setShowDetails] = useState(false);
  
    return (
        <div>
        <h2>{characterData.name}</h2>
        <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Show less' : 'Show more'}
        </button>
        {showDetails && <p>{characterData.details}</p>}
        </div>
    )
}

export default Character