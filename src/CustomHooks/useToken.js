import { useEffect, useState } from "react";


const useToken = (user) => {
    const [token, setToken] = useState('')
    
    useEffect(() => {
        const email = user?.user?.email;
        
        const appUser = { email: email }
        if (email) {
            fetch('http://localhost:5000/user',{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(appUser)
            })
            .then(res=>res.json())
            .then(data=>{
                const token = data.token;
                localStorage.setItem('jwt-token', token)
                setToken(token)
            })
        }
    }, [user])


    return [token]
}

export default useToken;