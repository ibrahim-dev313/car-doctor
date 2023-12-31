import { faFacebook, faGoogle, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);


    const handleSignUp = (e) => {
        e.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email);
        createUser(email, password)
            .then(res => {
                const user = res.user
                console.log(user);
            })
            .catch(err => console.log(err.message))
    }


    return (
        <div className="w-full min-h-screen hero ">
            <div className="flex-col w-full hero-content lg:flex-row ">
                <div className="text-center lg:text-left lg:w-1/2">

                    <img src={img} alt="" />
                </div>
                <div className="flex-shrink-0 w-full shadow-2xl card bg-base-100 lg:w-1/2">
                    <form onSubmit={handleSignUp} className="w-full space-y-5 card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up Now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" name='name' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="font-semibold label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" className="input input-bordered" name='password' required />

                        </div>
                        <div>
                            <p className="font-semibold text-center">Or Sign In With</p>
                            <div className='flex items-center justify-center gap-4 my-4'>
                                <div className='rounded-full btn-ghost'>
                                    <FontAwesomeIcon icon={faFacebook} size="2xl" style={{ color: "#0d5de7", }} />
                                </div>
                                <div className='rounded-full btn-ghost'>
                                    <FontAwesomeIcon icon={faGoogle} size='2xl' style={{ color: "black", }} />
                                </div>
                                <div className='rounded-full btn-ghost'>
                                    <FontAwesomeIcon icon={faLinkedin} size='2xl' style={{ color: "#0d5de7", }} />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 form-control">
                            <button className="btn btn-error">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;