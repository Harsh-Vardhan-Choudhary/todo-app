import axios from 'axios'

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

//the above and below cod eperform same functionality

export const retrieveHelloWorldBean 
    = () => axios.get('http://localhost:8080/hello-world-bean')


//here in each export / function we are duplicating the localhost url,
//to avoid this we can make use of baseURL functiality provided by aioxs

const apiClient = axios.create (
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveHelloWorldPathVariable 
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`)
