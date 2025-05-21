import React from 'react';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <div className="font-heading font-semibold text-lg text-primary">Everest Group</div>
          </div>
          <div>
            <ul className="flex space-x-8">
              <li>
                <Link href="#">
                  <a className="text-accent hover:text-primary transition-colors duration-300 text-sm">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-accent hover:text-primary transition-colors duration-300 text-sm">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-accent hover:text-primary transition-colors duration-300 text-sm">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-accent">
            © {new Date().getFullYear()} Everest Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
