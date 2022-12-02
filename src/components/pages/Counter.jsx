import React from "react"

export const Counter = () => {
  return (
      <> className="hero counter"
          <div className="container grid">
              {project.map((item, i) => (
                  <div className'box'>
                      <i>{item.icon}</i>
                      <h1 className='heading'>{item.title}</h1>
                      <h3>{item.desc}</h3>
                  </div>
              ))}
          </div>
      </>
  )
}