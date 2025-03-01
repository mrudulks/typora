import React from "react";
import HeaderMenu from "./HeaderMenu";

const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <HeaderMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
