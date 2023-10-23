import React, { useEffect, useState } from "react"
import "./Navbar.scss"
import { Link, useLocation } from "react-router-dom";
 
const Navbar = () => {

    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);
    const{pathname} = useLocation();

    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }


    useEffect(()=>{
        window.addEventListener("scroll", isActive);

        return ()=>{
            window.removeEventListener("scroll", isActive);
        }
    }, []);

   const currentUser= {
        id:1, 
        username:"John Doe",
        isSeller:true
    }
    return(
        <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
          <div className="container">
            <div className="logo">
                
                <Link to="/" className="link">
                    <span className=" text">*website name</span>
                    </Link>
                    
                

               
                <span className="dot">.</span>
            </div>
            <div className="links">
                    <span>Buisness</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>become a seller</span>}
                    {!currentUser && <button>Join</button>} 
                    {currentUser &&(
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src="./img/man.png" alt="" />
                            <span>{currentUser?.username}</span>
                            {open &&<div className="options">
                                {
                                    currentUser?.isSeller && (
                                        <>
                                        <Link className="link" to="/mygigs">Gigs</Link>
                                        <Link className="link" to="/add">Add New Gig</Link>
                                        </>
                                    )
                                }
                               
                               <Link className="link" to="/">Logout</Link>
                            </div>}
                        </div>
                        

                    )
                    
                    }
            </div>
           
            </div>
            
            {(active || pathname !=="/") &&(
                <>
                <hr />
            <div className="menu">
               <Link className="link" to="/">Food Deliveries</Link>
               <Link className="link" to="/">Courier Services</Link>
               <Link className="link" to="/">Retail Deliveries</Link>
               <Link className="link" to="/">E-commerce package Deliveries</Link>
               <Link className="link" to="/">Pharmacy and Medical errands</Link>
               <Link className="link" to="/">Electronic services</Link>
               
              
            </div>
            </>
            )}
        </div>
    );
};

export default Navbar;

// we are at 30:00