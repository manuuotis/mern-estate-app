import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className=' max-w-lg p-3 mx-auto'>
      <h1 className='text-3xl text-center font-semibold  my-7'>
        Sign Up
      </h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder="username" id='username'
        className='border p-3 rounded-lg'/>
        <input type="email" placeholder="email" id='email'
        className='border p-3 rounded-lg'/>
        <input type="password" placeholder="password" id='password'
        className='border p-3 rounded-lg'/>
        <button className='bg-slate-700 rounded-lg text-white p-3 uppercase hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed'>Sign Up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/Sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  )
}
