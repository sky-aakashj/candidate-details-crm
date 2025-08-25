import React from "react";
import "./LeftNavigation.css";

interface NavigationGroup {
  group: string;
  items: NavigationItem[];
}
interface NavigationItem {
  icon: string;
  label: string;
  active: boolean;
}
interface LeftNavigationProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navigationItems: NavigationGroup[] = [
  {
    group: "mainNavigation",
    items: [
      { icon: "bx-user", label: "Candidates", active: true },
      { icon: "bx-buildings", label: "Companies", active: false },
      { icon: "bx-briefcase", label: "Jobs", active: false },
      { icon: "bx-envelope", label: "Messages", active: false },
      { icon: "bx-calendar-event", label: "Calendar", active: false },
    ],
  },
  {
    group: "secondaryNavigation",
    items: [
      { icon: "bx-dollar-circle", label: "Money", active: false },
      { icon: "bx-pie-chart-alt", label: "Reports", active: false },
      { icon: "bx-credit-card-alt", label: "Cards", active: false },
      { icon: "bx-cog", label: "Settings", active: false },
      { icon: "bx-dots-horizontal-rounded", label: "See More", active: false },
    ],
  },
];

const LeftNavigation: React.FC<LeftNavigationProps> = ({
  isOpen = false,
  onClose,
}) => {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`nav-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      ></div>
      <nav className={`left-navigation ${isOpen ? "mobile-open" : ""}`}>
        <div className="nav-header">
          <i className="bxr bx-grid-circle-diagonal-right nav-icon"></i>
        </div>

        <ul>
          {navigationItems.map((groupObj) => (
            <React.Fragment key={groupObj.group}>
              {groupObj.items.map((item) => (
                <li key={item.label} className="nav-header">
                  <button
                    className={`${item.active ? "active" : ""}`}
                    title={item.label}
                  >
                    <i className={`bxr ${item.icon} nav-icon`}></i>
                  </button>
                </li>
              ))}
              {groupObj.group === "mainNavigation" && (
                <div className="nav-separator">
                  <hr />
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default LeftNavigation;
