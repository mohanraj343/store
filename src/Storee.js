import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import logo from './Cart.png'
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './reactStore/ProductSlice';
import { Link } from 'react-router-dom';
import Storemodal from './Storemodal';
import { reducedata } from './reactStore/DuplicateSlice';
import { CartContext, Duplicat } from './App';
import heart1 from './heart1.png'
import heart2 from './heart2.png'
import { addarr } from './reactStore/heartSlice';
import filter from './filter.png'
import StoreFilterModal from './StoreFilterModal';



export default function Storee() {

// const dup  = useContext(Duplicat)

// console.log(dup , "dupp");
    const {getCartProducts} = useContext(CartContext)
    const dispatch = useDispatch()
    const productdata = useSelector(state=>state.productreducer.products)
    const duplicat = useSelector(state=>state.duplicatereducer.duplicate) // cart product id
    const whis = useSelector(state=>state.heartreducer.heartarr) //whislist product id
const baseurl = 'https://api.escuelajs.co/api/v1/';
const [data, setdata] =useState()
const [idarr , setidarr] =useState([])
const [color , setcolor] = useState(false)
const [modal , setmodal] = useState(false)
const [modaldata , setmodaldata] =useState()
const [heart , setheart] = useState(false)
const [searchdata , setsearchdata] =useState([...productdata])
const [StoreFilter, setStoreFilter] =useState(false)
const [data1 , setdata1] = useState([])


const handleclose =()=> setmodal(false)
const FilterClose =()=>setStoreFilter(false)

console.log(idarr , "iddddd");

let sortarr =[];
let dupliarr=[] ;
if(idarr){
     sortarr = idarr.sort((a,b)=> a-b)

    for(let i=0; i<sortarr.length ; i++){
        if(sortarr[i]!== sortarr[i+1]){
             dupliarr.push(sortarr[i]) 
        }
    }
    // dupliarr.push(sortarr[sortarr.length])

    console.log(dupliarr , "duplicate");
}

// dispatch(addData([...productdata , ...dupliarr]))

// console.log(productdata , "productdata");
const request =  axios.create({
    baseURL :baseurl
})

console.log(searchdata , "empty");
useEffect(() => {

    if(productdata.length < 1){
        request.get('products')
        .then((resolve)=>{
            dispatch(addData((resolve.data.reduce((out, inn)=>{
                out.push({id:inn.id ,title : inn.title , price : inn.price , description : inn.description , image : inn.images[0] , category : inn.category.name,  qty : 1 ,customprice : inn.price})
                
                return out
            },[]))))
            console.log(resolve.data , "resolve");
            setsearchdata((resolve.data.reduce((out, inn)=>{
                out.push({id:inn.id ,title : inn.title , price : inn.price , description : inn.description , image : inn.images[0] , category : inn.category.name , qty : 1 , customprice : inn.price})
                
                return out
            },[])))

        
        })
        .catch((error)=>{
            console.log(error , "errorssssssssssssssssss");
        })

    }


},[])

useEffect(()=>{

    if(dupliarr.length>0){
        console.log("frommm");
        // dup.dupli(dupliarr)
        dispatch(reducedata(dupliarr))

    }

},[])




// useEffect(()=>{
//     const produce = new Set()
//     productdata?.map(ele=>{
//         console.log(ele?.category , "useeffect");
//         produce.add(ele?.category) 
//     })
//     setdata1(produce)

// },[productdata])


const removeheart = (id)=>{

    dispatch(addarr([...whis]?.filter(ele=> ele !== id))) 

}



console.log(whis , "whis for filter");
const StoreFilterModalFun =(cart , wish)=>{

 
//     if(cart && wish){
//         setsearchdata([...getCartProducts() , ...product])

//     }
//    else if(cart){
//         setsearchdata(getCartProducts())
//     }
  
//     else if(wish){
//         setsearchdata([...product]) 
//     }
//     else{
//         setsearchdata([...productdata])
//     }
 
}



const Searchfun =(e)=>{

    if(e) {
        setsearchdata([...productdata]?.filter(ele=>{

            if(((ele?.title).toUpperCase()).includes(e.toUpperCase().trim())){
    
                return ele
            }
        }))
    }

    else{

        setsearchdata([...productdata])
    }
 
}




// const priceFilterfun =(minmax)=>{ // price filter

   
// }



const ModalFilterFun =(state , cart , wish , minmax)=>{

    console.log([...data1] , "category");
    console.log(Object.values(state) , "category array");

const ab = [...data1].filter((ele,index)=>{
if( Object.values(state)[index]===true){   //true category
    return ele
}
})

console.log(ab , "filtered category");

let filterdata = [...productdata]
if(cart && wish){

   filterdata = whis?.reduce((ele , innele)=>{

        let  tempItem = [...getCartProducts()]?.find(elem=> elem?.id === innele)
        if(tempItem){
        ele.push(tempItem) 
        }
        return ele
      
        },[])
}


else if(cart){

    filterdata =  getCartProducts()
}

 else if(wish){

    const product = whis?.map(ele=>{
       return [...productdata]?.find(elem=> elem?.id === ele)
      
       })

       filterdata = [...product]
}


let arr =[];

if(ab.length>0){
    const bb = ab.map((elemm,ind)=>{
        console.log(elemm , "elemmmmmmmmmmmmmmmmmmm");
     const cb = [...filterdata].filter(element=>element?.category===elemm)      //arr has category filter element
     console.log(cb , "cb");
    arr =[...arr , ...cb]
        
    })

   filterdata = [...arr]
}


let objlen = Object.values(minmax).length  //minmax object length
if(objlen >0){
    filterdata =  [...filterdata].filter(ele=>{
       if(((ele?.price*79.80 <= minmax.max) || !minmax.max )&& ((ele?.price*79.80 >= minmax.min) || !minmax.min)) {
            return ele
        }
    })
}

if(objlen===0 && ab.length===0 && !cart && !wish){

        filterdata = [...productdata]
}



setsearchdata(filterdata)


}




// console.log(priceProduct , "priceproduct");


// if(objlen!==0){
//     setsearchdata([...priceProduct])
// }

// else if(ab.length===0 && cart){

//     setsearchdata(getCartProducts())

// }
// else if(ab.length===0 && wish ){
//     setsearchdata(whis?.map(ele=>{
//         return productdata?.find(elem=> elem?.id === ele)
//        }))
// }
// else if(ab.length===0 && cart && wish){
//     setsearchdata([...getCartProducts() , ...(whis?.map(ele=>{
//         return productdata?.find(elem=> elem?.id === ele)
//        }))])

// }

// else if(ab.length === 0 && objlen ===0){
//     setsearchdata([...productdata])

// }

// else{
  
//     console.log(bb , "bbbbbbbbbbbbbbbbbbbb");
    
//     console.log(arr , "arrrrrrrrrrrrrrararrararr");
    
//     setsearchdata([...arr])
// }





console.log(productdata , "productdata");

console.log(searchdata , "bbbbbbbbbbbbbbbbbbbbb");
    return (
        <div className='row'>

            <div className='d-flex'>
                <input className='MyProductsSearch ms-auto mb-4' placeholder={"Search"} type={'search'} onChange={(e)=>{Searchfun(e.target.value)}}></input>
                <img src={filter} className='filterimg ms-auto' onClick={()=>{ 
                     const produce = new Set()
                     productdata?.map(ele=>{
                         console.log(ele?.category , "useeffect");
                         produce.add(ele?.category) 
                     })
                     setdata1(produce)
                 
                    setStoreFilter(true)}} ></img>

            </div>
            {[...searchdata]?.map((ele, index)=>{

                return <div key={index} className='col-lg-3 '>

<div className='productbg'>
    <div className='hearts'>
       {!whis?.includes(ele?.id) && <img className='heart1' src={heart1} onClick={()=>{dispatch(addarr([...whis , ele?.id]))}} ></img>}
        {whis?.includes(ele?.id) && <img className='heart2'  src={heart2} onClick={()=>{removeheart(ele?.id)}} ></img>}
    </div>
                    <img className='productimg' onClick={()=>{setmodal(true); setmodaldata(ele?.id)}} src={ele?.image}></img> 
                        <p>{ele?.title}</p>
                        <p>&#8377; {ele?.price*79.80}</p>
           {!duplicat?.includes(ele?.id) &&  <button className='btn bg-warning addtocart' onClick={()=>{!duplicat.includes(ele?.id) && dispatch(reducedata([...duplicat,ele?.id]));}}>Add to Cart</button>}

            {duplicat?.includes(ele?.id) && 
                
               <Link to={'/home/cart'}><button className='btn gotocart'>Go To Cart</button></Link> }

                        </div>
                        </div>
            })}

            {searchdata.length===0 &&

            <div className='d-flex justify-content-center'>
                <p>{"No Data Found"}</p>
                </div>

            }

            <Storemodal handleclose={handleclose} show={modal} id={modaldata}/>
            <StoreFilterModal show={StoreFilter} data1={data1}  close={FilterClose} state={StoreFilterModalFun} filters={ModalFilterFun}/>
        </div>
    )

}
