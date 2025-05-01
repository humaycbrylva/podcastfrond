import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../../redux/reducers/productSlice'
import styles from './SecThree.module.css'
import TwoCard from '../../../companents/cards/twocard/TwoCard'
import ThreeCard from '../../../companents/cards/threecard/ThreeCard'


const SecThree = () => {
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
        <h3>Recent Podcasts</h3>
        <div className={styles.cardivs} >
           {data && data.slice (0,6).map(item=>(<ThreeCard key={item.id} item={item} />))}
        </div>  
    </div>
    
    
  )
}

export default SecThree