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
                <h1>Art Gallery</h1>
                {this.state.paintings.map((painting) => {
                    const paintingLink = `/paintings/${painting.id}`
                    return (
                        <div key={painting.id}>

                            <h3>{painting.name}</h3>

                            <Link to={paintingLink}>
                                <img className="images" alt="" src={painting.image}
                                />
                            </Link>

                        </div>
                    )
                })}
            </div>
        )
    }
}