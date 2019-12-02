import React, { Component } from 'react'
import axios from 'axios'


export default class SinglePaintings extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        category: ''
    }

    componentDidMount() {
        const paintingId = this.props.match.params.id
        axios.get(`/api/v1/painting/${paintingId}`)
            .then((res) => {
                this.setState(res.data)
            })
    }
    render() {
        const { name, description, image } = this.state
        return (
            <div className="singlePainting">
                <h1>{name}</h1>
                <br></br>
                <h3>{description}</h3>
                <br></br>
                <img className="images"
                    src={image}>
                </img>
                <br></br>
                <br></br>
            </div>

        )
    }
}