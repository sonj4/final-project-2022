import React from 'react'
import './about.css'
export default function About() {
  return (
    <div className='aboutPageContiner'>
      <div className="backend">
       <span className='aboutTitle'>BACKEND</span>
       <p style={{borderBottom: "1px solid white", width:"300px"}}></p>
       <span className='aboutSpan'>Lazarevic Veselin</span>
       <span className='aboutSpan'>9. maj 1995.</span>
       <span className='aboutSpan'>Podgorica</span>
       <span className='aboutSpan'>ETF</span>
       <span className='aboutSpan'>Pripravnicki: Omnitech</span>
       <span className='aboutSpan'>aws, flutter, unity & django</span>
       <p style={{borderBottom: "1px solid white", width:"300px"}}></p>
       <span className='aboutTitle'>FRONTEND</span>
       <p style={{borderBottom: "1px solid white", width:"300px"}}></p>
       <span className='aboutSpan'>Knezevic Sonja</span>
       <span className='aboutSpan'>19. maj 2000.</span>
       <span className='aboutSpan'>Pljevlja</span>
       <span className='aboutSpan'>PMF</span>
       
      </div>
    </div>
  )
}
