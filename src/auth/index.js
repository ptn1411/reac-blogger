import Auth from "../services/auth.service";

export const LoginData = async (data) => {
    try {
        const results = await Auth.postLogin(data);
        return Promise.resolve(results);
    } catch (error) {
        return Promise.reject(error)
    }

}

export const authenticate = (jwt, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(jwt));
        next();
    }
};
