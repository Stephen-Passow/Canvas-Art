import React, { Component } from 'react'
import axios from 'axios'

export default class Paintings extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        category: ''
    }

    componentDidMount() {
        const paintingId = this.props.match.params.paintingId
        axios.get(`/api/v1/painting/${paintingId}`)
            .then((res) => {
                this.setState(res.data)
            })
    }
    render() {
        const { name, description, image, category } = this.state
        return (
            <div>
                <h1>{name}</h1>
                <h4>{description}</h4>
                <p>{image}</p>
                <p>{category}</p>
            </div>
        )
    }
}