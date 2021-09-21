import React, {Component} from "react"
import './card.css'
import '../Main/Main'

class Card extends Component {
constructor(props){
    super (props);
    this.state = {
        Albumes:[],
        viewMore: false,
        text: 'Ver más',
    }
}

viewMore(){
  if(this.state.viewMore){
      this.setState({
          viewMore: false,
          text: 'Ver más'
      })
  } else {
      this.setState({
          viewMore: true,
          text: 'Ver menos'
      })            
  }
}



render () {
    return(
      <React.Fragment>

        
       
             <article className={`${this.props.row ? 'columns' : 'rows'} `}>
         

                  <section className="navigation">
                    <div>
                      <i className="fas fa-chevron-left"></i>
                      <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close" id="borrar" onClick={() => this.props.remove(this.props.dataAlbum.id)} ></i>
                  </section>
                  <main>
                    <div className="image-container">
                      <img className={`image ${this.props.row ? 'image' : 'image2 ' }`}  src={this.props.dataAlbum.cover_big} alt="" />
                    </div>
                      <h3>{this.props.dataAlbum.title}</h3>
                      
                        <div className="artist-data">
                          <p>Artist:</p>
                          <img className="artist-img" src={this.props.dataAlbum.artist.picture_small} alt="" />
                          <p>{this.props.dataAlbum.artist.name}</p>
                        </div>

                      <section className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>
                        <p className="description">{this.props.dataAlbum.record_type.toUpperCase()}</p>                        
                        
                      <p>Explicit content: {this.props.dataAlbum.explicit_lyrics ? 'Yes' : 'No'}</p>

                      <p>Is it on radio? {this.props.dataAlbum.artist.radio ? 'Yes' : 'No'}</p>

                      </section>
                      <p className='view-more' onClick={()=>this.viewMore()}>{this.state.text}</p>
                  </main>
                </article>
            
                </React.Fragment>
    )
}


}

export default Card