import React from 'react'
import Hero from '../Component/Hero'
import banner from '../image/banner.jpeg'
import {Link} from 'react-router-dom'
import Featured from '../Component/HomeComponent/Featured'


export default function HomePage() {
    return (
        <div>
            <Hero img={banner} title="camera products" max="true">
                <Link to="/store" className="btn btn-danger text-uppercase"> Go to store </Link>
            </Hero>
            <Featured />
        </div>
    )
}
