import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-copyright">
          © 2024 Matthew Yocum.
        </p>
        <div className="footer-social">
          <a
            href="https://github.com/platonicLiquid"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com/in/matthew-yocum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 