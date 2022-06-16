import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import show from '../../Images/view.png';
import hide from '../../Images/hide.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';
import gIcon from '../../Images/gIcon.png';
import useToken from '../../CustomHooks/useToken';

function SignIn() {
    const [view, setView] = useState(false);
    const location = useLocation()
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

    }
    const from = location?.state?.from?.pathname || '/'
    const [token]=useToken(user||gUser)
    if (token) {
        navigate(from, { replace: true })
    }
    if (loading ||gLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='w-3/12 mx-auto bg-gray-200 p-6 mt-8 rounded-lg'>
            <form onSubmit={handleSubmit}>
                <h2 className='text-3xl text-center font-semibold text-primary'>Sign In</h2>
                <p className='pt-6'> Email :
                    <input type="email" required placeholder="email" name='email' class="input input-bordered text-xl input-md w-full " />
                </p>
                <p className='pt-6'>Password :
                    <label className='btn btn-ghost btn-xs' onClick={() => setView(!view)}>
                        <img className='w-4' src={view ? show : hide} alt='' />
                    </label>
                    <input type={view ? "text" : 'password'} required placeholder="password" name='password' class="input text-xl input-bordered input-md w-full " />
                </p>
                <p className='text-red-600'>{error && error.message}</p>
                <p className='text-red-600'>{gError && gError.message}</p>
                <small><p className='py-4'>First time in pc builder ? <Link to='/signup'>Sign up now</Link></p></small>
                <input type='submit' value='Sign In' className='w-full btn btn-secondary text-accent font-light text-xl' />
            </form>
            <div class="divider">or</div>
            <button onClick={()=>signInWithGoogle()}  className=' mt-2 w-full btn btn-secondary text-accent font-light text-xl' >
                <img className='w-6 mr-4' src={gIcon} alt=''/>
                Sign in with Google
            </button>
        </div>
    )
}

export default SignIn;
