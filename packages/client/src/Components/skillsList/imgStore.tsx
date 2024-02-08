import React from "react"
import html from "../../../public/Skills/html.png"
import css from "../../../public/Skills/css.png"
import scss from "../../../public/Skills/scss.png"

import js from "../../../public/Skills/js.png"
import ts from "../../../public/Skills/ts.png"
import react from "../../../public/Skills/react.png"

import node from "../../../public/Skills/node.png"
import nginx from "../../../public/Skills/nginx.png"

import vite from "../../../public/Skills/vite.png"
import webpack from "../../../public/Skills/webpack.png"

import chai from "../../../public/Skills/chai.png"
import mocha from "../../../public/Skills/mocha.png"

import postgreSQL from "../../../public/Skills/postgresql.png"

import github from "../../../public/Skills/github.png"


function photoProcessor(imgStr: string, h: number, w: number, alt: string = ""): any {
    return <img src={imgStr} height={h} width={w} alt={alt}/>
}

const size = {
    h: 25,
    w: 25
}

const skillsImage: any = {
    HTML: photoProcessor(html, size.h, size.w, "Html"),
    Css: photoProcessor(css, size.h, size.w, "Css"),
    Scss: photoProcessor(scss, size.h, size.w, "Scss"),
    Js: photoProcessor(js, size.h, size.w, "Js"),
    Ts: photoProcessor(ts, size.h, size.w, "Ts"),
    React: photoProcessor(react, size.h, size.w, "React"),
    NodeJs: photoProcessor(node, size.h, size.w, "NodeJs"),
    Vite: photoProcessor(vite, size.h, size.w, "Vite"),
    Webpack: photoProcessor(webpack, size.h, size.w, "Webpack"),
    nginx: photoProcessor(nginx, size.h, size.w, "nginx"),
    Chai: photoProcessor(chai, size.h, size.w, "Chai"),
    Mocha: photoProcessor(mocha, size.h, size.w, "Mocha"),
    PostgreSQL: photoProcessor(postgreSQL, size.h, size.w, "PostgreSQL"),
    Github: photoProcessor(github, size.h, size.w, "Github"),
}


export default skillsImage
