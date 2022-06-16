import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div className=''>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-2 overflow-y-scroll w-60  bg-gray-200 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='hover:btn-secondary hover:text-accent rounded-md mb-2'><Link to='/dashboard' >My PC</Link></li>
                        <li className='hover:btn-secondary hover:text-accent rounded-md mb-2'><Link to='/dashboard/addReview'>Add a Review</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
