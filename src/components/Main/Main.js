import React, {Component} from "react"
import Card from '../Card/Card'
import Header from '../Header/Header'
import '../Card/card.css'

class Api extends Component {
constructor(){
    super ();
    this.state = {
        albumes:[],
        limit: 10,
        albumesIniciales:[],
        cargando: false,
        row: true,
    }
}
componentDidMount(){
    let url = ("https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/albums&top?limit=" + this.state.limit)

    fetch (url)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        this.setState({
            albumes: data.data,
            albumesIniciales:data.data,
            cargando: true,
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
        () => this.componentDidMount())   
}



filtrarAlbumes(textoAFiltrar){
    let albumesFiltrados = this.state.albumesIniciales.filter( album => album.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))

    this.setState({
        albumes: albumesFiltrados,
    })
}

toColumn (){
    this.setState({
           row: false,
       })
     }

   
toRow (){
    this.setState({
        row: true,
    })
}

   

render (){
    return(

        <React.Fragment> 
          <Header filtrar={(texto)=>this.filtrarAlbumes(texto)} toColumn= {()=> this.toColumn()} toRow= {()=> this.toRow()}/>
          <main className="container">
            
            <section  className="card-container">

            {
                this.state.cargando === false ?
                <img src="https://media.tenor.com/images/7500668d515374c0dd15a7ed1e8bdbd8/tenor.gif" alt="loading"/>  :
                this.state.albumes.map((album, idx) => <Card key={album.title + idx} dataAlbum={album} remove={(albumABorrar) => this.deleteCard(albumABorrar)} row={ this.state.row} />)
             }
             
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