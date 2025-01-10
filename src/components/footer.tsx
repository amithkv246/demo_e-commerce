import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

interface FooterComProps {
}

const FooterCom: FC<FooterComProps> = ({  }) => {

  const isMobile = useSelector((state: RootState) => state.counter.isMobile)

  return (
    <>
      <footer className='mt-5'>
        <div className={isMobile ? "d-flex flex-column gap-3 justify-content-center p-5 bg-dark text-light" : "d-flex flex-row justify-content-between p-5 bg-dark text-light"} >
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
      </footer>
    </>
  );
};

export default FooterCom;