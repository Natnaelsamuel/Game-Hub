import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1cd49277ceb14496bc0c1bd9eb6979bb'
    }
})