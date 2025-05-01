import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductThunk, getProductThunk, setEditProduct} from '../../redux/reducers/productSlice'
import FormCard from '../../companents/cards/formcard/FormCard'
import styles from './Admin.module.css'

const Dashboard = () => {
  const dispatch = useDispatch()
 
  const data = useSelector(state => state.products.products)
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)

  useEffect(() => {
    dispatch(getProductThunk())
  }, [])

  const handleDelete = (_id) => {
    dispatch(deleteProductThunk(_id));
  };

  const handleEdit = (item) => {
    dispatch(setEditProduct(item));
    
  };

  if (loading) return <span>LOADING..</span>
  if (error) return <span>xeta</span>

  return (
    <div className={styles.formsdiv}>
      {data && data.map(item => (
        <FormCard key={item.id} item={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
      ))}
    </div>
  )
}

export default Dashboard