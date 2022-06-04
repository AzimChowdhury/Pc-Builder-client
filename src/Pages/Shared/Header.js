import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import userIcon from '../../Images/userIcon.png';

function Header() {
    const [user] = useAuthState(auth);
    
    const menu = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/build'>Build</Link></li>
            <li><Link to='/reviews'>Reviews</Link></li>
            <li>
                {
                    user ?
                        // <img className='w-20' src={userIcon} alt='' />
                        <div class="dropdown dropdown-hover">
                            <label tabIndex="0" class="">
                                <img className='w-14 rounded-full' src={user.photoURL ? user.photoURL : userIcon} alt='' />
                            </label>
                            <ul tabIndex="0" class="dropdown-content menu p-2 mt-48 shadow bg-secondary rounded-box w-52">
                                <li><p>{user?.displayName}</p></li>
                                <li><p>{user?.email}</p></li>
                                <li><p><button onClick={() => {signOut(auth); localStorage.removeItem('jwt-token')}}>Sign Out</button></p></li>
                            </ul>
                        </div>
                        :
                        <Link to='/signIn'>Sign In</Link>
                }
            </li>
        </>
    )
    return (
        <div class="navbar h-20 bg-secondary">
            <div class="navbar-start mx-24">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary text-accent rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <p class="btn btn-ghost normal-case font-bold text-5xl text-accent">
                    <Link to='/'>PC builder</Link>
                </p>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal text-xl text-accent p-0 mr-32">
                    {menu}
                </ul>
            </div>
        </div>
    )
}

export default Header;
