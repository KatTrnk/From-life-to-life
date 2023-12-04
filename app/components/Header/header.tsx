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
  return (
    <div>
      <div className="navigation">
        <div className={isOpen ? ' menu menu-open' : 'menu'}>
          <div className="sidebar">
            <ul>
              <li>
                <Link className="link" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" href="/stories">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="link" href="/about">
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
