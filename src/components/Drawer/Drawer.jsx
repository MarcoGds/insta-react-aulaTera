import React from "react";
import './Drawer.css';

const Drawer = ({ open = false, closeChat }) => {
    return (

        <div className='drawer' data-open = {open}>
            <div className='drawer__header'>
                <button type="button" onClick={() => closeChat(false)}>Fechar</button>
            </div>
        </div>
    )
}

export default Drawer;