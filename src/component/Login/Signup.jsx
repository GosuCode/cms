import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
    Email: yup.string().email('Please enter a valid email').required('Email is required'),
    Password: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
})

const Signup = () => {
    const navigate = useNavigate();

    const label = [
        {
            Name: 'Email',
            type: 'email'
        },
        {
            Name: 'Password',
            type: 'password'
        },
    ]
    return (

        <div>
            <Formik
                initialValues={{
                    Email: " ",
                    Password: " ",
                }}

                validationSchema={schema}

                onSubmit={(val) => {
                    try {
                        axios.post("https://kalikablog.onrender.com/auth/register/", val)
                            .then((res) => {
                                navigate('/');
                            }).catch(error => {
                                console.log(error)
                            })
                    } catch (error) {

                        console.log(error)
                    }
                }}
            >

                {({ handleSubmit }) => {
                    return (
                        <Form onSubmit={handleSubmit} encType="multipart/form-data">
                            {label.map((val, i) => {
                                return (
                                    <div key={i} className='flex'>
                                        <label key={i} htmlFor={val.Name}>{val.Name}</label>

                                        <div>
                                            <Field
                                                type={val.type}
                                                name={val.Name}
                                                className="border-2 border-gray-400 focus:outline-none rounded-md"
                                            />
                                            <ErrorMessage
                                                component={"div"}
                                                name={val.Name}
                                                className='text-red-500 text-sm'
                                            >
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                )
                            })
                            }
                            <button type='submit'>Sign Up</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )





}

export default Signup
