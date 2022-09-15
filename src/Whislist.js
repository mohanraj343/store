import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { reducedata } from './reactStore/DuplicateSlice';
import { addarr } from './reactStore/heartSlice';
import heart1 from './heart1.png'
import heart2 from './heart2.png'

export default function Whislist() {

    const dispatch = useDispatch()
    const wish = useSelector(state=>state.heartreducer.heartarr)
    const duplicat = useSelector(state=>state.duplicatereducer.duplicate)
    const productdata = useSelector(state=>state.productreducer.products)
    const [search , setsearch] = useState([])
    const [evalue , setevalue] = useState()
    
    
    console.log(productdata , "dataproductwhis");
    
  
    const removeheart = (id)=>{
    
      dispatch(addarr([...wish]?.filter(ele=> ele !== id))) 
    
    }
    
  
    useEffect(()=>{
      setsearch(getWishlist()) 
    },[])
   
  

const getWishlist =()=>{
 return wish?.map((ele)=>{
    console.log(ele , "whis");
    const ab = productdata?.find(elem=> elem?.id===ele)
    return ab
  
   })
}


const WhislistSearch =(e)=>{



 if(e){
  setsearch([...getWishlist()]?.filter(ele=>{

    if((ele?.title.toUpperCase()).includes(e.toUpperCase())){
      return ele
    }
   
  }))
 }
 else{
  setsearch([...getWishlist()]) 
 }
}


      return (
        <div className='row'>
          <div>
            <input type={'search'} className='MyProductsSearch mb-4' onChange={(e)=>{setevalue(e.target.value)}}></input>
            <button type={'submit'} onClick={()=>{WhislistSearch(evalue)}} className='ms-1 btn bg-warning'>OK</button>
          </div>
        {[...search]?.map((ele, index)=>{

            return <div key={index} className='col-lg-3 '>

<div className='productbg'>
<div className='hearts'>
   {!wish?.includes(ele?.id) && <img className='heart1' src={heart1} onClick={()=>{dispatch(addarr([...wish , ele?.id]))}} ></img>}
    {wish?.includes(ele?.id) && <img className='heart2'  src={heart2} onClick={()=>{removeheart(ele?.id)}} ></img>}
</div>
                <img className='productimg' src={ele?.image}></img> 
                    <p>{ele?.title}</p>
                    <p>&#8377; {ele.price*79.80}</p>
       {!duplicat?.includes(ele?.id) &&  <button className='btn bg-warning addtocart' onClick={()=>{!duplicat.includes(ele?.id) && dispatch(reducedata([...duplicat,ele?.id]));}}>Add to Cart</button>}

        {duplicat?.includes(ele?.id) && 
            
        <Link to={'/home/cart'}><button className='btn gotocart'>Go To Cart</button></Link> }

                    </div>
                    </div>
        })}
        {search.length===0 && 
        <div className='d-flex justify-content-center'>
          <p>{"No Data Found"}</p></div>}

    </div>
            )
}

