import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {fetchRick} from '../redux/charSlice';

const Content = () => { 
    const dispatch = useDispatch();
    const rick = useSelector((state) => state.rick);

    useEffect(() => {
        dispatch(fetchRick())
    }, [])
 
    const filteredData = rick.data.filter((item) =>
        item.name.toLowerCase().includes(rick.filterChar.toLowerCase())
    );
     
    
    return (
        <div className='gridSystem'>
            {
                filteredData.map(item => {
                    return (
                        <div key={item.id} className="card">
                            <img src={item.image} width="250px" alt="" />
                            <p>{item.species}</p>
                            <span>{item.name}</span>
                            <p>{item.location.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Content