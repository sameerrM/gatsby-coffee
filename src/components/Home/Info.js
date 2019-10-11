import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our story" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet, leo at euismod malesuada, mauris arcu faucibus sem, ut auctor nisl nisl a est. Morbi non justo molestie lorem tristique commodo a et velit. Maecenas id massa sed nisl rhoncus blandit. Vestibulum quis dolor et magna pretium mattis. Vestibulum id est orci. In eleifend luctus urna, eget mattis nibh vehicula at. Pellentesque pulvinar, turpis in posuere eleifend, nisi elit lacinia purus, eu luctus velit nisi quis sapien.
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">About page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
