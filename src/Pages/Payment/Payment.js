import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';




function Payment() {
    const { id } = useParams();
    const { data, isLoading } = useQuery("payment", () => fetch(`http://localhost:5000/payment/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${localStorage.getItem("jwt-token")}`
        }
    }).then(res => res.json()))
    console.log(data)



    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className='w-3/5 h-[550px] overflow-scroll bg-gray-200'>
                <h2 className='text-2xl text-center font-bold text-secondary pt-3'>My PC <br />
                    <span className='mr-10'> Name: {data.name} </span> <span>Total: $ {data.total}</span></h2>

                <div class="overflow-x-auto">
                    <table class="table table-zebra w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Processor</th>
                                <td> {data.configuration.processor.name}</td>
                                <td>$ {data.configuration.processor.price}</td>
                                
                            </tr>
                            <tr>
                                <th>Motherboard</th>
                                <td> {data.configuration.motherboard.name}</td>
                                <td>$ {data.configuration.motherboard.price}</td>
                                
                            </tr>
                            <tr>
                                <th>Ram</th>
                                <td> {data.configuration.ram.name}</td>
                                <td> $ {data.configuration.ram.price}</td>
                            </tr>
                            <tr>
                                <th> SSD</th>
                                <td> {data.configuration.ssd.name}</td>
                                <td> $ {data.configuration.ssd.price}</td>
                            </tr>
                            <tr>
                                <th>powerSupply</th>
                                <td> {data.configuration.powerSupply.name}</td>
                                <td> $ {data.configuration.powerSupply.price}</td>
                            </tr>
                            <tr>
                                <th>Casing</th>
                                <td> {data.configuration.casing.name}</td>
                                <td> $ {data.configuration.casing.price}</td>
                            </tr>
                            <tr>
                                <th>Monitor</th>
                                <td> {data.configuration.monitor.name}</td>
                                <td> $ {data.configuration.monitor.price}</td>
                            </tr>
                            <tr>
                                <th> Keyboard</th>
                                <td> {data.configuration.keyboard.name}</td>
                                <td> $ {data.configuration.keyboard.price}</td>
                            </tr>
                            <tr>
                                <th>Mouse</th>
                                <td>{data.configuration.mouse.name}</td>
                                <td> $ {data.configuration.mouse.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
            <div>

            </div>

        </div>
    )
}

export default Payment;