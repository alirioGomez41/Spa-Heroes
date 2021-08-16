import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {
    // const heroes = getHeroesByPublisher( publisher );

    const heroes  = useMemo(() => getHeroesByPublisher( publisher ), [publisher])
    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(heroe => (
                    <HeroCard 
                        key={ heroe.id }
                        { ...heroe }>

                        {/* Con esto 3 puntos le decimos que le 
                        enviamos todas sus propiedades */}
                    </HeroCard>
                ))
            }
        </div>
    )
}
