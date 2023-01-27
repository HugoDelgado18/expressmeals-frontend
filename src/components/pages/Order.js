import React, {useState, useEffect} from 'react';
import shoppingCart from '../../images/shopping-cart.png';
import SingleItem from './SingleItem';

function Order({meals}) {

    const  handleSubmition= async () => {

    }
    console.log(meals);
    return ( 
        <>
        <div style={{display: "flex", justifyContent: "space-between"}}><h1>Order</h1> <img src={shoppingCart} width="35vw" /></div>
        
        <div className='sub-container' >
        <div >
            <form className='order-form-1' onSubmit={handleSubmition}>
            <div>
            <div className='signup-form-label'>
            <p style={{textAlign: "center"}}>1. Choose your meals:</p>
            {/* {meals.map(meal => <p>meal.name</p>)} */}
            <SingleItem meal={meals[0]} />
            <SingleItem meal={meals[1]} />
            <SingleItem meal={meals[2]} />
            <SingleItem meal={meals[3]} />
            {/* <button type='button' className='pref-btn-1' onClick={() => handleFoodPreference("Meat & Veggies")}>Meat & Veggies</button>
            <button type='button' className='pref-btn-2' onClick={() => handleFoodPreference("Vegetarian")}>Vegetarian</button>
            <button type='button' className='pref-btn-3' onClick={() => handleFoodPreference("Vegan")}>Vegan</button>
            <button type='button' className='pref-btn-4' onClick={() => handleFoodPreference("Pescatarian")}>Pescatarian</button> */}
            </div>
            {/* <p style={{textAlign: "center"}}>2. How many days a week:</p>
            <div style={{alignItems: "center"}} className="week-selection"> */}
            {/* <button type='button' className='meal-per-week1' onClick={() => handlePricePerMeal(1)}>1</button>
            <button type='button' className='meal-per-week2' onClick={() => handlePricePerMeal(2)}>2</button>
            <button type='button' className='meal-per-week3'onClick={() => handlePricePerMeal(3)}>3</button>
            <button type='button' className='meal-per-week4' onClick={() => handlePricePerMeal(4)}>4</button>
            <button type='button' className='meal-per-week5' onClick={() => handlePricePerMeal(5)}>5</button> */}
            {/* </div> */}

            <br/>
            {/* <div className='divider'></div>
            <p><b>{preference}</b></p>
            <p>{daysAWeek}</p>

            <div className='divider'></div>
            <div style={{display: "flex", justifyContent: "space-between", marginRight: "10%"}}>
                <p>Box price</p>
                <p>${editUser.orderTotal}</p>
            </div> */}
                <div style={{marginTop: "1%", marginLeft: "35%"}}>
                <button type="submit" role="button" className="btn btn-success btn-lg">Confirm Meals</button>
                </div>
            </div>
            
            </form>
          
        </div>
     
        </div>
        </>
     );
}

export default Order;