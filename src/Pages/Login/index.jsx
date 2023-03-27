import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { login } from '../../features/userSlice';
import Paper from '@mui/material/Paper';
import "../../styles/login.css";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import KeyTwoToneIcon from '@mui/icons-material/KeyTwoTone';

const Login = (props) => {
  const dispatch = useDispatch();
  let loginMessage = useSelector((state) => state.users.loading ? "Please wait !" : "");

  const handleLogin = (e) => {
    dispatch(login());
  }

  return (
    <div className="mainDiv">
      <Paper className="login-div">
        <div className="login-input-div">
          <KeyTwoToneIcon className="login-key" sx={{ fontSize: 60 }}/>
        </div>
        <div className="login-input-div login-header">
          <h2>User Login</h2>
        </div>
        <div className="login-input-div login-btn-div">
          {loginMessage &&
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">{loginMessage}</Alert>
            </Stack>
          }
        </div>
        <div className="login-input-div login-btn-div">
          <Button variant="outlined" onClick={handleLogin}>Authenticate</Button>
        </div>
      </Paper>
    </div>
  );
};
  
export default Login;
  