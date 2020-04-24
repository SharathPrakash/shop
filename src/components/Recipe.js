import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import M from "materialize-css";

//import { addShipping } from './actions/cartActions'
class Recipe extends Component {

    componentDidMount() {
        const options = {
            onOpenStart: () => {
            },
            onOpenEnd: () => {
            },
            onCloseStart: () => {
            },
            onCloseEnd: () => {
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);

        // let instance = M.Modal.getInstance(this.Modal);
        // instance.open();
        // instance.close();
        // instance.destroy();
    }

    // componentWillUnmount() {

    //      if(this.refs.shipping.checked)
    //           this.props.substractShipping()
    // }

    // handleChecked = (e)=>{
    //     if(e.target.checked){
    //         this.props.addShipping();
    //     }
    //     else{
    //         this.props.substractShipping();
    //     }
    // }
    submitHandler = e => {
        e.preventDefault()
        console.log("Items in cart Submit", this.props)

        const requestOptions = {
            body: JSON.stringify(this.props)

        };
        console.log("Items in cart body", requestOptions)

        axios.post('http://192.168.0.109:8080/post', requestOptions)
            .then(response => {
                console.log(response)

            })
            .catch(error => {
                console.log(error)
            })

    }


    render() {
        console.log("Items in cart ", this.props.total)
        console.log("Items in cart ", this.props)
        return (
            <div className="container">
                {/* <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div> */}
                {/* <div className="placeOrder" >
                    <form onSubmit={this.submitHandler}>
                        <button disabled={this.props.total === 0} className="waves-effect waves-light btn" type="submit" >Place Order</button>
                    </form>
                </div> */}

                <div className="placeOrder" >

                    <a disabled={this.props.total === 0} className="waves-effect waves-light btn modal-trigger" data-target="modal1" type="submit" >Place Order</a>



                    <div ref={Modal => { this.Modal = Modal; }} id="modal1" className="modal">
                        <div className="modal-content">
                            <h4>Order Confirmed</h4>
                            <p>We will deliver the order at the confirmed</p>
                        </div>
                        <div className="modal-footer">
                            {/* <form onSubmit={this.submitHandler}> */}
                            <form >
                                {/* <a className="modal-close waves-effect waves-green btn-flat" type="submit" >Ok</a> */}
                                <button className="modal-close waves-effect waves-green btn-flat" type="submit" >Confirm</button>
                            </form>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping: () => { dispatch({ type: 'ADD_SHIPPING' }) },
        substractShipping: () => { dispatch({ type: 'SUB_SHIPPING' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
