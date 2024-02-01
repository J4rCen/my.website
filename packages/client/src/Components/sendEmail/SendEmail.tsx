import React, { useState } from "react"
import sendEmailTransport from "../../utils/sendEmailTransport"

const SendEmail = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if(name !== '' && email !== '' && message !== '') {
            const mes = {
                name: `Имя отправителя: ${name}`,
                email: `Почта отправителя: ${email}`,
                message: `Сообщение: ${message}`
            }
    
            sendEmailTransport(mes)
            
            setName('')
            setEmail('')
            setMessage('')
        } else {
            alert("Для отправки заполните поля")
        }
        
    }

    return (
        <form className="div_email flex" onSubmit={handleSubmit}>

            <span className="div_email_input flex">
                <input className="email_input name" onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Укажите ваше имя"/>
                <input className="email_input email" onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Укажите вашу почту"/>
                <button>Отправить</button>
            </span>

            <textarea className="email_textarea" onChange={e => setMessage(e.target.value)} value={message} placeholder="Введите сообщение"></textarea>       
        </form>
    )
}

export default SendEmail