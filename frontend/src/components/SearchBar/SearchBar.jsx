import './search-bar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAxios from '../../hooks/useAxios';
import axios from 'axios'
export default function SearchBar() {


    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [isOnFocus, setIsOnFocus] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        if (searchValue) {
            if (searchValue === "movies") {
                axios.get('https://djangoproject133.herokuapp.com/api/movie/movie/').then(res => setData(res.data));
            }

            else if (searchValue === "celebs") axios.get('https://djangoproject133.herokuapp.com/api/movie/participant/').then(res => setData(res.data));
        }
    }, [searchValue])

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            if (searchValue === "movies")
                return value.title.toLowerCase().includes(searchWord.toLowerCase());
            else return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            console.log(newFilter)
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
                <select className='searchBySelect' onChange={e => { setSearchValue(e.target.value); console.log(e.target.value) }}>
                    <option value={"none"} defaultValue={true}>Search by</option>
                    <option value={"movies"}>Movies</option>
                    <option value={"tvshows"}>TV shows</option>
                    <option value={"celebs"}>Actors</option>
                </select>
                <input
                    type="text"
                    placeholder='Search'
                    style={{ color: "white", width: "100%" }}
                    onChange={handleFilter} value={wordEntered}
                    onFocus={() => setIsOnFocus(true)}
                    onBlur={() => setTimeout(() => {
                        setIsOnFocus(false)
                    }, 1000)}
                    onKeyUp={e => {
                        if (e.key === "Enter") {
                            navigate('/search-results', { state: { data: filteredData, type: searchValue } })
                        }
                    }}
                />

                {filteredData.length === 0 ? (
                    <FontAwesomeIcon icon={faSearch} className="icon" />
                ) : (
                    <FontAwesomeIcon icon={faClose} className="icon" onClick={clearInput} />
                )}
            </div>
            {(filteredData.length !== 0 && isOnFocus) && <div className="searchResults">
                {filteredData.map(el => {
                    if (searchValue === 'movies') 
                        return <Link to={`/movie/${el.url.substr(el.url.length - 2).substr(0, 1)}`} className='searchResultItem' target={'_blank'}> <p>{el.title}</p></Link>
                    else return  <Link to={`/actor/${el.url.substr(el.url.length - 2).substr(0, 1)}`} className='searchResultItem' target={'_blank'}> <p>{el.name + " " + el.last_name}</p></Link>
                })}
            </div>}
        </div>
    )
}
