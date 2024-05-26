// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ChitChat. All rights reserved.</p>
      <p>Made with ❤️ by Harsh Chandwani</p>
    </footer>
  );
};

export default Footer;
