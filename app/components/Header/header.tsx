'use client';
import { useState } from 'react';

import icon from './menu.png';
import Image from 'next/image';
import '../Header/header.css';
import Link from 'next/link';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  // let currentPathname = '';
  // if (typeof window !== 'undefined') {
  //   currentPathname = window.location.pathname;
  // }

  return (
    <div>
      <div className="navigation">
        <div className={isOpen ? 'menu menu-open' : 'menu'}>
          <div className="sidebar">
            <ul>
              {/* {window.location.pathname !== '/' && ( */}
              <li>
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              {/* )} */}
              <li>
                <Link href="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/stories" onClick={closeMenu}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about/#authors" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <Image src={icon} alt="Menu Icon" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};
