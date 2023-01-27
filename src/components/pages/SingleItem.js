import React from 'react';


function SingleItem({meal}) {
    // console.log(meal);
    return ( 
        <>
        <h1>{meal.name}</h1>
        <img src={meal.imageUrl} alt={meal.name} width="100vw" />
        <p>{meal.description}</p>
        <p>{meal.ingredients}</p>
        <button>Select Item</button>
        </>
     );
}

export default SingleItem;