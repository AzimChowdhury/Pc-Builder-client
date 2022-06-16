import React from 'react'
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className='lg:flex justify-around'>
            <div className='pl-20 mt-28 font'>
                <h1 className='text-secondary text-7xl font-bold'>BUILD YOUR <br/>
                <span className='text-8xl'>DREAM PC</span></h1>
                <p className='text-xl'>Best products !  Best price !  Best services !</p>
                <Link to='/build'><button className='btn btn-accent text-secondary text-xl mt-8 '>Build now</button></Link>
            </div>
            
            <div className='lg:w-2/4'>
                <img className='w-full' src='https://i.ibb.co/v3kDz4F/done.png' alt='' />
            </div>
        </div>
    )
}

export default Banner;
