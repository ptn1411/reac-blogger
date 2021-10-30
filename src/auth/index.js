import Auth from "../services/auth.service";

export const LoginData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const results = await Auth.postLogin(data);
            resolve(results);
        } catch (error) {
            reject(error)
        }
    });
}

export const authenticate = (jwt, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(jwt));
        next();
    }
};
