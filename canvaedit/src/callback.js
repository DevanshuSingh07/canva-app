import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Callback = ({codehand,url1}) => {
  console.log("ssss")
  const location = useLocation();
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get('code');

    if (code) {

      console.log("if block")
      const data = {
        client_id: process.env.REACT_APP_CANVA_CLIENT_ID,
        client_secret:process.env.REACT_APP_CANVA_CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: url1,
        code: code,
        code_verifier:codehand,
      };

      axios
        .post(process.env.REACT_APP_CANVA_TOKEN_URL, data,{ headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
        },})
        .then((response) => {
          console.log(response)
          setToken(response.data.access_token);
        })
        .catch((error) => {
          setError(error.response.data);
        });
    }
  }, [location.search]);

  if (error) {
    return <div>Error: {error.error_description}</div>;
  }

  return (
    <div>
      {token ? (
        <div>
          <h1>Authenticated!</h1>
          <p>Access Token: {token}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Callback;
