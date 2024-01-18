async function sendMail(mes: any) {
    console.log(mes)
    fetch('http://localhost:3001/sendmail', {
        method: "POST",
        body: JSON.stringify(mes),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(el => {if(el.status === 200) alert("Сообщение отправлено")}).catch(el => {
        console.error(el);

        alert("При отправки произошла ошибка")
    })
}

export default sendMail