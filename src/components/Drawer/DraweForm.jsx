import React from "react";

export function DrawerForm () {
    function sendForm(event) {
        event.preventDefault();

        const name = event.target.elements.name.value;
        const comment = event.target.elements.message.value;

        fetch('https://624c9312c172b69d69274ae4.mockapi.io/api/v1/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                comment,
            }),
        })
        
    }


    return (
        <footer className="drawer__footer">
                <form onSubmit={sendForm}>
                    <input name="name" type="text" placeholder="Nome" />
                    <input name="message" type="text" placeholder="Digite sua mensagem" />
                    <button type="submit">Enviar</button>
                </form>
        </footer>
    )
}