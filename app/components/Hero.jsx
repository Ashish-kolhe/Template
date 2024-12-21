import React from 'react'

const Hero = () => {
  return (
    <div className="p-10 bg-white">
    <div className="hero bg-white min-h-screen -mb-24 -mt-20 text-black">
    <div className="hero-content flex-col lg:flex-row-reverse max-w-2xl text-left">


      <img
        src="./superhero.gif"
        className="max-w-56" />
      <div>
        <h1 className="text-6xl font-black"> I Am Just Me</h1>
        <p className="py-6">
        Welcome to my world ☕💻, where coffee fuels code and ideas lead to all-night debugging marathons 🛠️🌙. Let’s create something awesome (or at least functional) together! 🚀
        </p>
       
        <button className="btn  btn-outline border-white text-white hover:text-white">Hire Me</button>
      </div>
     
    </div>
  </div>
  <div className='flex justify-center'>
  <input
  type="text"
  placeholder="Tell Me Something.."
  className="input input-bordered input-primary w-full max-w-xs" />
  </div>
  <div className='flex justify-center bg-white'>
   
  <div className="card bg-base-100 w-96 shadow-2xl shadow-cyan-50 my-20">
  <figure className="px-10 pt-10">
    <img
      src="./laugh.gif"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">My Project!</h2>
    <p>Why do programmers prefer dark mode? Because the light attracts bugs! 🦗💻</p>
    <div className="card-actions">
      <button className="btn btn-primary">Liked it ♥️</button>
    </div>
  </div>
</div>

</div>
  </div>
  )
}

export default Hero