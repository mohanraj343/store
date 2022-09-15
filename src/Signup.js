import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterdata } from './reactStore/Counter';
import { decrement, increment } from './reactStore/loginSlice';

export default function Signup() {

const dispatch = useDispatch();


const terdata = useSelector(state=>state.couterreducer)
const countdata = useSelector(state=>state.loginreducer)

console.log(terdata.count.value, "counter");

  return (

    
    <div>
      
      <p className='bigger mb-3'>Signup</p>



            <h2>Join Trippldee - <br></br>
              <span >Let's be the good part! </span> </h2>
              <div className="let py-5">
            <p >Trippldee - a unique and innovative social media platform where you <br></br>
                can connect with people locally and support each other to explore <br></br> 
                opportunities, find a platform to showcase skills and achieve mutual <br></br>
                business and service benefits. Our new-age initiatives are people- <br></br>
                friendly and designed with the vision of creating a self-sustaining <br></br>
                society.</p>

                <button type="button" className="btn button bg-light text-dark"
                onClick={()=>{dispatch(counterdata())}}>Get Started</button>
                <p>{countdata.counter}</p>
                
                <br></br>

                </div>
                <br></br><br></br>


                <div className="abouttext">
                    {/* <h3 className='bigger mb-3'>ABOUT US</h3> */}
                <h2>We Are The Best Solution For  <br></br>
                
Creating  <span>A Self-sufficient Society </span> </h2>
                  
<div className="let py-5">

                <p>Trippldee is a social media platform of tomorrow, founded by  <br></br>
                    Mr. S. Deepak with a vision to effectively manage food wastage,
                    create more internal job opportunities for professionals, and exhibit 
                    talent. Trippldee is a multi-dimensional platform offering benefits to 
                    all types of users across various fields and interests. With our deeday, 
                    sight distance and social media features people can connect easily to 
                    share food, receive expert service and express their talent within 
                    their community. Trippldee's ultimate goal is to establish a grand 
                    chain of restaurants in our country, which serves Western cuisine in 
                    Indian style. 
                    </p>
    
                    <button type="button" className="btn button bg-light text-dark" onClick={()=>{dispatch(counterdata())}}>Learn more</button>


                    <p>{terdata?.count.value}</p>
                    </div>

                    </div>
    </div>
    
  )
}