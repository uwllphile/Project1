import  React from "react"
import {Visibility} from "@mui/icons-material";

const allCategory = ['all', ...new Set(portfolio.map((item) => item.category))]
export  const Portfolio = () => {

    const [list, setList] = userState(portfolio)
    const [category, setCategory] = userState(allCategory)
    const  filterItems  = (category) => {
        const newItems = portfolio.filter((item) => item.category === category)
        setList(newItems)
        if(category==="all"){
            setList(portfolio)
        }
    }
  return (<>
  <article>
      <div className='container'>
          <Heading title='Porfolio'/>
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