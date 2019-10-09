import React from "react";
import styled from "styled-components";

const Url_Base = "https://image.tmdb.org/t/p/w185";

const Container = styled.div`
    border:2px solid gold;
    margin2px;
`;
const Foto = styled.img``;
const Nombre = styled.span`
    background:rgba(0, 0, 0, 0.5);
    color;white;
`;

export default ({ actor }) => (
    <Container>
        <Foto src={actor.profile_path ? Url_Base + actor.profile_path : "http://dummyimage.com/185&text=No_Image"}></Foto>
        <Nombre>{actor.name}</Nombre>
    </Container>
);