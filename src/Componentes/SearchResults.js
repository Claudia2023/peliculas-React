import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Url_Base = "https://image.tmdb.org/t/p/w185";

const ContResult = styled.div`
    display:flex;
    background: black;
    flex-wrap:wrap;
`;
const Items = styled(Link)`
    background:url(${props => Url_Base + props.pelicula.poster_path}) no-repeat;
    background-size:cover;
    height:300px;
    width:200px;
`;

export default ({ data }) => {
    return (
        <ContResult>
            {
                data.map(pelicula => (
                    <Items key={pelicula.id} pelicula={pelicula} to={`/detalles/${pelicula.id}`} />
                ))
            }
        </ContResult>
    )
}