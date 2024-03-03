import axios from 'axios';

export const interceptor = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'b242129ef881600c48bdd707be997a58'
    }
});
