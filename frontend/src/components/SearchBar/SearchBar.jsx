import './search-bar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect} from 'react'

export default function SearchBar() {
    const movieData = [{
        title: "interstellar"
    }, {
        title: "forrest gump"
    }, {
        title: "idk"
    }, {
        title: "interstellar"
    }, {
        title: "interstellar"
    }, {
        title: "interstellar"
    }]

    const tvShowsData = [{
        title: "stranger things"
    }, {
        title: "peaky blinders"
    }, {
        title: "squid game"
    }, {
        title: "twin peaks"
    }, {
        title: "breaking bad"
    }, {
        title: "the offiCe"
    }]

    const celebData = [{
        title: "Millie Bobby Brown"
    }, {
        title: "Noah Schnapp"
    }, {
        title: "Fin Wolfhard"
    }, {
        title: "Jimmy Fallon"
    }, {
        title: "Harry Styles"
    }, {
        title: "Tom Oddel"
    }]

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        let data = [];
        if (searchValue === "movies") data = [...movieData];
        else if (searchValue === "tvshows") data = [...tvShowsData];
        else if (searchValue === "celebs") data = [...celebData];
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div className="input-container">
            <div className="searchMainContainer">
                <select className='searchBySelect' onChange={e => {setSearchValue(e.target.value); console.log(e.target.value)}}>
                    <option value={"none"}  defaultValue={true}>Search by</option>
                    <option value={"movies"}>Movies</option>
                    <option value={"tvshows"}>TV shows</option>
                    <option value={"celebs"}>Celebs</option>
                </select>
                <input 
                type="text" 
                placeholder='Search' 
                style={{ color: "white", width: "100%" }} 
                onChange={handleFilter} value={wordEntered} 
                onFocus={() => setIsOnFocus(true)} 
                onBlur={()=>setTimeout(() => {
                    setIsOnFocus(false)
                }, 1000) }/>

                {filteredData.length === 0 ? (
                    <FontAwesomeIcon icon={faSearch} className="icon" />
                ) : (
                    <FontAwesomeIcon icon={faClose} className="icon" onClick={clearInput} />
                )}
            </div>
            {(filteredData.length !== 0 && isOnFocus) && <div className="searchResults">
                {filteredData.map(el => {
                    return (<Link to='/movie/1' className='searchResultItem' target={'_blank'}> <p>{el.title}</p></Link>)
                })}
            </div>}
        </div>
    )
}
