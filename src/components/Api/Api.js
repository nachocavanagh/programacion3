import React, {Component} from "react"

class Api extends Component {
constructor(){
    super ();
    this.state = {
        Albumes:[]

    }
}
componentDidMount(){
    let url = ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums")
    fetch (url)
    .then(response =>response.json())
    .then(data => {this.setState(
        {Albumes: data.albums })})
        console.log(this.state.Albumes)
    .catch(error => console.log(error))
}

render (){
    return(
        <Div>
            
        </Div>
    )
}


}

export default Api