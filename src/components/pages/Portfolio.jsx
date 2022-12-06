import { List } from "@mui/material"
import  React, { useState } from "react"
import {Visibility} from "@mui/icons-material";
import {portfolio} from "../data/dummydata";
import {Heading} from "../common/Heading";

const allCategory = ['all', ...new Set(portfolio.map((item) => item.category))]
export  const Portfolio = () => {

    const [list, setList] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)
    const  filterItems  = (category) => {
        const newItems = portfolio.filter((item) => item.category === category)
        setList(newItems)
        if(category==="all"){
            setList(portfolio)
        }
    }
  return (
      <>
  <article>
      <div className='container'>
          <Heading title='Portfolio'/>
        <div className='catButton'>
            {category.map((category) => (
                <button className="primaryBtn" onClick={() => filterItems(category)}>{}</button>
            ))}
        </div>
      </div>
      <div className='content grid-3'>
          {List.map((items) =>(
              <div className='box'>
                  <div className='img'>
                      <img src="{items.cover}" alt=""/>
                  </div>
                  <div className="overlay">
                      <h3>{items.title}</h3>
                      <span>{items.name}</span>
                      <Visibility />
                  </div>
              </div>
          ))}
      </div>
  </article>
  </>)
}