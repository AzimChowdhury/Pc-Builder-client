import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Products() {
    return (
        <div>
            <div class="tabs tabs-boxed">
                <Link to='/products' class="tab btn btn-ghost w-1/12">Processor</Link>
                <Link  to='/products/motherboard' class="tab btn btn-ghost w-1/12">Motherboard</Link>
                <Link to='/products/ram' class="tab btn btn-ghost w-1/12">RAM</Link>
                <Link to='/products/ssd' class="tab btn btn-ghost w-1/12">SSD</Link>
                <Link to='/products/powersupplier' class="tab btn btn-ghost w-1/12">Power supplier</Link>
                <Link to='/products/casing' class="tab btn btn-ghost w-1/12">Casing</Link>
                <Link to='/products/monitor' class="tab btn btn-ghost w-1/12">Monitor</Link>
                <Link to='/products/keyboard' class="tab btn btn-ghost w-1/12">Keyboard</Link>
                <Link to='/products/mouse' class="tab btn btn-ghost w-1/12">Mouse</Link>
            </div>
            
                <Outlet></Outlet>
        </div>
    )
}

export default Products;
