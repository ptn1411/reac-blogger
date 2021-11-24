import Auth from "../services/auth.service";

export const loginData = async (data) => {
    try {
        const results = await Auth.postLogin(data);
        return Promise.resolve(results);
    } catch (error) {
        return Promise.reject(error)
    }

}


export const logoutData = next => {
    if (typeof window !== 'undefined') localStorage.removeItem('jwt');
    next();
    Auth.getLogout()
        .then(response => {
            return response;
        })
        .catch(err => console.log(err));
}
export const authenticate = (jwt, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(jwt));
        next();
    }
};
export const authenticateFirebase = (jwt, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('auth', JSON.stringify(jwt));
        next();
    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'));
    } else {
        return false;
    }
};

