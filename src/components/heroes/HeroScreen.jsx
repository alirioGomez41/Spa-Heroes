import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const { heroeId } = useParams();
    
    // const hero = getHeroesById(heroeId);
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId])
    if(!hero){
        return <Redirect to="/" />
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {
       if(history.length <= 2){
            history.push('/')
       }else{
            history.goBack();
            // Para regresar a la pagina anterior
       }
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} 
                    className={'animate__animated animate__fadeInLeft'}
                    alt={alter_ego} 
                    width="250" 
                    /> 
                       
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Alger ego: <b>{ alter_ego }</b>
                    </li>
                    <li className="list-group-item">
                        Publisher: <b>{ publisher }</b>
                    </li>
                    <li className="list-group-item">
                        First Apparance: <b>{ first_appearance }</b>
                    </li>
                </ul>
                <h5>Characters</h5>
                <p> { characters }</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
