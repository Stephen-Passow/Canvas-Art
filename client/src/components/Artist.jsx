import React, { Component } from 'react'

export default class Artist extends Component {
    
    render() {
        return (
            <div>
                <h1>Meet the artist!</h1>
                <image>image here</image>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis fugit, enim laboriosam praesentium ea! Accusantium nostrum, quisquam, nihil, alias laborum laudantium fuga labore sapiente necessitatibus ipsum quam assumenda nisi.</p>
                <br></br>
                <h4>Connect with me!</h4>
                <form className="contactForm">
                    <input type="email" placeholder="Email Address" />
                </form>
            </div>
        )
    }
}