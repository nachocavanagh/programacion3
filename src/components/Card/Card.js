import React, {Component} from "react"

class Card extends Component {
constructor(props){
    super (props);
    this.state = {
        Albumes:[]

    }
}

render () {
    return(
             <article>
                  <section className="navigation">
                    <div>
                      <i className="fas fa-chevron-left"></i>
                      <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close"></i>
                  </section>
                  <main>
                    <img src={this.props.dataAlbum.cover} alt="" />
                      <h3>{this.props.dataAlbum.title}</h3>
                      <p className="description"></p>
                      <section className="aditional-info">
                        
                      </section>
                      <a href="">Ver más</a>
                  </main>
                </article>
            

    )
}


}

export default Card