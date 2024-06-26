import React from 'react'
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'
import {BsMicFill} from 'react-icons/bs'
import SearchList from './SearchList'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function SearchBar() {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchListA, setSearchListA] = useState(false);
  const TitleArray = useSelector(s=>s.videoReducer)?.data?.filter(q=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).map(m=>m.videoTitle)
  // const TitleArray = ['Video1', 'video2', 'Animation Video', 'Movies'].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));

  return (
    <>
      <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
            <div className="searchdiv">
                <input type="text" className='ibox_SearchBar' placeholder='Search'
                onChange={e=> setSearchQuery(e.target.value)}
                onClick={e=>setSearchListA(true)}
                value={searchQuery}
                />
                <Link to={`/search/${searchQuery}`}>
                  <FaSearch className='SearchIcon_SearchBar' onClick={e=>setSearchListA(false)} />
                </Link>
                <BsMicFill className='Mic_SearchBar'/>
                {searchQuery && searchListA &&
                  <SearchList 
                  setSearchQuery = {setSearchQuery}
                  TitleArray = {TitleArray}
                  />
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar
