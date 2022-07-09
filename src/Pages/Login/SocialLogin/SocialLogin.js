import React from 'react';
import google from '../../../Images/banner/google.png';
import facebook from '../../../Images/banner/Facebook.png';
import github from '../../../Images/banner/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if(loading || loading1){
        return <Loading></Loading>
    }
    if (error || error1) {
        
        errorElement =  <div>
            <p>Error: {error?.message} {error1?.message} </p>
          </div>
        
      }
      if(user || user1){
        navigate('/home');
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button 
                onClick={() => signInWithGoogle()}
                className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2'></span>
                    Google Sign In</button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={facebook} alt="" />
                    <span className='px-2'></span>
                    Facebook Sign In</button>
                <button
                onClick={()=> signInWithGithub()}
                className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img src={github} alt="" />
                    <span className='px-2'></span>
                    Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;