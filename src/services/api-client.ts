import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '00181711387a4aa9bdc78e730bcba507'
    }
})