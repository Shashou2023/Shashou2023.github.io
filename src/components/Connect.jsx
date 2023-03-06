
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import {useNavigate} from 'react-router-dom';

import axios from '../api/axios';
//const LOGIN_URL = '/users/login/';

 export const Connect = () => {
  let { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
      e.preventDefault();
      var username = user;
      var password = pwd;

      try {
          const response = await axios.post('http://127.0.0.1:8000/users/login/',
              JSON.stringify({ username, password }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(JSON.stringify(response?.data));
          //console.log(JSON.stringify(response));
          const accessToken = response?.data.access_token;
          const refreshToken = response?.data.refresh_token;
          const userDetails = response?.data.user;
         setAuth({ user, pwd, userDetails, accessToken });
          //setUser('');
          //setPwd('');
          setSuccess(true);
      } catch (err) {
          if (!err?.response) {
              setErrMsg('NIP ou Mot de passe Incorrect');
          } else if (err.response?.status === 400) {
              setErrMsg('NIP ou mot de passe Incorrect');
          } else if (err.response?.status === 401) {
              setErrMsg('Accès refusé');
          } else {
              setErrMsg('La connexion a échouée');
          }
          errRef.current.focus();
      }
  }



    return(
      <>
      {success ? (
         navigate("/rdv", {replace: true})
      ) : (

       
        <section >
<div className="bg-gray-100 py-6 h-96 flex flex-col justify-center sm:py-0">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold"></h1>
				</div>
        <p style={{color:"#ffdf00"}} ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
				<div className="divide-y divide-gray-200">
        <form  onSubmit={handleSubmit}>
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          
						<div className="relative">
							<input 
              autocomplete="off"
               id="username" 
               type="text" 
               ref={userRef}
               autoComplete="off"
               onChange={(e) => setUser(e.target.value)}
               value={user}
               required
               className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">NIP</label>
						</div>
						<div className="relative">
							<input 
              autocomplete="off" 
              id="password" 
               type="password" 
               onChange={(e) => setPwd(e.target.value)}
               value={pwd}
               required
               className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mot de passe</label>
						</div>
						<div className="relative">
							<button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1">Se connecter</button>
						</div>
            <div className="text-center text-lg-start mt-4 pt-2">
         <p className="small  mt-2 pt-1 mb-0"> <a href="#!" style={{textDecoration:"none",color:"inherit"}}
            >mot de passe oublié?</a></p>
      </div>
    
					</div>
          </form>
				</div>
			</div>
		</div>
	</div>
</div>
  
</section>

)}
</>
)
    
}

