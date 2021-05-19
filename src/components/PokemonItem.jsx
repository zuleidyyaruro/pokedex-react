import React from 'react'

const PokemonItem = ({name, type, url}) => {
    return (
        <div>
            <h3>{name}</h3>
            <h6>{type}</h6>
            <img src={url} alt="" />
            
        </div>
    )
}

export default PokemonItem
