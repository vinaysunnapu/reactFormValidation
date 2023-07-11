import './index.css'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const loginImage = "https://res.cloudinary.com/dmmgoh7jg/image/upload/v1688973697/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector-r_gvcqau.png"

const initialValues = {
    email: '',
    password: ''
}

const loginSchema = Yup.object({
    email: Yup.string().required("*Please Enter Your Email"),
    password: Yup.string().min(6).required("*Please Enter Your Password")
})

const Form = () =>{

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: (values,action) =>{
           console.log(values)
           action.resetForm()
           
        }
    })

//  console.log(errors)

    return(
        <div className="main-container">
            <div className="container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <h1 className="heading">Login</h1>
                    <label htmlFor="email" className="label">Email Address</label>
                    <input name="email" value={values.email} type="text" className="input" id="email" placeholder="you@@mobilefirstapplications.com" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.email && touched.email ? <p className="error">{errors.email}</p>: null}
                    <label htmlFor="password" className="label">Password</label>
                    <input name="password" value={values.password} type="password" className="input" id="password" placeholder="Enter Password" onChange={handleChange} onBlur={handleBlur}/>
                    {errors.password && touched.password ? <p className="error">{errors.password}</p>: null}
                    <button type="submit" className="button">Login</button>
                    {/* <p className="error">{errText}</p> */}
                </form>
                <img alt="login" src={loginImage} className="image" />
            </div>
        </div>
    )
}

export default Form