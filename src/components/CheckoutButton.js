import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const [open, setOpen] = React.useState(false);
    
const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

class CheckoutButton extends Component {
    

    render() {

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Open form dialog
      </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Please Fill Detailed Address</DialogContentText>
                        <TextField id="standard-basic" label="Customer Name" />
                        <TextField id="standard-basic" label="Phone Number" />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField id="standard-basic" label="Address Line 1" />
                        <TextField id="standard-basic" label="Address Line 2" />
                        <TextField id="standard-basic" label="Address Line 3" />
                        <TextField id="standard-basic" label="Address Line 1" />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Confirm
          </Button>
                        <Button onClick={handleClose} color="primary">
                            Cancel
          </Button>
                    </DialogActions>
                </Dialog>
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
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutButton)