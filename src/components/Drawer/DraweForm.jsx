import React from "react";

export function DrawerForm () {
    function sendForm(event) {
        event.preventDefault();

        const name = event.target.elements.name.value;
        const message = event.target.elements.message.value;

        console.log({ name, message });
    }


    return (
        <footer className="drawer__footer">
                <form onSubmit={sendForm}>
                    <input name="nome" type="text" placeholder="Nome" />
                    <input name="mensagem" type="text" placeholder="Digite sua mensagem" />
                    <button type="submit">Enviar</button>
                </form>
        </footer>
    )
}