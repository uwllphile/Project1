import  React from "react"

export  const Portfolio = () => {
    const [list, setList] = userState(portfolio)
  return (<>
  <article>
      <div className='container'>
      <div className='catButton'>text</div>
      </div>
      <div className='content grid-3'>
          {List.map((items) =>(
              <div className='box'>
                  <div className='img'>
                      <img src="{items.cover}" alt=""/>
                  </div>
              </div>
          ))}
      </div>
  </article>
  </>)
}