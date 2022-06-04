import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Spinner from '../Shared/Spinner';

function Ram() {
    const { data: ram, isLoading } = useQuery('ram', () => fetch('http://localhost:5000/rams').then(res => res.json()));
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='mx-24 '>
            <h2 className='text-secondary text-3xl font-semibold text-center m-16'>Choose best ram for your pc</h2>
            <div className=''>
                <div className='grid grid-cols-4 gap-10'>
                    {
                        ram.slice(0, 4).map(r => <>
                            <div class="card  bg-base-100 h-96 shadow-2xl  shadow-slate-500  ">
                                <figure class="px-10 pt-10">
                                    <img className='w-48' src={r.img} alt="Shoes" class="rounded-xl" />
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">{r.name}</h2>

                                    <p>$ {r.price}</p>

                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
            <div className='w-48 mx-auto my-8'>
               <Link to='/products/ram'> <button className='btn btn-primary font-light text-white'>See all rams</button></Link>
            </div>
        </div>
    )
}

export default Ram;
