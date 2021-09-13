import React, {Component} from "react"
import Card from '../Card/Card'
import Header from '../Header/Header'

class Api extends Component {
constructor(){
    super ();
    this.state = {
        albumes:[],
        limit: 10,
    }
}
componentDidMount(){
    let url = ("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=" + this.state.limit.toString())

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

deleteCard(albumABorrar) {
    let albumsQueQuedan = this.state.albumes.filter(album => album.id !== albumABorrar);
    this.setState({
        albumes: albumsQueQuedan
    })
}

addMore(){
    let limitAnterior = this.state.limit
    this.setState({
            limit: limitAnterior + 10,
        },
        () => this.traerMas())   
}

traerMas() {
    let url = ("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=" + this.state.limit.toString())

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                albumes: data.data,
            })
            console.log(url);
        })
        .catch(function (e) {
            console.log(e);
        })
}

render (){
    return(

        <React.Fragment> 
          <Header />
          <main className="container">
            
            <section className="card-container">
             {this.state.albumes.map((album, idx) => <Card key={album.title + idx} dataAlbum={album} remove={(albumABorrar) => this.deleteCard(albumABorrar)} />)}

            </section>

          <div className="button-container">
             <button className="more" type="button" onClick={() => this.addMore()} >Cargar más tarjetas</button>
          </div>
        </main>
        </React.Fragment>
    )
}


}

export default Api