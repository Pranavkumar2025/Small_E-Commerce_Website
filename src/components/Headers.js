import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Headers = () => {
const {carts} = useSelector((state)=>state.allCart);


    return (
        <>
            <Navbar style={{ height: "60px", background: "linear-gradient(to top left,purple,green)", color: "white", borderRadius:"15px" }}>
                <Container>
                <NavLink to="/" className="text-decoration-none text-light mx-2 NavImg">
                    <img src="https://www.simicart.com/blog/wp-content/uploads/KFC-logo.jpg" alt="" />
                    <h3 className='text-light navText'>E-commerce</h3>
                </NavLink>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </span>
                    </div>
                    </NavLink>
                   
                </Container>
            </Navbar>
        </>
    )
}

export default Headers