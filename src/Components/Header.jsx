import React from 'react'
import slide from '../img/rickandmorty1.jpg'
import { useDispatch } from 'react-redux'
import { setFilterChar } from '../redux/charSlice';

const Header = () => {
    const dispatch=useDispatch();
    const handleInputChange =(e)=>{
        const inputValue = e.target.value;
        dispatch(setFilterChar(inputValue))
    }
    return (
        <div className='header'>
            <img src={slide} className='slide' alt="" />
            <div className="text">
                <h1>I'm Pickle Rick!</h1>
                <input type="text" placeholder='🔍 Search Icons..' className='myInput' onChange={handleInputChange} />
            </div> 
        </div>
    )
}

export default Header