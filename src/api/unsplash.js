import axios from 'axios'

const accessKey = `a19240f28f10727bd6b5a865df9c7fbb55e6cb6683affcd48e2f3261e0f84040`
//create a custom client with some properties
export default axios.create({
    baseURL: `https://api.unsplash.com`,
    headers: {
        Authorization: `Client-ID ${accessKey}`
    }
})