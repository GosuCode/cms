import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    password: yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
            "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
        )

})

const Login = () => {

    const label = [
        {
            Name: 'name',
            type: 'name'
        },
        {
            Name: 'email',
            type: 'email'
        },
        {
            Name: 'password',
            type: 'password'
        },
        {
            Name: 'confirm password',
            type: 'confirm password'
        },
    ]
    return (
        <div>
            <Formik
                initialValues={{
                    name: "",
                    email: " ",
                    password: " ",


                }}

                validationSchema={schema}

                onSubmit={(val) => {
                    console.log(val)
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
                            <button type='submit'>Login</button>
                        </Form>
                    )
                }}
            </Formik>

        </div>
    )
}

export default Login
