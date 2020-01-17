import axios from 'axios'

export const register = newStudent => {
  return axios
    .post('students/register', {
      firstName: newStudent.firstName,
      lastName: newStudent.lastName,
      email: newStudent.email,
      password: newStudent.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = student => {
  return axios
    .post('students/login', {
      email: student.email,
      password: student.password
    })
    .then(response => {
      localStorage.setItem('studenttoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

// export const getProfile = student => {
//   return axios
//     .get('students/profile', {
//       headers: { Authorization: ` ${this.getToken()}` }
//     })
//     .then(response => {
//       console.log(response)
//       return response.data
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }