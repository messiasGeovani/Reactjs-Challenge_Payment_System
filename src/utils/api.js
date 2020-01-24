/**
 * API UTILS
 */

//  axios config
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://8080-d27b1239-da2d-45f9-ae0b-73fdb0772558.ws-us02.gitpod.io/'
})

// exporting modules
export { api }