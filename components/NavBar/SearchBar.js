import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import {
  BsSearch,
  BsFillTagFill,
  BsFillPersonFill,
  BsBell,
} from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Hamburger from "hamburger-react";
import Dropdown from './Dropdown'
export default function SearchBar() {

    const [search, setSearch] = useState("")
    const [focused, setFocused] = useState(false)
    const [filteredData, setFilteredData] = useState([])
    const data = [
        {name: "Sofa"}, {name: "Couch"}, {name : "Sleeper Sofa"}, {name: "Pillow"}
    ]

    const onTyping = (value) => {
        setSearch(value)
        console.log("theval", value)
        let newData = data.filter((item, index) => {
            if(value != "" && value != null && value != undefined){
                console.log(item.name, "val", value)
                return item.name.toLowerCase().includes(value.toLowerCase())
            }
        })
        setFilteredData(newData)
    }

  return (
    <Wrapper>
      <Search placeholder="Search" value={search} onChange={(text) => onTyping(text.target.value)} onBlur={() => setFocused(false)} onFocus={() => setFocused(true)} />
      <Button>
        <BiSearch />
      </Button>
      <Dropdown focused={focused} data={filteredData || []} />
    </Wrapper>
  );
}
const Wrapper = Styled.div`
    width:100%;
    height:34px;
    margin-right: 2px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Helvetica', 'Arial', sans-serif;
    position: relative;
    @media ${(props) => props.theme.mobileS} {
        margin-right: 12px;
}
`;

const Search = Styled.input`
    border: 1px solid #dadcdf;
    border-radius: 4px 0 0 4px;
    background-color: #f9fafb;
    padding: 0 10px;
    font-size: 16px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

const Button = Styled.button`
    background-color: transparent;
    height: 100%;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0 4px 4px 0;
    transform: translateX(-1px);
    color: black;
    font-size: 30px;
    position: absolute;
    right: 0;
    display: none;
    @media ${(props) => props.theme.mobileL} {
        background-color: #ff1f2c;
        color: white;
}
@media ${(props) => props.theme.mobileS} {
        display: flex;
}
    /* outline: 2px solid black; */
`
