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
                <h1>Canvas art by Leidy</h1>
                
                {this.state.paintings.map((painting) => {
                    return (
                        <div key={painting.id}>

                            <h2>{painting.name}</h2>

                            <Link to="/Artist">
                                 <img src={painting.image} 
                                  /> 
                                  </Link>

                        </div>
                    )
                })}
                <Link to ="/Artist"><button>
                    Meet the Artist!
                    </button>
                    </Link>
            </div>
        )
    }
}