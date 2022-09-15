import React from 'react'
import { useParams } from 'react-router-dom'
import Page1 from './page1'
import Page2 from './page2'

export default function Page() {

    const params = useParams()
    
  return (
    parseInt(params.id)===1 ? <Page1 /> : parseInt(params.id) ===2 && <Page2/>
  )
}
