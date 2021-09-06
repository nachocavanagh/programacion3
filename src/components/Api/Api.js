import React, {Component} from "react"
import Card from '../Card/Card'

class Api extends Component {
constructor(){
    super ();
    this.state = {
        albumes:[]

    }
}
componentDidMount(){
    let url = ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
    fetch (url)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        this.setState({
            albumes: data.data,
        })
    })
    .catch(error => console.log(error))
}

render (){
    return(
        <section className="card-container">
            {this.state.albumes.map((album, idx) => <Card key={album.title + idx} dataAlbum={album} />)}

        </section>
    )
}


}

export default Api