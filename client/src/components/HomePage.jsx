import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class HomePage extends Component {
    state = {
        paintings: []
    }
    componentDidMount() {
        axios.get('/api/v1/painting')
            .then((res) => {
                const allPaintings = res.data;
                this.setState({ paintings: allPaintings })
            })
    }
    render() {
        return (
            <div className="App">
                <h1>Canvas Art!</h1>

                {this.state.paintings.map((painting) => {
                    return (
                        <div key={painting.id}>
                            <h2>{painting.name}</h2>
                            <img src={painting.image} />
                            <p>{painting.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}