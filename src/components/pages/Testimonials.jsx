import{FromQuote} from "@mui/icons-material"
import React from "react"
import {testimonials} from "../data/dummydata"
import  "slick-carousel/slick/slick.css"
import  "slick-carousel/slick/slick-theme.css"
import slider from "react-slick"
// check commit

export  const Testimonials = () => {
    return (
        <>
        <div className="testimonial hero">
            <div className="container">
                {testimonials.map((val) =>(
                    <div className="box">
                        <i>
                            <FormatQuote />
                        </i>
                            <p>{val.text}</p>
                            <div className="img">
                                <img src={val.imagaes} alt=""/>
                            </div>
                            <h3>{val.name}</h3>
                            <label>{val.post}</label>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}