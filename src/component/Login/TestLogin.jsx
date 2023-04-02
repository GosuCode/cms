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
        ),
    cpassword: yup.string()
        .required('Password confirmation is required')
        .oneOf([yup.ref('password'), null], 'Password must match')
})

const TestLogin = () => {

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
                    name: '',
                    email: '',
                    password: '',
                    cpassword: ''
                }}

                validationSchema={schema}

                onSubmit={(val) => {
                    console.log(val)
                }}
            >

                {({ handleSubmit }) => {
                    <Form onSubmit={handleSubmit}>
                        {
                            label.map((val, i) => {
                                return (
                                    <div key={i}>
                                        <label key={i} htmlFor={val.Name}>{val.Name}</label>

                                        <Field
                                            type={val.type}
                                            name={val.Name}
                                            className="border-2 border-gray-400 focus:outline-none rounded-md"
                                        />
                                        <p className='text-red-600 text-xs'><ErrorMessage /></p>
                                    </div>
                                )
                            })
                        }
                    </Form>
                }}
            </Formik>

        </div>
    )
}

export default TestLogin
