import  React from "react"
import {social} from "../data/dummydata";

export const Footer = () => {
  return (
      <>
      <footer>
          {social.map((item) => (
              <>
              <i>{item.icon}</i>
              </>
          ))}
          <p>All Right Reserved 2022</p>
      </footer>
      </>
  )
}