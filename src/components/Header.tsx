const Header: React.FC = () => {
  return (
    <header>
      <div className="header-content">
        <img 
          src="/headshot.png" 
          alt="Matthew Yocum" 
          className="header-avatar"
        />
        <div className="header-text">
          <h1 className="header-name fluid">Matthew Yocum</h1>
          <p className="header-subtitle">Software Developer & Technical Writer</p>
        </div>
      </div>
    </header>
  );
};

export default Header; 