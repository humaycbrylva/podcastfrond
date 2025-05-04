import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../../redux/reducers/productSlice'
import styles from './SecTwo.module.css'
import TwoCard from '../../../companents/cards/twocard/TwoCard'


const SecTwo = () => {
  const dispatch=useDispatch()

    const data=useSelector(state=> state.products.products)
    const loading=useSelector(state=> state.products.loading)
    const error=useSelector(state=> state.products.error)

    useEffect(()=>{
        dispatch(getProductThunk())
    },[])

    if(loading) return <span>Loading...</span>
    if(error) return <span>Error</span>
  return (
    <div className={styles.musics}>
        <h3>Behind The Mic</h3>
        <div className={styles.cardivs} >
           {data && data.map(item=>(<TwoCard key={item.id} item={item} />))}
        </div>  
    </div>
    
    
  )
}

export default SecTwo