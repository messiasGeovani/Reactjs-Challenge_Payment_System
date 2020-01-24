/**
 * API UTILS
 */

//  axios config
import axios from 'axios'

const api = axios.create({
    baseURL: 'localhost:8080'
})

// exporting modules
export { api }