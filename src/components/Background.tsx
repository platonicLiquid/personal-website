import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const BackgroundContainer = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#000000',
  backgroundImage: `
    radial-gradient(ellipse at top left, transparent 0%, transparent 20%, rgba(0, 188, 212, 0.1) 40%, rgba(0, 188, 212, 0.2) 60%, rgba(0, 188, 212, 0.3) 80%),
    linear-gradient(30deg, rgba(255, 255, 255, 0.02) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.02) 87.5%, rgba(255, 255, 255, 0.02)),
    linear-gradient(150deg, rgba(255, 255, 255, 0.02) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.02) 87.5%, rgba(255, 255, 255, 0.02)),
    linear-gradient(30deg, rgba(255, 255, 255, 0.02) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.02) 87.5%, rgba(255, 255, 255, 0.02)),
    linear-gradient(150deg, rgba(255, 255, 255, 0.02) 12%, transparent 12.5%, transparent 87%, rgba(255, 255, 255, 0.02) 87.5%, rgba(255, 255, 255, 0.02)),
    linear-gradient(60deg, rgba(255, 255, 255, 0.01) 25%, transparent 25.5%, transparent 75%, rgba(255, 255, 255, 0.01) 75%, rgba(255, 255, 255, 0.01)),
    linear-gradient(60deg, rgba(255, 255, 255, 0.01) 25%, transparent 25.5%, transparent 75%, rgba(255, 255, 255, 0.01) 75%, rgba(255, 255, 255, 0.01))
  `,
  backgroundSize: '100% 100%, 80px 100px, 80px 100px, 40px 50px, 40px 50px, 80px 100px, 80px 100px',
  backgroundPosition: '0 0, 0 0, 0 0, 40px 50px, 40px 50px, 0 0, 40px 50px',
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