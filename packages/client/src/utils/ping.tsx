async function ping() {
    await fetch('https://sendmail-pmar.onrender.com/ping', {
        method: "GET"
    }).catch(el => {
        console.error(el);
    })
}

export default ping
