import React from 'react';
import { /*BrowserRouter, Router, Link,*/HashRouter as Router, Route } from 'react-router-dom';
import { connect } from "react-redux";

import { updateFecha } from "../Redux/Actions/TestActions";

import HomePage from '../Paginas/HomePage';
import PeliculaDetalle from "../Paginas/PeliculaDetalle";
import Footer from "./Footer";

class App extends React.Component {
  componentDidMount() {
    setInterval(this.props.updateFecha, 1000);
  }
  render() {
    return (
      <Router>
        <div>          
          <Route exact path="/" component={HomePage} />
          <Route path="/detalles/:peliculaId" component={PeliculaDetalle} />
          <Footer />
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ test }) {
  return { test };
}

export default connect(mapStateToProps, {
  updateFecha
})(App);