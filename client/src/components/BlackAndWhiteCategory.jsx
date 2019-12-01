import React, { Component } from 'react'
import axios from 'axios'

export default class BlackAndWhiteCategory extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        category: ''
    }
    setCategory() {
        this.state.category
    }
    componentDidMount() {
        axios.get('/api/v1/painting/BlackAndWhite')
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
