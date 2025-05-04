
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProductThunk, updateProductThunk } from '../../redux/reducers/productSlice';
import styles from './Admin.module.css';
import Admin from './Admin';
import { useFormik } from 'formik';

const Formik = () => {
  const dispatch = useDispatch();
  const [editItemId, setEditItemId] = useState();


  const formik = useFormik({
    initialValues: {
      image:"",
      title: "",
      achievment: ""
    },
    onSubmit: (data) => {
      if (editItemId) {
        dispatch(updateProductThunk({ id: editItemId, updatedData: data }));
        setEditItemId();
      } else {
        dispatch(postProductThunk(data));
      }
      formik.resetForm();
    },
  });

  const handleEdit = (item) => {
    setEditItemId(item._id); 
    formik.setValues({
      image: item.image,
      title: item.title,
      achievment: item.achievment,
    });
  };
  

  return (
    <div className={styles.formsdivs}>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.forms}>
        <input className={styles.title}
          id="image"
          name="image"
          type="text"
           placeholder="Image"
          onChange={formik.handleChange}
          value={formik.values.image}
        />
          <input className={styles.title}
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder="Title"
          />
          <input className={styles.desc}
            id="achievment"
            name="achievment"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.achievment}
            placeholder="Achievment"
          />
          <button className={styles.btn} type="submit">Add</button>
        </div>
      </form>
      <Admin handleEdit={handleEdit} />

    </div>
  );
};

export default Formik;