import { createUserManager } from 'redux-oidc';

const settings = {
    client_id: '441652784040-vl909n20b1835rb6kbct8h8a7u1l4fjf.apps.googleusercontent.com',
    project_id: 'movies-project-1537211626869',
    redirect_uri: 'http://localhost:8080/callback',
    response_type: 'token id_token',
    authority: 'https://accounts.google.com',
    silent_redirect_uri: 'http://localhost:8080/silent_renew.html',
    automaticSilentRenew: true,
    filterProtocolClaims: true,
    loadUserInfo: true
};

const userManager = createUserManager(settings);

export default userManager;