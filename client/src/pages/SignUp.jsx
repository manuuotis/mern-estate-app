import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"


export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  //Function to handle change in form inputs
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    });
  };
    
  //Function to state what happens upon submitting form
  const handleSubmit = async (e) =>{
    e.preventDefault(); //prevent refreshing page after submit

    try {
      setLoading(true);
      const res = await fetch ('/api/auth/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false)
      setError(null)
      navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
 
  return (
    <div className=' max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl text-center font-semibold  my-7'>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder="username" id='username'
        className='border p-3 rounded-lg'onChange={handleChange}/>
        <input type="email" placeholder="email" id='email'
        className='border p-3 rounded-lg'onChange={handleChange}/>
        <input type="password" placeholder="password" id='password'
        className='border p-3 rounded-lg'onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed'>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/Sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5 animate-bounce">{error}</p>}
    </div>
  );
};
