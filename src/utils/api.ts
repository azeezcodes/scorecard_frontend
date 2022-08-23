const url = process.env.REACT_APP_BACKEND_URI;

export const loginUser = async(email: string, password: string) => {
    // let token = localStorage.getItem('token')
    try {
        const resp = await fetch(`${url}/users/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                // authorization: token
            },
            body: JSON.stringify({email, password})
        })
        return resp.json()
    }catch(err) {
        console.log(err)
    }
}