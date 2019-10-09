import React from "react";
import styled from "styled-components";
import Search from "./Search";
import { connect } from "react-redux";

import { getBusqueda, clearBusqueda } from "../Redux/Actions/MoviesActions";

const Contenedor = styled.div`
    position:fixed;
    width:100%;
    height:75px;
    background:rgba(0, 0, 0, 0.5);
    color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    >h3{
        margin-left:20px;
    }
`;
const Fecha = styled.div`
   
`;

class Header extends React.Component {
    render() {
        return (
            <Contenedor>
                <h3>That's My Movie</h3>
                {this.props.path === "/" && <Search onChangeSearch={this.onChangeSearch} clear={this.onClearText} search_Text={this.state.search_Text} />}
                <Fecha>{this.props.test.fecha.toLocaleString()}</Fecha>
            </Contenedor>
        );
    }
    onClearText = () => {
        this.setState({ search_Text: "" });
        this.props.clearBusqueda();
    }
    onChangeSearch = evet => {
        //console.log(evet.target.value);
        let { value } = evet.target;
        if (value) {
            this.props.getBusqueda(value, 1);
        } else {
            this.props.clearBusqueda();
        }
        this.setState({ search_Text: value });
    }
    state = {
        search_Text: ""
    }
}

function mapStateToProps({ test }) {
    return { test };
}
export default connect(mapStateToProps, {
    getBusqueda, clearBusqueda
})(Header);