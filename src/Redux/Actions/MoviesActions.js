import tipos from "./Tipo";
import axios from "axios";

const Url_Base = "https://api.themoviedb.org/3/movie/",
    key = "0e497e56fc016411a1dce35d53eac51a",
    Idioma = 'es',
    Url_2 = "https://api.themoviedb.org/3/search/movie/";

export const getEstrenos = () => dispatch => {
    dispatch({
        type: tipos.GET_ESTRENOS,
        payload: axios.get(`${Url_Base}now_playing?api_key=${key}&language=${Idioma}`)
    });
}

export const getProximosEstrenos = () => dispatch => {
    dispatch({
        type: tipos.GET_PROXIMOS_ESTRENOS,
        payload: axios.get(`${Url_Base}upcoming?api_key=${key}&language=${Idioma}`)
    });
}

export const getCreditos = (IdPelicula) => dispatch => {
    dispatch({
        type: tipos.GET_CREDITOS,
        payload: axios.get(`${Url_Base}${IdPelicula}/credits?api_key=${key}&language=${Idioma}`)
    });
}

export const getPelicula = (IdPelicula) => dispatch => {
    dispatch({
        type: tipos.GET_PELICULA,
        payload: axios.get(`${Url_Base}${IdPelicula}?api_key=${key}&language=${Idioma}`)
    });
}

export const getBusqueda = (query, pagina) => dispatch => {
    dispatch({
        type: tipos.GET_BUSQUEDA,
        payload: axios.get(`${Url_2}?query=${query}&page=${pagina}&api_key=${key}&language=${Idioma}`)
    });
}

export const clearBusqueda = () => {
    return {
        type: tipos.CLEAR_BUSQUEDA
    }
}