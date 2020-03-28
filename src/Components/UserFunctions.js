import axios from 'axios'

export const register = newUser => {
    return axios
        .post('http://127.0.0.1:8000/api/register', newUser, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios
        .post(
            'http://127.0.0.1:8000/api/login',
            {
                email: user.email,
                password: user.password
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
     //       console.log(localStorage.getItem('usertoken'))
          console.log(user)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = () => {
    return axios
        .get('http://127.0.0.1:8000/api/profile', {
            headers: {  'Authorization': 'Bearer '+localStorage.getItem('usertoken') }
            
        })
        
        .then(response => {
            console.log(response)
            console.log(response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}