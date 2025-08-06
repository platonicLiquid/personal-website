import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)(({ theme }) => ({
  height: '10vh',
  position: 'sticky',
  bottom: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down(768)]: {
    margin: '0 5px',
  },
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: theme.spacing(2),
  alignItems: 'center',
  width: '100%',
}));

const CopyrightText = styled(Typography)(() => ({
  color: '#f5f5f5',
  fontSize: '0.875rem',
  lineHeight: 1.4,
  wordBreak: 'break-word',
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  flexShrink: 0,
}));

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText variant="body2">
          © 2024 Matthew Yocum. All rights reserved.
        </CopyrightText>
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