import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/authOperations';
import { getUserName } from 'redux/authSlice';
import { Box, Image, UserName } from './UserMenu.styled';
import { Btn } from 'pages/RegisterPage/RegisterPage.styled';

export const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <Box>
      <Image>
        <AccountCircle />
      </Image>
      <UserName>{`Hello, ${name.toUpperCase()}`}</UserName>
      <Btn
        variant="contained"
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log Out
      </Btn>
    </Box>
  );
};
