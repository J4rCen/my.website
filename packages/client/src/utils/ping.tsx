async function ping() {
    await fetch('https://sendmail-pmar.onrender.com/ping', {
        method: "GET"
    }).catch(el => {
        console.error(el);

        alert("При отправки произошла ошибка")
    })
}

export default ping
