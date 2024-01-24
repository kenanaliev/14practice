
import "./index.scss"
import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"

const AddForm = () => {
    const [data, setdata] = useState([])
    const fetchData = async () => {
        const res = await axios.get("http://localhost:7000/")
        setdata(res.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:7000/${id}/`);
        fetchData();
    }


    return (
        <div>
            <Formik
                initialValues={{ title: '', image: '', price: '' }}
                validationSchema={Yup.object({
                    title: Yup.string().required('Required'),
                    image: Yup.string().required('Required'),
                    price: Yup.number().required('Required').positive("menfi olmaz"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post("http://localhost:7000/", values);
                    fetchData();
                }}
            >
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field name="title" type="string" />
                    <ErrorMessage name="title" />

                    <label htmlFor="image">Image</label>
                    <Field name="image" type="string" />
                    <ErrorMessage name="lastName" />

                    <label htmlFor="price">Price</label>
                    <Field name="price" type="number" />
                    <ErrorMessage name="price" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((item) => (
                            <tr key={item._id}>
                                <td>{item.title}</td>
                                <td>
                                    <img height={150} src={item.image} alt="" />
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => deleteData(item._id)}>x</button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

        </div>
    )
}

export default AddForm