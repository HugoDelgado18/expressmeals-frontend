import e from 'cors';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Subscription({currentUser, setCurrentUser}) {
    const [borderColor, setBorderColor] = useState("white");
    const [preference, setPreference] = useState("");
    const [daysAWeek, setDaysAWeek] = useState(0);
    const [totalCost, setTotalCost] = useState(21.94);
    const [editUser, setEditUser] = useState(
        {firstname: currentUser.firstname, 
            lastname: currentUser.lastname,
            username: currentUser.username,
            email: currentUser.email,
            password: currentUser.password,
            address: currentUser.address,
            subscribed: currentUser.subscribed,
            subscriptionType: currentUser.subscriptionType,
            vegan: currentUser.vegan,
            vegetarian: currentUser.vegetarian,
            recipesPerWeek: currentUser.recipesPerWeek,
            orderTotal: currentUser.orderTotal,
            meals: currentUser.meals
        }
    );

    const navigate = useNavigate();

    const handlePricePerMeal = (number) => {
        setDaysAWeek(number);
        if (number == 1){
            setEditUser({...editUser, recipesPerWeek: 1, orderTotal: 21.94});
        } else if (number == 2) {
            setEditUser({...editUser, recipesPerWeek: 2, orderTotal: 23.94, subscribed: true});
        } else if (number == 3){
            setEditUser({...editUser, recipesPerWeek: 3, orderTotal: 30.32});
        } else if (number == 4){
            setEditUser({...editUser, recipesPerWeek: 4, orderTotal: 36.92});
        } else if (number == 5){
            setEditUser({...editUser, recipesPerWeek: 5, orderTotal: 44.28});
        }
        // setEditUser([{...editUser, subscribed: true}]);
    }

    const handleFoodPreference = (preference) => {
        setPreference(preference);

        if(preference == "Vegetarian"){
            setEditUser({...editUser, vegetarian: true, vegan: false});
        } else if (preference == "Vegan"){
            setEditUser({...editUser, vegan: true, vegetarian: false});
        } else if (preference == "Meat & Veggies"){
            setEditUser({...editUser, vegan: false, vegetarian: false});
        }
    }

    const handleSubmition = async (e) => {
        e.preventDefault();

        const res = await fetch(`http://localhost:3005/user/${currentUser.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editUser)
        });
        if(res.status === 200){
            setCurrentUser(editUser);
        }

        navigate("/Order");

    }


    console.log(preference);
    console.log(daysAWeek);
    console.log(editUser.orderTotal);
    console.log(currentUser);
    console.log(editUser);
    console.log(editUser.recipesPerWeek);
    console.log(editUser.vegetarian);
    return ( 
        <>
        {/* <h1 className='sub-head-txt'>Subscription</h1> */}

        <div className='sub-container' >
        <div >
            <form className='sub-form-1' onSubmit={handleSubmition}>
            <div>
            <div className='signup-form-label'>
            <p style={{textAlign: "center"}}>1. Choose your preference:</p>
            <button type='button' className='pref-btn-1' onClick={() => handleFoodPreference("Meat & Veggies")}>Meat & Veggies</button>
            <button type='button' className='pref-btn-2' onClick={() => handleFoodPreference("Vegetarian")}>Vegetarian</button>
            <button type='button' className='pref-btn-3' onClick={() => handleFoodPreference("Vegan")}>Vegan</button>
            <button type='button' className='pref-btn-4' onClick={() => handleFoodPreference("Pescatarian")}>Pescatarian</button>
            </div>
            <p style={{textAlign: "center"}}>2. How many days a week:</p>
            <div style={{alignItems: "center"}} className="week-selection">
            <button type='button' className='meal-per-week1' onClick={() => handlePricePerMeal(1)}>1</button>
            <button type='button' className='meal-per-week2' onClick={() => handlePricePerMeal(2)}>2</button>
            <button type='button' className='meal-per-week3'onClick={() => handlePricePerMeal(3)}>3</button>
            <button type='button' className='meal-per-week4' onClick={() => handlePricePerMeal(4)}>4</button>
            <button type='button' className='meal-per-week5' onClick={() => handlePricePerMeal(5)}>5</button>
            </div>

            <br/>
            <div className='divider'></div>
            <p><b>{preference}</b></p>
            <p>{daysAWeek}</p>

            <div className='divider'></div>
            <div style={{display: "flex", justifyContent: "space-between", marginRight: "10%"}}>
                <p>Box price</p>
                <p>${editUser.orderTotal}</p>
            </div>
                <div style={{marginTop: "1%", marginLeft: "35%"}}>
                <button type="submit" role="button" className="btn btn-success btn-lg">Select this plan</button>
                </div>
            </div>
            
            </form>
          
        </div>
     
        </div>
        </>
     );
}

export default Subscription;