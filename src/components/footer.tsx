import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

interface FooterComProps {
}

const FooterCom: FC<FooterComProps> = ({ }) => {

  const { isMobile, isTablet } = useSelector((state: RootState) => state.counter)

  return (
    <>

      {/* --------------------------------------Desktop------------------------------------------ */}

      {
        !isTablet &&
        !isMobile &&
        <footer className='mt-5'>
          <div className="d-flex flex-row justify-content-around p-5 bg-dark text-light" >
            <div className='ps-5 pe-5'>
              <p className='mb-4 text-secondary fw-bold fs-5'>ABOUT</p>
              <p>Contact us</p>
              <p>About us</p>
              <p>Careers</p>
              <p>Corporate information</p>
            </div>

            <div className='border-end border-light'></div>

            <div className='ps-5 pe-5'>
              <p className='mb-4 text-secondary fw-bold fs-5'>GROUP COMPANIES</p>
              <p>Myntra</p>
              <p>Cleartrip</p>
              <p>Shopsy</p>
            </div>

            <div className='border-end border-light'></div>

            <div className='ps-5 pe-5'>
              <p className='mb-4 text-secondary fw-bold fs-5'>HELP</p>
              <p>Payments</p>
              <p>Shipping</p>
              <p>Cancellation & Returns</p>
              <p>FAQ</p>
            </div>

            <div className='border-end border-light'></div>

            <div className='ps-5 pe-5'>
              <p className='mb-4 text-secondary fw-bold fs-5'>CONSUMER POLICY</p>
              <p>Cancellation & Returns</p>
              <p>Terms Of Use</p>
              <p>Security</p>
              <p>Privacy</p>
              <p>Sitemap</p>
            </div>
          </div>
        </footer>
      }

      {/* --------------------------------------Tablet------------------------------------------ */}

      {
        isTablet &&
        <footer className='mt-5 bg-dark text-light d-flex flex-column pb-4'>
          <div className="d-flex flex-row justify-content-around p-5 pb-0" >
            <div className='d-flex flex-column gap-4 pb-2'>
              <div className='ps-5 pe-5'>
                <p className='mb-4 text-secondary fw-bold fs-5'>ABOUT</p>
                <p>Contact us</p>
                <p>About us</p>
                <p>Careers</p>
                <p>Corporate information</p>
              </div>

              <div className='border-bottom border-light'></div>

              <div className='ps-5 pe-5'>
                <p className='mb-4 text-secondary fw-bold fs-5'>GROUP COMPANIES</p>
                <p>Myntra</p>
                <p>Cleartrip</p>
                <p>Shopsy</p>
              </div>
            </div>

            <div className='border-end border-light'></div>

            <div className='d-flex flex-column gap-4 pb-2'>
              <div className='ps-5 pe-5'>
                <p className='mb-4 text-secondary fw-bold fs-5'>HELP</p>
                <p>Payments</p>
                <p>Shipping</p>
                <p>Cancellation & Returns</p>
                <p>FAQ</p>
              </div>

              <div className='border-bottom border-light'></div>

              <div className='ps-5 pe-5'>
                <p className='mb-4 text-secondary fw-bold fs-5'>CONSUMER POLICY</p>
                <p>Cancellation & Returns</p>
                <p>Terms Of Use</p>
                <p>Security</p>
                <p>Privacy</p>
                <p>Sitemap</p>
              </div>
            </div>
          </div>
          <div className='border-bottom border-light'></div>
        </footer>
      }

      {/* --------------------------------------------Mobile------------------------------------------------ */}

      {
        isMobile &&
        <footer className='bg-dark text-light mt-5 p-5 pb-4'>
          <div className="d-flex flex-column gap-4" >
            <div className='ps-5 pe-5'>
              <p className='mb-4 text-secondary fw-bold fs-5'>ABOUT</p>
              <p>Contact us</p>
              <p>About us</p>
              <p>Careers</p>
              <p>Corporate information</p>
            </div>

            <div className='border-bottom border-light'></div>

            <div className='ps-5 pe-5'>
              <p className='mb-4 text-secondary fw-bold fs-5'>GROUP COMPANIES</p>
              <p>Myntra</p>
              <p>Cleartrip</p>
              <p>Shopsy</p>
            </div>

            <div className='border-bottom border-light'></div>

            <div className='ps-5 pe-5'>
              <p className='mb-4 text-secondary fw-bold fs-5'>HELP</p>
              <p>Payments</p>
              <p>Shipping</p>
              <p>Cancellation & Returns</p>
              <p>FAQ</p>
            </div>

            <div className='border-bottom border-light'></div>

            <div className='ps-5 pe-5'>
              <p className='mb-4 text-secondary fw-bold fs-5'>CONSUMER POLICY</p>
              <p>Cancellation & Returns</p>
              <p>Terms Of Use</p>
              <p>Security</p>
              <p>Privacy</p>
              <p>Sitemap</p>
            </div>

            <div className='border-bottom border-light'></div>

          </div>
        </footer>
      }

    </>
  );
};

export default FooterCom;