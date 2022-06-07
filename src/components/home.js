import React from 'react'
import Login from './login'
import Navbar from './navbar'
import { Link } from 'react-router-dom';
import '../css/home.css'

export default function Home() {
  const loggedIn = localStorage.getItem('authUser')

  return (
    <>
      <div>
        {/* <Link to="/apply" className="btn btn-primary">Apply</Link> */}
        <div className="container-box">
          <section className="box-1">
            <h1>Lorem Ipsum</h1>
            <p className='pl-3 text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Fusce commodo varius ex.
               Sed egestas arcu turpis, vitae aliquam nibh porta sed.
               In eget lectus in tellus maximus tincidunt.
               Vestibulum rutrum dignissim augue.
               Donec pretium at neque vel porta.
               Aenean finibus enim tortor, et interdum libero congue id.
               In dictum dapibus consectetur.
            </p>
          </section>
          <section>{!loggedIn && (<Login />)}</section>
          <section className="box-2">
            <div className='apply-header p-3 mb-2'>
              <h1>Apply to one of our jobs</h1>
            </div>
            <div className="spinner scroll-down"> <a className="animate"></a> </div>
            <Link id="clickbtn" to="/apply" className="btn">Apply</Link>
          </section>
        </div>
      </div>
    </>
  )
}
