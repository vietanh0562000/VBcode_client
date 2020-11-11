import axios from 'axios';
export function login(credential) {
    console.log(credential);
    return new Promise((res, rej) => {
        axios.post('http://127.0.0.1:8000/api/auth/login', credential)
            .then(result => {
                res(result.data);
            })
            .catch(err => {
                rej(err);
                
            })
    })
}

export function register(credential) {
    return new Promise((res, rej) => {
        axios.post('/api/auth/register', credential)
            .then(result => {
                res(result.data);
            })
            .catch(err => {
                rej("Wrong email or password");
                console.log(err);
            })
    })
}

export function currentUser() {
    const user = localStorage.getItem('user');

    if (!user) {
        return null;
    }

    return JSON.parse(user);
}