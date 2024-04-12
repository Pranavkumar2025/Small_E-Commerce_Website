import React, { useState } from 'react'
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from "./CardData";
import { addToCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';


const Home = () => {
    const [cartData, setCartData] = useState(CardsData);
    const dispatch = useDispatch();


    // add to cart 
    const send = (e)=>{
        dispatch(addToCart(e))
        toast.success("Item added In Your Cart")
    }
    return (
        <>
            <section className='iteam_section mt-4 container'>
                <h2 className='px-4 ResText' style={{ fontWeight: 400 }}>Restaurants in Kolkata Open now</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {
                        cartData.map((element, index) => {
                            return (
                                <>
                                    <Card style={{ width: "22rem", border: "none", background: "linear-gradient(to top left,rgb(52, 82, 52),white)" }} className='hove mb-4 myCard'>
                                        <Card.Img variant='top' className='cd' src={element.imgdata}/>

                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className='mt-2'>{element.dish}</h4>
                                                <span>{element.rating}&nbsp;★</span>
                                            </div>

                                            <div className="lower_data d-flex justify-content-between ">
                                                <h5>{element.address}</h5>
                                                <span>₹ {element.price}</span>
                                            </div>
                                            <div className="extra"></div>

                                            <div className="last_data d-flex justify-content-center">
                                                {/* <img src={element.arrimg} className='limg' alt="" /> */}
                                                <Button style={{ width: "150px", background: "#ff3054db", border: "none" }} variant='outline-light'
                                                    className='mt-2 mb-2'
                                                    onClick={()=>send(element)}
                                                >Add TO Cart</Button>
                                                {/* <img src={el ement.delimg} className='laimg' alt="" /> */}

                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default Home