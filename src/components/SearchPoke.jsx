import React, { useState } from 'react'

const SearchPoke = ({ setQueryPoke, setQueryType, setIsSearchPoke }) => {

    const [valueSearchPoke, setValueSearchPoke] = useState("");
    const [valueSearchType, setValueSearchType]=useState("");

    const handleValueSearchPoke = (e) => {
        setValueSearchPoke(e.target.value);
        setIsSearchPoke(true);
    }

    const handleValueSearchType=(e)=>{
        setValueSearchType(e.target.value);
        setIsSearchPoke(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setQueryPoke(valueSearchPoke);
        setQueryType(valueSearchType);
        setValueSearchPoke("");
        setValueSearchType("");
    }


    return (
        <form action="" onSubmit={handleSubmit}>
            <div >
                <label htmlFor="">Buscar por Pokemon -- </label>
                <input value={valueSearchPoke} onChange={handleValueSearchPoke} type="text" />
                <button>Search</button>
            </div>
            <div>
                <label htmlFor="">Buscar por Tipo -------- </label>
                <input value={valueSearchType} onChange={handleValueSearchType} type="text" />
                <button>Search</button>
            </div>


        </form>
    )
}

export default SearchPoke
