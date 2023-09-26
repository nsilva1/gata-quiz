import React, { useState, useContext } from 'react';
import { addDocumentWithID, auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loader from '../common/Loader';
import Navbar from '../common/Navbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const { setToastContent, setToastOpen, setToastVariant } = useContext(AppContext);

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const createUser = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setToastContent('Please enter a password with at least six characters.');
      setToastVariant('alert-info');
      setToastOpen(true);
      return;
    }

    const userData = {
      name,
      email,
    };

    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        addDocumentWithID('users', user.uid, userData);
      })
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        setToastVariant('alert-error');
        setToastContent(`${error}`);
        setToastOpen(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <div className='bg-black h-screen'>
        <div className='flex flex-col flex-1 items-center'>
          <h1 className='font-poppins text-3xl text-white text-center h-[20px] py-24'>REGISTER</h1>
          <div className='card flex-shrink-0 w-96 h-full shadow-2xl bg-base-100 mb-12'>
            <div className='card-body'>
              <form onSubmit={createUser}>
                <fieldset disabled={loading}>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Full Name</span>
                    </label>
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='input input-bordered'
                      required
                    />
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='input input-bordered'
                      required
                    />
                  </div>
                  <div className='form-control'>
                    <label className='label'>
                      <span className='label-text'>Password</span>
                    </label>
                    <input
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='input input-bordered'
                      required
                    />
                    <label className='label'>
                      <span className='label-text-alt font-semibold'>Already have an account?</span>
                      <Link to='/login' className='label-text-alt link link-hover font-semibold'>
                        Login
                      </Link>
                    </label>
                  </div>
                  <div className='form-control mt-6'>
                    {loading ? (
                      <div className='text-center'>
                        <Loader />
                      </div>
                    ) : (
                      <button
                        type='submit'
                        className='rounded-full py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none duration-200 hover:scale-105 btn-block'
                      >
                        SUBMIT
                      </button>
                    )}
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
