import React from "react"
import {project} from "../data/dummydata"
import CountUp from "react-countup";

export const Counter = () => {
  return (
      <> className="hero counter"
          <div className="container grid">
              {project.map((item, i) => (
                  <div className'box'>
                      <i>{item.icon}</i>
                      <h1 className='heading'>
                      <CountUp enableScrollSpy duration={2} end={item.enum}/>
                      </h1>
                      <h3>{item.title}</h3>
                  </div>
              ))}
          </div>
      </>
  )
}