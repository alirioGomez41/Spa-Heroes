import React, { useMemo } from 'react'
import queryString from 'query-string';
// import { heroes } from '../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../selectors/getHeroByName';
export const SearchScreen = ({ history }) => {

    //para tener todo los quierys de nuestro url
    const location = useLocation(); // viene en los props, para buscar cosas de nuestras rutas como los querys
    const { q = '' } = queryString.parse( location.search )//Libreria que nos ayuda  a obtener los querys


    const [formValues, handleInputChange] = useForm({
        searchText:q
    });

    const { searchText } = formValues;

    // Como esto se va a ejecutar cada vez que se renderiza la aplicacion podemos usar un useCallback
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
        // Enviamos el query por url
    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange} 
                        />

                        <button
                            type="submit"
                            className="btn btn-primary mt-3"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
