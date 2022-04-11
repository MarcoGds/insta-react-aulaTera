import React from "react";
import './Drawer.css';
import { DrawerForm } from "./DraweForm";
import { DrawerContent } from "./DraweContent";

const Drawer = ({ open = false, closeChat }) => {

    return (

        <div className='drawer' data-open = {open}>
            <div className='drawer__header'>
                <button type="button" onClick={() => closeChat(false)}>Fechar</button>
            </div>

            <DrawerContent />

            <DrawerForm />
            
        </div>
    )
};

export default Drawer;