import axios from 'axios'

export const register = async newUser => {
    try {
    const response = await axios
      .post('http://127.0.0.1:8000/api/register', newUser, {
        headers: { 'Content-Type': 'application/json' }
      })
    console.log(response)
  }
  catch (err) {
    console.log(err)
  }
}

export const login = async user => {
    try {
    const response = await axios
      .post('http://127.0.0.1:8000/api/login', {
        email: user.email,
        password: user.password
      }, {
        headers: { 'Content-Type': 'application/json' }
      })
    localStorage.setItem('usertoken', response.data.token)
    console.log(response.data.token)
    return response.data.token
  }
  catch (err) {
    console.log(err)
  }
}

export const getProfile = async () => {
    try {
    const response = await axios
      .get('http://127.0.0.1:8000/api/profile', {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` }
      })
    console.log(response)
    return response.data
  }
  catch (err) {
    console.log(err)
  }
}