import React, { FC, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonCom from './button';
import InputGroupCom from './inputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';
import { updateIsDisabled, updateIsSearch, updateIsSorted, updateSearchText, updateSortColor } from '../redux/slice/slice';

interface NavbarComProps {
  handleCartButton?: () => void;
  handleBrandonClick?: () => void;
}

const NavbarCom: FC<NavbarComProps> = ({ handleCartButton, handleBrandonClick }) => {

  const { isMobile, isTablet, searchText } = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchText !== "") {
      dispatch(updateIsSearch(true))
    } else {
      dispatch(updateIsSearch(false))
    }
  }, [searchText])

  function handleOnClick() {
    //navigate to searchPage.
    dispatch(updateIsSorted(false))
    dispatch(updateSortColor("secondary"))
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    e.key == "Enter" ? handleOnClick() : null
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(updateSearchText(e.target.value))
    dispatch(updateIsSorted(false))
    dispatch(updateSortColor("secondary"))
  }

  useEffect(() => {
    if (!handleCartButton) {
      dispatch(updateIsDisabled(true))
    } else {
      dispatch(updateIsDisabled(false))
    }
  }, [handleCartButton])

  return (
    <>

      {/* ----------------------------------------Desktop----------------------------------------- */}

      {
        !isTablet &&
        !isMobile &&

        <Navbar expand={false} className="bg-body-tertiary mb-3">
          <Container fluid className="d-flex flex-row justify-content-around">
            <div className='d-flex gap-5'>
              <Navbar.Brand role='button' className='text-warning fs-1 fw-bold' onClick={handleBrandonClick}><span className='text-primary'>Quick</span>Mart</Navbar.Brand>
              <InputGroupCom style={{ minWidth: "500px" }} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)} onClick={handleOnClick} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)} value={searchText} type='text' placeholder='Search for Products, Brands and More' bs='mt-3 mb-3 shadow-none' />
            </div>
            <div>
              <ButtonCom
                value={<div className='d-flex align-items-center gap-2'><i className='fa-solid fa-cart-shopping' style={{ color: '#000000' }} ></i><span className='text-dark fw-bold'>Cart</span></div>}
                bs='mt-3 mb-3 btn-outline-secondary'
                onClick={handleCartButton}
              />
            </div>
            <div>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} /> {/* offcanvas button */}
            </div>
            {/* offcanvas body BELOW*/}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  MENU
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link role='button' onClick={handleBrandonClick} ><i className="fa-solid fa-house fa-sm text-black me-1"></i>Home</Nav.Link>
                  <Nav.Link href="#action1"><i className="fa-solid fa-bell text-black me-1"></i>Notification Preferences</Nav.Link>
                  <NavDropdown title="Help" id={`offcanvasNavbarDropdown-expand-${false}`} >
                    <NavDropdown.Item href="#action2"><i className="fa-solid fa-headset text-black me-2"></i>24x7 Customer Care</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      }

      {/* ----------------------------------------Tablet------------------------------------------ */}

      {
        isTablet &&

        <Navbar expand={false} className="bg-body-tertiary mb-3">
          <Container fluid className="d-flex flex-row justify-content-between ps-4 pe-4">
            <div className='d-flex gap-5'>
              <Navbar.Brand role='button' className='text-warning fs-1 fw-bold' onClick={handleBrandonClick}><span className='text-primary'>Quick</span>Mart</Navbar.Brand>
            </div>
            <div className='d-flex gap-5'>
              <div>
                <ButtonCom
                  value={<div className='d-flex align-items-center gap-2'><i className='fa-solid fa-cart-shopping' style={{ color: '#000000' }} ></i><span className='text-dark fw-bold'>Cart</span></div>}
                  bs='mt-3 mb-3 btn-outline-secondary'
                  onClick={handleCartButton}
                />
              </div>
              <div className='d-flex align-items-center'>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} /> {/* offcanvas button */}
              </div>
            </div>
            {/* offcanvas body BELOW*/}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  MENU
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link role='button' onClick={handleBrandonClick} ><i className="fa-solid fa-house fa-sm text-black me-1"></i>Home</Nav.Link>
                  <Nav.Link href="#action1"><i className="fa-solid fa-bell text-black me-1"></i>Notification Preferences</Nav.Link>
                  <NavDropdown title="Help" id={`offcanvasNavbarDropdown-expand-${false}`} >
                    <NavDropdown.Item href="#action2"><i className="fa-solid fa-headset text-black me-2"></i>24x7 Customer Care</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <InputGroupCom style={{ minWidth: "300px" }} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)} onClick={handleOnClick} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)} value={searchText} type='text' placeholder='Search for Products, Brands and More' bs='mt-3 mb-3 shadow-none' />
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      }

      {/* ----------------------------------------Mobile------------------------------------------ */}

      {
        isMobile &&

        <Navbar expand={false} className="bg-body-tertiary mb-3">
          <Container fluid className="d-flex flex-row justify-content-between ps-4 pe-4">
            <div className='d-flex gap-5'>
              <Navbar.Brand role='button' className='text-warning fs-1 fw-bold' onClick={handleBrandonClick}><span className='text-primary'>Quick</span>Mart</Navbar.Brand>
            </div>
            <div>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} /> {/* offcanvas button */}
            </div>
            {/* offcanvas body BELOW*/}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  MENU
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link role='button' onClick={handleBrandonClick} ><i className="fa-solid fa-house fa-sm text-black me-1"></i>Home</Nav.Link>
                  <Nav.Link role='button' onClick={handleCartButton}><i className='fa-solid fa-cart-shopping fa-sm text-black me-1'></i>My Cart</Nav.Link>
                  <Nav.Link href="#action1"><i className="fa-solid fa-bell text-black me-1"></i>Notification Preferences</Nav.Link>
                  <NavDropdown title="Help" id={`offcanvasNavbarDropdown-expand-${false}`} >
                    <NavDropdown.Item href="#action2"><i className="fa-solid fa-headset text-black me-2"></i>24x7 Customer Care</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <InputGroupCom style={{ minWidth: "300px" }} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)} onClick={handleOnClick} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChange(e)} value={searchText} type='text' placeholder='Search for Products, Brands and More' bs='mt-3 mb-3 shadow-none' />
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      }

    </>
  );
};

export default NavbarCom;