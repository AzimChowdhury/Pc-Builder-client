import React from 'react'
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import userIcon from '../../Images/userIconBlack.png';

function Reviews() {
    // const { data: reviews, isLoading } = useQuery('reviews', () => fetch('http://localhost:5000/reviews').then(res => res.json()));
    const {data:review,isLoading}=useQuery('reviews',()=>fetch('http://localhost:5000/reviews').then(res=>res.json()));

    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='mx-24 '>
            <h2 className='text-secondary text-3xl font-semibold text-center m-16'>What client say about us ?</h2>

            <div className='grid grid-cols-3 gap-10'>
                {
                    review.map(r => <>
                        <div class="card  bg-base-100 h-48 shadow-2xl  shadow-slate-500 shadow-slate-500	 ">
                            <div class="card-body ">
                                <div className='flex'>
                                <img className='w-8 mr-2' src={userIcon} alt=''/>
                                <h2 class="card-title">{r.name}</h2>
                                </div>

                                <p>Ratings:  {r.ratings}</p>
                                <p> {r.comment}</p>

                            </div>
                        </div>
                    </>)
                }
            </div>

        </div>
    )
}

export default Reviews;
