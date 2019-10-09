import React from "react";
import styled from "styled-components";
import Logo from "../img/logomdb.png";

const Footer = styled.div`
    padding:20px;    
    background:rgba(38, 50, 56, 1);    
`;

export default () => (
    <Footer>
        <img src={Logo} alt="Logo MDB" width="200" height="75" />
    </Footer>
);