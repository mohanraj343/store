import React, { useRef, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux'
import cancel from './cancel.webp'
import left from './left1.png'
import right from './right1.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export default function StoreimgesModal(props) {
    const productdata = useSelector(state=>state.productreducer.products)
const [index , setindex] = useState(0)
const divref = useRef()

   let images =  ([...productdata]?.find(ele=>ele.id === props.id)?.image)
    console.log( [...productdata].find(ele=>ele.id === props.id)?.image ,"images");

    console.log(index , "index");

  return (
    <div>
        <Modal show={props?.show}>
            <Modal.Body>

            <div ref={divref} className='canceldiv'>
    <img className='cancel' src={cancel} onClick={()=>{props?.close(); setindex(0);}}></img>
    </div>  

    {/* <div className='d-flex my-4 justify-content-center'>
<img onClick={()=>{index > 0 ? setindex(prev=>prev-1) : setindex(images?.length-1)}} className='leftright left my-auto mx-1' src={left}></img>

 <img  className='StoreModalImgaes' src={images?.[index]}></img>

<img onClick={()=>{index < images?.length-1 ? setindex(prev=>prev+1) : setindex(0)}} className='leftright right my-auto mx-1' src={right}></img>
</div>
 */}



<Carousel>
    {
        images?.length > 0 &&
    [...images]?.map((ele,ind)=>{

        return <img key={index} src={ele} className='StoreModalImgaes'></img>
    })}
</Carousel>
{/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    {index===0 ? <li data-target="#carouselExampleIndicators" data-slide-to={index} class="active"></li>
    : 
    <li data-target="#carouselExampleIndicators" data-slide-to={index}></li>
}
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={images?.[index]} alt="slideImages"/>
    </div>
  </div>
  <a class="carousel-control-prev" onClick={()=>{index > 0 ? setindex(prev=>prev-1) : setindex(2)}} role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" onClick={()=>{index < 2 ? setindex(prev=>prev+1) : setindex(0)}} role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}



{/* <div>
<AliceCarousel  autoPlay autoPlayInterval="1500"> 
  {[...images]?.map((x) => (         
    <img src={x} alt={x} className="medium" />
   ))}
</AliceCarousel>
</div> */}
<div>
    
</div>
       </Modal.Body>
        </Modal>
    </div>
  )
}



// {
//     ([...productdata].find(ele=>ele.id === props.id)?.image)?.map((ele,index)=>{
   
//    return <img key={index} className='StoreModalImgaes' src={ele}></img>
   
//     })       
//    }