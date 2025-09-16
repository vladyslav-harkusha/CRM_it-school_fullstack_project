const auth = "/auth";
const orders = "/orders";
const users = "/users";

export const urls = {
    auth: {
        login: `${auth}/login`,
        logout: `${auth}/logout`,
        me: `${auth}/me`,
        refresh: `${auth}/refresh`,
        setPassword: `${auth}/set-password`,
    },
    orders,
    users,
};
