import { combineReducers } from "redux";
import TestReducer from "./TestReducer";
import estrenos from "./EstrenosReducer";
import proximos_estrenos from "./ProximosEstrenosReducer";
import Creditos from "./CreditosReducer";
import Pelicula from "./PeliculaReducer";
import Busqueda from "./BusquedaReducer";

export default combineReducers({
    test: TestReducer,
    estrenos,
    proximos_estrenos,
    Pelicula,
    Creditos,
    Busqueda,
});