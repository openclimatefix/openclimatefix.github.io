import React from 'react';

import { MdEmail } from 'react-icons/md';
import {
  FaTwitter,
  FaDonate,
  FaMedium,
  FaDiscourse,
} from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';

import footerStyles from './footer.module.css';


export default function Footer() {
  return (
    <footer className="bg-black p-6 text-white text-center">
      <div className={footerStyles.iconList}>
        <a
          href="https://github.com/openclimatefix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoMarkGithub />
        </a>
        <a
          href="https://twitter.com/openclimatefix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:info@openclimatefix.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail />
        </a>
        <a
          href="https://medium.com/open-climate-fix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium />
        </a>
        <a
          href="https://openclimatefix.discourse.group/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscourse />
        </a>
        <a
          href="https://opencollective.com/openclimatefix"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDonate />
        </a>
      </div>
      <p className="mt-4">
        Open Climate Fix Ltd.
      </p>
    </footer>
  );
}
