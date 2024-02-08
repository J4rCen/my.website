import javascript from "../../../public/Certificates/javascript.png"
import web_respons from "../../../public/Certificates/web_respons.png"

const description = {
    js: `
        Сертификат получин 6 июня 2023 года.
    `,

    web_respons: `
        Сертификат получин 3 апреля 2023 года.
    `

}

const certificate: any[] = [
    {
        link: "https://www.freecodecamp.org/certification/J4R/javascript-algorithms-and-data-structures",
        description: description.js,
        img: javascript,
        bName: "Ссылка на сертификат"
    },

    {
        link: "https://www.freecodecamp.org/certification/J4R/responsive-web-design",
        description: description.web_respons,
        img: web_respons,
        bName: "Ссылка на сертификат"
    }
]

export default certificate