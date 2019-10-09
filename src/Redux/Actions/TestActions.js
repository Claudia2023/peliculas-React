import tipos from "./Tipo";

export const updateFecha = () => {
    return {
        type: tipos.UPDATE_FECHA,
        payload: new Date()
    };
}