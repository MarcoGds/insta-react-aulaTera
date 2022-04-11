import React from "react";

export function DrawerContent() {
    const [messages, setMessages] = React.useState([]);

    async function searchMessages() {
        fetch('https://624c9312c172b69d69274ae4.mockapi.io/api/v1/chat')
        .then(response => response.json())
        .then(data=> setMessages(data));
    }

    React.useEffect(() => {
        let interval = setInterval(() => searchMessages(), 5000);
        return() => clearInterval(interval);
    });

    return (
        <div className="drawer__content">
            {messages.length
                ? messages.map((message) => (

                    <div 
                    key={message.id}
                    className="drawer__message">
                        <h4>{message.name}</h4>
                        <p>{message.comment}</p>
                    </div>

             ))
                : 'Nenhuma mensagem'
            }
        </div>
    )
}