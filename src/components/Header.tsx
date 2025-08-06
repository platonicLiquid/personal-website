import { Box, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderContainer = styled(Box)(({ theme }) => ({
  height: '15vh',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
}));

const HeaderContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  border: '2px solid white',
}));

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <StyledAvatar
          src="/headshot.png"
          alt="Matthew Yocum"
        />
        <Box>
          <Typography 
            variant="h4" 
            component="h1" 
            fontWeight="bold" 
            sx={{ color: '#f5f5f5' }}
          >
            Matthew Yocum
          </Typography>
          <Typography 
            variant="subtitle1" 
            sx={{ color: '#f5f5f5' }}
          >
            Software Developer & Technical Writer
          </Typography>
        </Box>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 