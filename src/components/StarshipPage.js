import React from 'react';
import { Link } from 'react-router-dom';
import './StarshipPage.css';

function StarshipPage(props) {
    const starship = props.getStarship(props.match.params.idx)
    console.log(starship, 'hello this is starship!')
    return(
        <div className='StarshipPage' >
            {starship ? 
                <div className='StarshipPage-starship'>
                    <span>Name:</span>
                    <span>{starship.name}</span>
                    <span>MODEL:</span>
                    <span>{starship.model}</span>
                    <Link to='/'>RETURN</Link>
                </div>
                    : 
                <h3>Loading...</h3>
            }
        </div>        
    )
}

export default StarshipPage;