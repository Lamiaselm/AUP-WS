import axios from 'axios'

export const register = async newUser => {
  const response = await axios
    .post('http://127.0.0.1:8000/api/register', {
      nom: newUser.nom,
      prenom: newUser.prenom,
      email: newUser.email,
      password: newUser.password
    })
  console.log('Registered')
}

export const login = async user => {
  try {
    const response = await axios
      .post('http://127.0.0.1:8000/api/login', {
        email: user.email,
        password: user.password
      })
    localStorage.setItem('usertoken', response.data)
    return response.data
  }
  catch (err) {
    console.log(err)
  }
}