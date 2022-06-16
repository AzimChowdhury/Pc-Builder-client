import React from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Spinner from '../Shared/Spinner';

function Ssd() {
    const { data: ssd, isLoading } = useQuery('ssd', () => fetch('http://localhost:5000/ssds').then(res => res.json()));
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='mx-24 '>
            <h2 className='text-secondary text-3xl font-semibold text-center m-16'>Choose best ssd for your pc</h2>
            <div className=''>
                <div className='grid grid-cols-4 gap-10'>
                    {
                        ssd.slice(0, 4).map(s => <>
                            <div class="card  bg-base-100 h-96 shadow-2xl  shadow-slate-500  ">
                                <figure class="px-10 pt-10">
                                    <img className='w-48' src={s.img} alt="Shoes" class="rounded-xl" />
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">{s.name}</h2>

                                    <p>$ {s.price}</p>

                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
            <div className='w-40 mx-auto my-8'>
                <Link to='/products/ssd'><button className='btn btn-secondary  text-accent'>See all ssd</button></Link>
            </div>
        </div>
    )
}

export default Ssd;
