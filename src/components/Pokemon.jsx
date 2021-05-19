import React, { useState, useEffect } from 'react';
import getPoke from "../services/getPoke";
import PokemonItem from './PokemonItem';

const Pokemon = ({ name, type, url, isSearchPoke }) => {

    const [getPokes, setGetPokes] = useState({})

    useEffect(() => {
        getPoke(name).then(data => setGetPokes(data))
    }, [name]);

    return (
        <div>
            {
                isSearchPoke ?

                    <PokemonItem
                        name={name}
                        type={type}
                        url={url}
                    />
                    :
                    getPokes.sprites &&
                    <PokemonItem
                        name={getPokes.name}
                        url={getPokes.sprites.front_default}
                    />


            }
        </div>
    )
}

export default Pokemon
