import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#ffffff',
  backgroundImage: `
    radial-gradient(ellipse at top left, transparent 0%, transparent 20%, rgba(255, 255, 255, 0.4) 40%, rgba(255, 255, 255, 0.8) 60%, rgba(255, 255, 255, 1) 80%),
    linear-gradient(30deg, #f5f5f5 12%, transparent 12.5%, transparent 87%, #f5f5f5 87.5%, #f5f5f5),
    linear-gradient(150deg, #f5f5f5 12%, transparent 12.5%, transparent 87%, #f5f5f5 87.5%, #f5f5f5),
    linear-gradient(30deg, #f5f5f5 12%, transparent 12.5%, transparent 87%, #f5f5f5 87.5%, #f5f5f5),
    linear-gradient(150deg, #f5f5f5 12%, transparent 12.5%, transparent 87%, #f5f5f5 87.5%, #f5f5f5),
    linear-gradient(60deg, #f0f0f0 25%, transparent 25.5%, transparent 75%, #f0f0f0 75%, #f0f0f0),
    linear-gradient(60deg, #f0f0f0 25%, transparent 25.5%, transparent 75%, #f0f0f0 75%, #f0f0f0)
  `,
  backgroundSize: '100% 100%, 80px 140px, 80px 140px, 40px 70px, 40px 70px, 80px 140px, 80px 140px',
  backgroundPosition: '0 0, 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px',
  zIndex: -1,
}));

interface BackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <>
      <BackgroundContainer />
      {children}
    </>
  );
};

export default Background; 