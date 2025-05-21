import React from 'react';
import { Link } from 'wouter';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-heading font-semibold text-lg md:text-xl text-[#4E93BC]">Everest Group</div>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#">
                Resources
              </Link>
            </li>
            <li>
              <Link href="#">
                About
              </Link>
            </li>
            <li>
              <Link href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
