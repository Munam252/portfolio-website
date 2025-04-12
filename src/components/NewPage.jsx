import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useCart } from '../CartContext'; // Assuming you're using a cart context
import cartIcon from '../assets/cart.png';
import logo from '../assets/Logo-nobg.png';
import { Link } from 'react-scroll';
import '../css/MyNavbar.css';
import ProductPage from './ProductPage';
import { useNavigate } from 'react-router-dom';
import CheckoutPage from './Checkout';


function MyNavbar() {
  const [goToCheckout, setGoToCheckout] = useState(false);
  const navigate =useNavigate();
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart, removeFromCart } = useCart();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <div className='naving'>
        <Navbar style={{ backgroundColor: '#001f3f' }}  expand="lg" className="py-0">
          <Container>
            <Navbar.Brand href="/">
                <img
                  src={logo}
                  alt="ElClub Logo"
                  style={{ height: '80px' }}
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
            <Navbar.Collapse className="justify-content-end d-none d-lg-flex">
              <Nav>
                <Nav.Link>
                  <Link to="products" spy={true} smooth={true} offset={-70} duration={5} style={{ color: 'white', marginTop:'120px' }}>Products</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="contact" spy={true} smooth={true} offset={-50} duration={5} style={{ color: 'white' }}>Contact Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="about" spy={true} smooth={true} offset={-30} duration={5} style={{ color: 'white' }}>About Us</Link>
                </Nav.Link>
                <Navbar.Brand onClick={handleCartShow} style={{ cursor: 'pointer', marginLeft: '20px', marginBottom:'-10px' }}>
                  <img src={cartIcon} alt="Cart" style={{ height: '40px' }} />
                  <span className="badge bg-danger rounded-circle ms-1">
                    {cart.length}
                  </span>
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Offcanvas Sidebar for Mobile */}
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
            <Nav.Link>
                  <Link to="naving" spy={true} smooth={true} offset={-30} duration={5}>Home</Link>
                </Nav.Link>
            <Nav.Link>
          
                  <Link to="products" spy={true} smooth={true} offset={-70} duration={5}>Products</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="contact" spy={true} smooth={true} offset={-50} duration={5}>Contact Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="about" spy={true} smooth={true} offset={-30} duration={5}>About Us</Link>
                </Nav.Link>
            </Nav>
            <Navbar.Brand onClick={handleCartShow} style={{ cursor: 'pointer', marginLeft: '20px' }}>
                  <img src={cartIcon} alt="Cart" style={{ height: '40px' }} />
                  <span className="badge bg-danger rounded-circle ms-1">
                    {cart.length}
                  </span>
                </Navbar.Brand>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Cart Sidebar */}
        <Offcanvas show={showCart} onHide={handleCartClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Your Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <ul className="list-group">
                  {cart.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                     <p className='P-class'> {item.description}</p>
                      <span className="badge bg-secondary">{item.quantity}</span>
                      <Button 
                        variant="danger" 
                        size="sm" 
                        onClick={() => removeFromCart(item.id)}>
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-between mt-4">
                <h5>Total:</h5>
                <h5>${calculateTotalPrice()}</h5>
                </div>
                <div className="Check-div d-flex justify-content-center mt-4">
            
            <div className='check-butt'>
              <a href='/checkout'>checkout</a>
              </div>
               
              </div>

              </>
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default MyNavbar;