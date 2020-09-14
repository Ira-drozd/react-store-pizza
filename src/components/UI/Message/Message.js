import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

const Message = (props) => {
    const {open, setOpen} = props
    const message = <div style={{textAlign: "center"}}>
        The same pizza is already in the cart. <br/>
        If you want to change <b>count</b> of pizza, go to the <b>cart</b>.
    </div>

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
            />
        </div>
    );
}

export default Message;