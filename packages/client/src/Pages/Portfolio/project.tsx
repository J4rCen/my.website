// import React from "react"
import mesImag from "../../../public/Projects/mes.png"
import flappybird from "../../../public/Projects/FlappyBird.png"
import petFood from "../../../public/Projects/petFood.png"
import gameElectric from "../../../public/Projects/gameElectric.png"

const description = {
    mes: `
        Учебный проект, разработанный во время прохождения Яндекс Практикума. Нацеленный на изучения технологий frontend-разработки.
        
        Функционал: регистрация, авторизация, система чатов, добавление пользователей в чат, удаления пользователей из чата, изменения данных пользователя.
        
        Стек: TS, Handlebars, Vite, Sass, Express, и NodeJs
    `,

    flappybird: `
        Учебный проект, разработанный во время прохождения Яндекс Практикума. Нацеленный на изучения командной разработки, работы с базами данных,
        заливка на яндекс облако, добавления oatho авторизации, SSR, добавления SSL и nginx.
        
        Функционал: регистрация, авторизация, лидборы, форум, профиль пользователя, игра на canvas.
        
        Стек: TS, React, PostgreSQL, Vite, Sass, Express, и NodeJs, Canvas, Docker, nginx.
    `,

    petFood: `
        Небольшой pet проект, нацеленный на изучения адаптивной верстки.
        Представляеть из себя небольшой макет магазина кормов для домашних животных.
        
        Стек: Js, Css
    `,

    gameElectric: `
        Небольшая игра, разработана командой из 4 человек. 
        Задачи игры закрасить поля за наименьшее количество ходов.
        Цель разработки, изучить js, и научиться командной разработки.
        
        Стек: Js, Css
    `

}

const projects: any[] = [
    {
        link: "https://spontaneous-parfait-a4c2bf.netlify.app/",
        description: description.mes,
        img: mesImag,
        bName: "Ссылка на проект"
    },
    {
        link: "https://github.com/Sonyamaster1/Pixel-Bros/tree/develop",
        description: description.flappybird,
        img: flappybird,
        bName: "Ссылка на проект"
    },
    {
        link: "https://petfoodstore-6259c.firebaseapp.com/",
        description: description.petFood,
        img: petFood,
        bName: "Ссылка на проект"
    },
    {
        link: "https://github.com/J4rCen/ElectricTheGame",
        description: description.gameElectric,
        img: gameElectric,
        bName: "Ссылка на проект"
    }
]

export default projects