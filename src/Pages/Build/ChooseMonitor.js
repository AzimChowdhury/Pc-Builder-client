import React from 'react'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Shared/Spinner';

function ChooseMonitor({ monitor, setMonitor }) {
    const { data, isLoading } = useQuery('monitor', () => fetch('http://localhost:5000/monitors').then(res => res.json()))
    const navigate = useNavigate()


    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className=' grid grid-cols-2  gap-10 mx-48 my-10'>
            {data.map(d => <>
                <div className='w-full flex border-2 border-gray-400 rounded-xl'>
                    <img src={d.img} alt='' />
                    <div>
                        <p className='text-2xl font-semibold pr-4 pt-4' >{d.name}</p>
                        <p className='text-xl font-semibold pr-4 pt-2'>price : ${d.price}</p>
                        <button onClick={() => { setMonitor({ name: d.name, price: d.price, id: d._id, img: d.img }); navigate('/build') }} className='btn btn-secondary text-accent mt-3'>Select</button>
                    </div>
                </div>
            </>)}
        </div>
    )
}

export default ChooseMonitor;
