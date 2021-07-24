const endpoint = 'http://localhost/api/';
//ali.m add to .env
const URLS = {
    LOGIN : endpoint+'users/login',
    REGISTER: endpoint+'users/register',
    STATE: endpoint+'users/state',
    NOTES: endpoint+'users/notes'
}


const Login = async (email, password) => {
    const params = `?email=${email}&password=${password}`
    const response = await fetch(URLS.LOGIN + params, {
        method: 'POST',
        credentials: "include"
    })
    const status = response.status;
    const result = await response.json();
    return {status, result};
}

const State = async () => {
    const response = await fetch(URLS.STATE,{
        method: 'GET',
        credentials: "include"
    });
    const status = response.status;
    const result = await response.json();
    return {status, result};
}

const Notes = async () => {
    const response = await fetch(URLS.NOTES,{
        method: 'GET',
        credentials: "include"
    });
    const status = response.status;
    const result = await response.json();
    return {status, result};
}

export {
    Login,
    State,
    Notes,
}