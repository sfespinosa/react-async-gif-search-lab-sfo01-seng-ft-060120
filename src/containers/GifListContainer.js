import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    
    state = {
        gifs: [],
        searchQuery: ""
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=dog&api_key=JzE8zao0Bj6PVYg9JxfxrCPNwDoHK0UI&rating=g')
        .then(res => res.json())
        .then(json => this.setState({
            gifs: json.data.slice(0, 3)
        }))
    }

    handleSearchChange = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchQuery}&api_key=JzE8zao0Bj6PVYg9JxfxrCPNwDoHK0UI&rating=g`)
        .then(res => res.json())
        .then(json => this.setState({
            gifs: json.data.slice(0, 3)
        }))
    }

    render(){
        return(
            <div>
                <GifSearch handleSearchChange={this.handleSearchChange} handleSubmit={this.handleSubmit}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}