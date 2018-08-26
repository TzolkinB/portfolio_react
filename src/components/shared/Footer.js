import React    from 'react';
import { Link } from 'react-router-dom';
import Github   from 'IMG/github.png';
import LinkedIn from 'IMG/linked-in.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container-fluid">
      <div className="copyright mt-2">
        <p className="text-white">Copyright &#169; {currentYear} Kimberly Bell</p>
      </div>
      <div className="footer-links d-inline">
        <ul className="list-inline font-weight-light float-right mr-3">
          <li className="list-inline-item px-2">
            <a href="https://github.com/TzolkinB" target="_blank">
              <img src={Github} alt="Github" width="40" height="40" />
            </a>
          </li>
          <li className="list-inline-item px-2">
            <a href="https://www.linkedin.com/in/kimbell4" target="_blank">
              <img src={LinkedIn} alt="LinkedIn"  width="40" height="40" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
