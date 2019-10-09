import React from 'react';
import { connect } from "react-redux";
import { getEstrenos, getProximosEstrenos } from "../Redux/Actions/MoviesActions";

import Header from "../Componentes/Header";
import SearchResults from "../Componentes/SearchResults";
import Destaque from "../Componentes/Destaque";
import Estrenos from "../Componentes/Estrenos";
import TituloSeccion from "../Componentes/TituloSeccion";


function mapStateToProps({ estrenos, proximos_estrenos, Busqueda }) {
    return {
        estrenos, proximos_estrenos, Busqueda
    };
}

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getEstrenos();
        this.props.getProximosEstrenos();
        //this.getData();
        //this.getProximosEstrenos();
        // console.log(this.props.test.test);
    }
    /*
    getData = async () => {
        try {
            let resultados = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0e497e56fc016411a1dce35d53eac51a&language=es');
            //console.log(resultados.data.results);
            this.setPeliculaDestacada(resultados.data.results);
            this.setState({ peliculas: resultados.data.results });
        } catch (error) {
            console.log("Error en petición:", error);
        }
    }
    getProximosEstrenos = async () => {
        try {
            let resultados = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=0e497e56fc016411a1dce35d53eac51a&language=es');
            this.setState({ proximosEstrenos: resultados.data.results });
        } catch (error) {
            console.log("Error en petición:", error);
        }
    };
    
        setPeliculaDestacada(peliculas) {
            let peliculaDestacada = peliculas[Math.floor(Math.random() * peliculas.length)];
            this.setState({ peliculaDestacada: peliculaDestacada });
        }*/
    renderResults = () => {
        if (this.props.Busqueda.data.length === 0) {
            return (
                <div>
                    <SearchResults data={this.props.Busqueda.data} />
                    <Destaque pelicula={this.props.estrenos.peliculaDestacada} />
                    <TituloSeccion>Estrenos: </TituloSeccion>
                    <Estrenos peliculas={this.props.estrenos.data} />
                    <TituloSeccion>Proximamente: </TituloSeccion>
                    <Estrenos peliculas={this.props.proximos_estrenos.data} />
                </div>
            )
        } else {
            return (
                <div>
                    <SearchResults data={this.props.Busqueda.data} />
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <Header path={this.props.match.path} />
                {this.renderResults()}
            </div>
        );
    }
}

export default connect(mapStateToProps, {
    getEstrenos, getProximosEstrenos
})(HomePage);