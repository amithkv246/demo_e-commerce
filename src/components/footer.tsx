import React, { FC } from 'react';

interface FooterComProps {

}

const FooterCom: FC<FooterComProps> = ({ }) => {
  return (
    <>
      <div className='d-flex flex-row justify-content-between p-5 bg-dark text-light' >
        <div>
          <p>ABOUT</p>
          <p>Contact us</p>
          <p>About us</p>
          <p>Careers</p>
          <p>Corporate information</p>
        </div>
        <div>
          <p>GROUP COMPANIES</p>
          <p>Myntra</p>
          <p>Cleartrip</p>
          <p>Shopsy</p>
        </div>
        <div>
          <p>HELP</p>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>
        <div>
          <p>CONSUMER POLICY</p>
          <p>Cancellation & Returns</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
        </div>
      </div>
    </>
  );
};

export default FooterCom;