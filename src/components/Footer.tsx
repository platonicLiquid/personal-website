import { Box, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)(({ theme }) => ({
  height: '15vh',
  position: 'sticky',
  bottom: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  '&:hover': {
    color: 'rgba(255, 255, 255, 0.8)',
  },
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Typography 
          variant="body2" 
          sx={{ color: '#f5f5f5' }}
        >
          © 2024 Matthew Yocum. All rights reserved.
        </Typography>
        <SocialLinks>
          <a
            href="https://github.com/platonicLiquid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: '#f5f5f5', textDecoration: 'none' }}
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/matthew-yocum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: '#f5f5f5', textDecoration: 'none' }}
          >
            <LinkedInIcon />
          </a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 