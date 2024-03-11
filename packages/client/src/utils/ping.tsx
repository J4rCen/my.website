async function ping() {
    await fetch('https://my-web-ksus.onrender.com/ping', {
        method: "GET"
    }).catch(el => {
        console.error(el);
    })
}

export default ping