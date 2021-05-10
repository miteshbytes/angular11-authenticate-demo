export const saveAuthentication = (authentication: any) => {
    //console.log(authentication);
    const expiresAt: any = JSON.stringify(authentication.expires_in * 1000 + new Date().getTime());

    sessionStorage.setItem('access_token', authentication.token);
        
    sessionStorage.setItem('user_data', JSON.stringify(authentication.user_data));

    sessionStorage.setItem('expires_at', expiresAt);
}

export const getUserData = () => {
    return JSON.parse(sessionStorage.getItem('user_data') || '{}');
}

export const isAuthenticated = () => {
    const accessToken = sessionStorage.getItem('access_token');
    const expires     = sessionStorage.getItem('expires_at');
    const expiresAt   = expires && JSON.parse(expires);
    return !!accessToken && new Date().getTime() < expiresAt;
}

export const clearAuthentication = () => {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('user_data');
    sessionStorage.removeItem('expires_at');
}

export const fullName = () => {
    const userInfo = JSON.parse(sessionStorage.getItem('user_data') || '{}');

    return userInfo.name;
}

// Use Bearer token in Request API set Header
export const getAccessToken = () => sessionStorage.getItem('access_token');
export const getBearerToken = () => {
    return 'Bearer ' + getAccessToken();
}