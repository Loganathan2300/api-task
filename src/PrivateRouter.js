import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 
const PrivateRouter = ({ isSignedIn, children }) => {
  const navigate = useNavigate();
 
  useEffect(() => {
    if (!isSignedIn) {
      navigate("/");
    }
  }, [isSignedIn, navigate]);
 
  return isSignedIn ? children : null;
};

export default PrivateRouter;
