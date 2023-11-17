"use client";

import Image from 'next/image'
import styles from './page.module.css'
import React, { useState, useEffect } from 'react';

export default function Menu() {
  const [isMediaQueryMatched, setIsMediaQueryMatched] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClick = () => {
    const nav = document.querySelector(`.${styles.navMobile}`);
    if (nav !== null)
    {
        nav.classList.toggle(styles.navShowMobile);
        setIsMenuOpen(!isMenuOpen);
    }
  }

  useEffect(() => {
    // Define the media query
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    // Initial check for the media query
    setIsMediaQueryMatched(mediaQuery.matches);


    // Add a listener to update the state when the media query changes
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
      setIsMediaQueryMatched(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    // Clean up the listener when the component is unmounted
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <nav>
        {isMediaQueryMatched ? (
          <div>
            {
            !isMenuOpen ? (
                <button onClick={menuClick} className={styles.menuBtn}><Image src="./icon-menu.svg" alt="menu" width={24} height={18} /></button>
              ) : (
                <button onClick={menuClick} className={styles.menuBtn}><Image src="./icon-menu-close.svg" alt="menu" width={24} height={18} /></button>
              )
            }
            <div className={styles.navMobile}>
              <div className={styles.navMobileOverlay}>
                <div className={styles.dimmer}></div>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#new">New</a></li>
                  <li><a href="#popular">Popular</a></li>
                  <li><a href="#trending">Trending</a></li>
                  <li><a href="#categories">Categories</a></li>
                </ul>
              </div>
            </div>
          </div>) : (
          <ul className={styles.navDesktop}>
            <li><a href="#home">Home</a></li>
            <li><a href="#new">New</a></li>
            <li><a href="#popular">Popular</a></li>
            <li><a href="#trending">Trending</a></li>
            <li><a href="#categories">Categories</a></li>
          </ul>)
        }
    </nav>
  )
}
