import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(
        auth
      );
   
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
      }
    if(!user){
        return  <Navigate to="/login" state={{ from: location }} replace />
    }
    
if(user.providerData[0]?.providerId === 'password'  && !user.emailVerified){
    return  <div>
        <h3 className='text-danger'> Your Email is not verified</h3>
        <h5 className='text-success'> Please Verified your email address</h5>
       
         <button
        className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        send Verification email again
      </button>
      <ToastContainer /> 
    </div>
}


    return (
        children
    );
};

export default RequireAuth;