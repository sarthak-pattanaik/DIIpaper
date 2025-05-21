import React from 'react';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 bg-[#0F2D44]/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <div className="font-heading font-semibold text-lg text-[#4E93BC]">Everest Group</div>
          </div>
          <div>
            <ul className="flex space-x-8">
              <li>
                <Link href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#D6C8BD]/40 pt-8 text-center">
          <p className="text-sm text-[#6b7385]">
            © {new Date().getFullYear()} Everest Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
