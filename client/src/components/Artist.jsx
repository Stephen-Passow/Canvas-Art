import React, { Component } from 'react'
import axios from 'axios'

export default class Artist extends Component {
    state = {
        email: ''
    }
    addNewEmail = (event) => {
        const postNewEmail = {
            email: this.state.email,
        }
        axios.post('api/v1/artist/', postNewEmail)
            .then((res) => {
                res.json(res.data)
            })
    }

    handleChange = (event) => {
        event.preventDefault()
        const prevState = { ...this.state }
        prevState.email = event.target.value
        this.setState(prevState)
    }

    render() {
        return (
            <div className="artistPage">
                <h1>Meet the artist</h1>

                <img src="https://github.com/Stephen-Passow/Canvas-Art/blob/master/client/images/tree-with-leidy.jpg?raw=true" alt="" />
                <br></br>
                <p>
                    Leidy grew up in Atlanta, GA where at a young age she discovered the modern arts. Her love for interior design and art has led her to create peaces for staging -embracing natural hues that speak louder than words. At the young age of 6 her painting during a school project was recognized statewide and displayed at the fern bank museum for young artist of the year. Her passion for art thrives today while she continues to be inspired and unleash her creativity. Leidy lives in Roswell, Ga with her husband Stephen and enjoys singing and photography during her spare time.
                </p>
                <br></br>
                <h4>Connect with me!</h4>
                <form onSubmit={this.addNewEmail} className="contactForm">
                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email Address" />
                    <input type="submit" />
                </form>
                <br></br>
            </div>
        )
    }
}