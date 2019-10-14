import React from 'react'
import Title from '../Globals/Title'

export default function Contact() {
    return (
        <section className="contact py-5">
            <div className="container">
                <Title title="contact us" />
                <div className="row">
                    <div className="col-10 col-sm-8 col-md-6 mx-auto">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" name="name" id="name" placeholder="John Smith" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="john@smith.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="5" className="form-control" placeholder="your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-yellow text-capitalize mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
