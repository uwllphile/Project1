import React from "react"
import { About } from "../pages/About"
import { Hero } from "./Hero"
import { Counter } from "../pages/Counter"
import {Portfolio} from "../pages/Portfolio";
import {Testimonials} from "../pages/Testimonials";
import {Blog} from "../pages/Blog";
import {Contact} from "../pages/Contact";

export const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Counter />
            <Portfolio />
            <Testimonials />
            <Blog />
            <Contact />

        </>
    )
}
