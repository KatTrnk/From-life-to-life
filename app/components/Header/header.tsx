'use client';
import { useState } from 'react';
import icon from './menu.png';
import Image from 'next/image';
import '../Header/header.css';

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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/stories">Gallery</a>
              </li>
              <li>
                <a href="/about">Contact</a>
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