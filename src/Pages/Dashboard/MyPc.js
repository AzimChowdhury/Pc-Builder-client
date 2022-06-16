import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

function MyPc() {
    const [user, loading] = useAuthState(auth)
    const { data, isLoading } = useQuery("myPc", () => fetch(`http://localhost:5000/myPc/${user.email}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("jwt-token")}`
        }
    }).then(res => res.json()))

    if (loading || isLoading) {
        return <Spinner></Spinner>
    }
console.log(data)
    return (
        <div>
            <h2 className='m-3 text-center text-3xl text-secondary'>My Computers</h2>
            <div class="overflow-x-auto overflow-y-scroll">
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Configuration</th>
                            <th>Cost</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            data?.map((d, index) => <>
                                <tr>
                                    <th className='border-gray-300 border'>{index + 1}</th>
                                    <td className='border-gray-300 border'>{d.name}</td>
                                    <td className='border-gray-300 border'>
                                        processor: {d.configuration.processor.name} <br />
                                        motherboard: {d.configuration.motherboard.name} <br />
                                        ram: {d.configuration.ram.name}<br />
                                        ssd: {d.configuration.ssd.name}<br />
                                        powerSupply: {d.configuration.powerSupply.name}<br />
                                        casing: {d.configuration.casing.name}<br />
                                        monitor: {d.configuration.monitor.name}<br />
                                        keyboard: {d.configuration.keyboard.name}<br />
                                        mouse: {d.configuration.mouse.name}<br />
                                    </td>
                                    <td className='border-gray-300 border'>$ {d.total}</td>
                                    <td className='border-gray-300 border'>{d.trnxId ? d.trnxId : 
                                    <Link to={`/payment/${d._id}`}><button className='btn btn-secondary text-accent btn-xs font-thin'>Pay now</button></Link>
                                    }</td>
                                </tr>
                            </>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyPc;
