import React from "react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <h3>
        ANIME <span>WORLD</span>
      </h3>

      <p>Discover • Watch • Save your favorite Anime & Movies</p>

      <div className="footer-links">
        <span>Home</span>
        <span>Anime</span>
        <span>Movies</span>
        <span>Watchlist</span>
      </div>

      <div className="footer-social">
        <a href="#"><FaGithub /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaYoutube /></a>
      </div>

      <small>© 2025 Anime World — By Darji Parimal</small>
    </footer>
  );
}
