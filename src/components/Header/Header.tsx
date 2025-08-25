import "./Header.css";
import type { UserProfile } from "../../types/candidate";

interface HeaderProps {
  user: UserProfile;
  onMenuToggle?: () => void;
}

const Header = ({ user, onMenuToggle }: HeaderProps) => {
  const { name, company, imageUrl } = user;
  return (
    <header className="header">
      <div className="header-left">
        <button className="mobile-menu-toggle" onClick={onMenuToggle}>
          <i className="bx bx-menu"></i>
        </button>
        <span className="search-container">
          <i className="bx bx-search"></i>
          <input
            name="search"
            id="search"
            type="text"
            placeholder="Search Pipedrive"
          />
        </span>
      </div>

      <div className="header-center">
        <div className="brand-icon">
          <i className="bx bx-user-circle"></i>
        </div>
        <span>recruit crm</span>
      </div>

      <div className="header-right">
        <button className="header-btn plus-btn">
          <i className="bx bx-plus"></i>
        </button>
        <div className="vertical-line"></div>

        <button className="header-btn">
          <i className="bx bx-gift"></i>
        </button>
        <button className="header-btn">
          <i className="bx bx-envelope"></i>
        </button>
        <button className="header-btn">
          <i className="bx bx-bell"></i>
        </button>
        <div className="user-profile">
          <img src={imageUrl} alt={name} />
          <div className="user-info">
            <span>{name}</span>
            <small>{company}</small>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
