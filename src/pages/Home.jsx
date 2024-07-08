import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../LogInSlice'; 
import { Link } from 'react-router-dom';


export default function Home() {
    const [email, setEmail] = useState('');


    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);


  return (
    <>
      <div className="mx-44 mt-28  block rounded-lg bg-base-300 p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
  <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
  <p className="mb-4 text-base">
            <div>
                {isLoggedIn ? <p>Welcome! You are logged in as {email}.</p> : <p>Please login.</p>}
            </div>
  </p>

               <button
                className='bg-primary rounded h-9 w-28 text-white'
                aria-label="Logout"
                onClick={() => dispatch(logout())}
                disabled={!isLoggedIn}
                >
                Logout
                </button>
        <Link to="/">
        <button
          className='bg-primary rounded mx-2 h-9 w-44 text-white'
          aria-label="Logout"
         
        >
          back to login page
        </button>
        </Link> 
</div>

    </>
  )
}
