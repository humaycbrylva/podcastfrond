import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postProductThunk, updateProductThunk } from '../../redux/reducers/productSlice';
import styles from './Admin.module.css';
import Admin from './Admin';

const Formik = () => {
  const dispatch = useDispatch();
  const editProduct = useSelector(state => state.products.editProduct);

  const formik = useFormik({
    initialValues: {
      title: '',
      achievment: '',
    },
    onSubmit: values => {
      if (editProduct) {
        dispatch(updateProductThunk({ id: editProduct.id, updatedData: values }));
      } else {
        dispatch(postProductThunk(values));
      }
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (editProduct) {
      formik.setValues({
        title: editProduct.title,
        achievment: editProduct.achievment,
      });
    }
  }, [editProduct]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column',justifyContent:'center',alignItems:'center', gap: '30px' }}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.forms}>
          <input className={styles.name}
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Name"
          />
          <input className={styles.desc}
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
            placeholder="Description"
          />
          <button className={styles.btn} type="submit">{editProduct ? "Edit Product" : "Add Product"}</button>
        </div>
      </form>
      <Admin/>
    </div>
  );
};

export default Formik;