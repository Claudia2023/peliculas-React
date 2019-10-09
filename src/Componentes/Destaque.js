import React from "react";
import styled from "styled-components";

const Url_Base = "https://image.tmdb.org/t/p/w780/";
const Inicio = styled.div`
    background: url(${props => Url_Base + props.pelicula.backdrop_path}) no-repeat;
    background-size:cover;
    height:700px;
    color: white;
    font-size:22px;
    font-family: "Anton", sans-serif;
    font-family: 'Anton', sans-serif;
`;
const PeliculaInfo = styled.div`
    position:relative;
    color:rgba(205, 220, 57, 1);

`;
const PeliculaInfoContent = styled.div`
    position:absolute;
    top:150px;
    left:50px;
    background:rgba(38, 50, 56, 0.5);
    padding: 10px;
`;
const PeliculaInfoTitulo = styled.h1`
    color: rgba(255, 179,0, 1);
    font-family: "Rock Salt", cursive;
`;
const PeliculaInfoOverView = styled.p`
    font-size:14px;
    max-width: 220px;
    text-align: justify;
`;
const VotoPromedio = styled.span`
    color:rgba(100, 221, 23, 1);
    font-family:"Cinzel", srif;
`;
const Cargando = styled.div`
    text-align:center;
    font-size:22px;
`;

export default ({ pelicula }) => {
    if (pelicula) {
        return (
            <Inicio pelicula={pelicula}>
                <PeliculaInfo>
                    <PeliculaInfoContent>
                        <PeliculaInfoTitulo>
                            {pelicula.title}
                        </PeliculaInfoTitulo>
                        <PeliculaInfoOverView>
                            {pelicula.overview}
                        </PeliculaInfoOverView>
                        <VotoPromedio>
                            {pelicula.vote_average}/10
                        </VotoPromedio>
                    </PeliculaInfoContent>
                </PeliculaInfo>
            </Inicio>
        );
    } else {
        return (<Cargando>Cargando...</Cargando>);
    }
}