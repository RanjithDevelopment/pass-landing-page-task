import React from 'react'
import "../css/body.css"
import { FaMap, FaAward, FaFacebook ,FaLinkedin,FaInstagram} from 'react-icons/fa'
const Body = () => {
  return (
    <>
      <div className='box'>
        <div className='container-body ' >
          <div className='container-fulid'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='content'>
              <a href='#'>  <FaMap size={50} style={{ color: "rgba(248, 32, 79, 0.841)",marginLeft:"3rem"}} /> </a>
                <p className='paragraph'>this is for sample purpose</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='content'>
              <a href='#'> <FaAward size={50} style={{ color: "rgba(248, 32, 79, 0.841)",marginLeft:"3rem"}} /></a> 
                <p className='paragraph'>this is for sample purpose</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='content'>
              <a href='#'> <FaFacebook size={50} style={{ color: "rgba(248, 32, 79, 0.841)",marginLeft:"3rem"}}/></a> 
                <p className='paragraph'>this is for sample purpose</p>
                </div>
              </div>

            </div>
          </div>
         
          <div className='row '>
            <div className='col-6'>
            <div className='content'>
            <a href='#'> <FaLinkedin size={50} style={{ color: "rgba(248, 32, 79, 0.841)",marginLeft:"3rem"}}/></a>   
                <p className='paragraph'>this is for sample purpose</p>
                </div>
            </div>
            <div className='col-6'>
            <div className='content'>
              <a href='#'> <FaInstagram size={50} style={{ color: "rgba(248, 32, 79, 0.841)",marginLeft:"3rem"}}/></a> 
                <p className='paragraph'>this is for sample purpose</p>
                </div>
            </div>
          </div>
          
        </div>
        <div className='triangle'>

        </div>
      </div>
    </>
  )
}

export default Body

