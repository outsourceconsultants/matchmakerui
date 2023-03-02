import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
<GoogleOAuthProvider clientId="1067226573265-mvqvb8lscoooqlsiq2lk64mhkpsfh8s2.apps.googleusercontent.com">
<React.StrictMode>
    <App />
</React.StrictMode>
</GoogleOAuthProvider>,
document.getElementById('root')
);
