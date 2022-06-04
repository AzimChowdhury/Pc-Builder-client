import React from 'react'
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';

function AllMotherboard() {
    const { data: motherboard, isLoading } = useQuery('motherboard', () => fetch('http://localhost:5000/motherboards').then(res => res.json()));
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='mx-24 '>
            <h2 className='text-secondary text-3xl font-semibold text-center m-16'>Choose best motherboard for your pc</h2>
            <div className=''>
                <div className='grid grid-cols-4 gap-10'>
                    {
                        motherboard.map(mb => <>
                            <div class="card  bg-base-100 h-96 shadow-2xl  shadow-slate-500  ">
                                <figure class="px-10 pt-10">
                                    <img className='w-48' src={mb.img} alt="Shoes" class="rounded-xl" />
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">{mb.name}</h2>

                                    <p>$ {mb.price}</p>

                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    )
}

export default AllMotherboard;
