import React from 'react';
import { useState } from 'react';

const Auth = ({verify}) => {

  
  const [codeChallenge, setCodeChallenge] = useState('');
const authorizeUrl = `https://www.canva.com/api/oauth/authorize?code_challenge_method=s256&response_type=code&client_id=OC-AZGFBFB-U0KO&redirect_uri=https%3A%2F%2F110b-2401-4900-1caa-fbd8-8d72-ecd8-6bb4-8e2.ngrok-free.app%2Fcallback&scope=app:read%20app:write%20design:content:read%20design:meta:read%20design:content:write%20design:permission:read%20design:permission:write%20folder:read%20folder:write%20folder:permission:read%20folder:permission:write%20asset:read%20asset:write%20brandtemplate:meta:read%20brandtemplate:content:read&code_challenge=${codeChallenge}`;
   
  const generateCodeVerifier = () => {
    const verifier = crypto.randomUUID();
    verify(verifier,authorizeUrl);
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16))
      .join('');
  };


   

  const handleLogin = () => {
    const codeChallenge = generateCodeVerifier();
    setCodeChallenge(codeChallenge);
    window.location.href = authorizeUrl;

  };

  return (
    <div>
      <h1>Canva OAuth Example</h1>
      <button onClick={handleLogin}>Login with Canva</button>
    </div>
  );
};

export default Auth;
