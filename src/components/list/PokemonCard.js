import React from "react";
import axios from "axios";
import "./PokemonCard.css";
class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      url: props.url,
      data: {},
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon() {
    //demande de l'API
    axios
      .get(this.state.url)
      // extrait l'url du pokemon pris avant dans gallery
      .then((response) => response.data)
      // utilise le data pour mettre à jour le state
      .then((data) => {
        console.log(data); //permet de vérifier les données dans la console
        this.setState({
          data: data,
        });
      });
  }
  render() {
    /*on crée une carte de pokemon qui va afficjer la photo, le numéro et le nom de chaque pokemon*/
    /*on fait un ternaire pour que la carte s'applique à chaque pokemon. Si le pokemon à un id, renvoi la carte, sinon renvoi "toto"
    le ternaire est nécessaire car la class renvoi le render, puis fait appel à l'api puis re renvoi le render. */
    return (
      <div>
        {this.state.data.id ? (
          <div className="global">
            <img
              src={this.state.data.sprites.front_default}
              alt={this.state.data.name}
              className="carte"
            />
            <p className="titre">
              {this.state.data.id} {this.state.data.name}
            </p>
          </div>
        ) : (
          <p>toto</p>
        )}
      </div>
    );
  }
}

export default PokemonCard;
