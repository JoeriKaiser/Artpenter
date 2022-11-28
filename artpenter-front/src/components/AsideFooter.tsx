import { faFacebook, faInstagram } from '@fortawesome/fontawesome-free-brands';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const faFacebookIcon = faFacebook as IconProp;
const faInstagramIcon = faInstagram as IconProp;
const faMailIcon = faEnvelope as IconProp;

const AsideFooter = () => {
  return (
    <div className="aside-socials-container">
      <ul>
        <li>
          <FontAwesomeIcon size="2xl" icon={faInstagramIcon} />
        </li>
        <li>
          <FontAwesomeIcon size="2xl" icon={faFacebookIcon} />
        </li>
        <li>
          <FontAwesomeIcon size="2xl" icon={faMailIcon} />
        </li>
      </ul>
    </div>
  );
};

export default AsideFooter;
