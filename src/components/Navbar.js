import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        console.log("items in cart ::", this.props.items)
    return (
        <nav className="nav-wrapper nav-temp">
            <div className="containerNavBar">
                <Link to="/" className="brand-logoNavBar">Proxelo</Link>

                <ul className="right1">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>


    )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
