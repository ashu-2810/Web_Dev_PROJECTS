import React, { useEffect, useState } from 'react'
import "./style.css";
import axios from 'axios';

const Main = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res => {
            setItems(res.data.meals)
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    

    const itemsList = items.map(({strMeal, strMealThumb, idMeal}) => {
        return (
            <>
                <div className='card'>
                    <img src={strMealThumb} alt='pic' />
                    <div className='content'>
                        <p>{strMeal}</p>
                        <p>#{idMeal}</p>
                    </div>
                </div>
            </>
        )
    });

    return <div className='items-container'>{ itemsList}</div>
}

export default Main