import React from 'react';
import Destaque from "../Componentes/Destaque";
import Cast from "../Componentes/Cast";
import { connect } from "react-redux";
import { getCreditos, getPelicula } from "../Redux/Actions/MoviesActions";
import Header from "../Componentes/Header";



class PeliculaDetalle extends React.Component {
    componentDidMount() {
        //console.log(this.props.match.params.peliculaId);
        let { peliculaId } = this.props.match.params;
        this.props.getCreditos(peliculaId);
        this.props.getPelicula(peliculaId);
        //this.getPeliculaById(peliculaId);
        //this.getCreditos(peliculaId);
    };
    /*
    getCreditos = async (IdPelicula) => {
        try {
            let resultado = await axios.get(`https://api.themoviedb.org/3/movie/${IdPelicula}/credits?api_key=0e497e56fc016411a1dce35d53eac51a&language=es`);
            console.log(resultado.data);
            this.setState({ Creditos: resultado.data.cast });
        } catch (error) {
            console.log("Error en petición:", error);
        }
    };
    getPeliculaById = async (IdPelicula) => {
        try {
            let resultado = await axios.get(`https://api.themoviedb.org/3/movie/${IdPelicula}?api_key=0e497e56fc016411a1dce35d53eac51a&language=es`);
            this.setState({ InfoPeli: resultado.data });
        } catch (error) {
            console.log("Error en petición:", error);
        }
    };*/
    render() {
        return (
            <div>
                <Header fecha={this.props.test.fecha} path={this.props.match.path} />
                <Destaque pelicula={this.props.Pelicula.data} />
                <Cast cast={this.props.Creditos.data}></Cast>
            </div>
        );
    }
}

function mapStateToProps({ Creditos, Pelicula, test }) {
    return { Creditos, Pelicula, test };
}

export default connect(mapStateToProps, {
    getCreditos, getPelicula
})(PeliculaDetalle);