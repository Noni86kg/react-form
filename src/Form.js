import React from 'react'
import "./form.css"
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <section className="right-side">
            <div className="top">
                <p><span>Try it free 7 days</span> then $20/mo. thereafter</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='First Name' name='firstName' className={`${errors.firstName ? 'error-input' : '' }`} {...register('firstName', { required: true} )} />
                {errors.firstName && <p className='error'>First Name cannot be empty</p>}
                <input type="text" placeholder='Last Name' name='lastName' className={`${errors.firstName ? 'error-input' : '' }`} {...register('lastName', { required: true} )} />
                {errors.lastName && <p className='error'>Last Name cannot be empty</p>}
                <input type="email" placeholder={`${errors.firstName ? 'email@example/com' : 'Email Address' }`} name='email' className={`${errors.firstName ? 'error-email' : '' }`} {...register('email', { required: true} )} />
                {errors.email && <p className='error'>Looks like this is not an email</p>}
                <input type="password" placeholder='Password' name='password' className={`${errors.firstName ? 'error-input' : '' }`} {...register('password', { required: true} )} />
                {errors.password && <p className='error'>Password cannot be empty</p>}
                <button>CLAIM YOUR FREE TRIAL</button>
                <p className='terms'>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
            </form>

        </section>
    )
}

export default Form
