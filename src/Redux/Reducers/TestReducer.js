import Tipo from "../Actions/Tipo";

const InitialState = {
    test: 'Hola Mundo',
    fecha: new Date()
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case Tipo.UPDATE_FECHA:
            return Object.assign({}, state, {
                fecha: action.payload
            });
        default:
            return state;
    };
}