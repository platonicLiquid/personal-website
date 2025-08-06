import { Box, Avatar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderContainer = styled(Box)(({ theme }) => ({
  height: '15vh',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down(768)]: {
    margin: '5px 10px',
  },
}));

const HeaderContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  width: '100%',
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: 60,
  height: 60,
  border: '2px solid white',
  flexShrink: 0,
}));

const NameTypography = styled(Typography)(() => ({
  color: '#f5f5f5',
  fontWeight: 'bold',
  fontSize: 'clamp(1.25rem, 4vw, 2.125rem)', // Responsive font size
  lineHeight: 1.2,
  wordBreak: 'break-word',
}));

const SubtitleTypography = styled(Typography)(() => ({
  color: '#f5f5f5',
  fontSize: 'clamp(0.75rem, 2.5vw, 1.25rem)', // Responsive font size
  lineHeight: 1.2,
  wordBreak: 'break-word',
}));

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <StyledAvatar
          src="/headshot.png"
          alt="Matthew Yocum"
        />
        <Box sx={{ minWidth: 0, flex: 1 }}> {/* Container that allows text to shrink */}
          <NameTypography variant="h4">
            Matthew Yocum
          </NameTypography>
          <SubtitleTypography variant="subtitle1">
            Software Developer & Technical Writer
          </SubtitleTypography>
        </Box>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 