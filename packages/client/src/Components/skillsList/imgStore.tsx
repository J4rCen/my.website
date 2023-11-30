// import photoProcessor from "../../utils/photoProcessor"
import React from "react"
import html from "../../../public/Skills/html.png"
import css from "../../../public/Skills/css.png"
import scss from "../../../public/Skills/scss.png"

import js from "../../../public/Skills/js.png"
import ts from "../../../public/Skills/ts.png"
import react from "../../../public/Skills/react.png"
import node from "../../../public/Skills/node.png"

import vite from "../../../public/Skills/vite.png"
import webpack from "../../../public/Skills/webpack.png"

import chai from "../../../public/Skills/chai.png"
import mocha from "../../../public/Skills/mocha.png"

import github from "../../../public/Skills/github.png"


function photoProcessor(imgStr: string, h: number, w: number, alt: string = ""): any {
    return <img src={imgStr} height={h} width={w} alt={alt}/>
}

const size = {
    h: 25,
    w: 25
}

const skillsImage: any = {
    HTML: photoProcessor(html, size.h, size.w, "html"),
    Css: photoProcessor(css, size.h, size.w, "css"),
    Scss: photoProcessor(scss, size.h, size.w, "scss"),
    js: photoProcessor(js, size.h, size.w, "js"),
    ts: photoProcessor(ts, size.h, size.w, "ts"),
    react: photoProcessor(react, size.h, size.w, "react"),
    node: photoProcessor(node, size.h, size.w, "node"),
    vite: photoProcessor(vite, size.h, size.w, "vite"),
    webpack: photoProcessor(webpack, size.h, size.w, "webpack"),
    chai: photoProcessor(chai, size.h, size.w, "chai"),
    mocha: photoProcessor(mocha, size.h, size.w, "mocha"),
    github: photoProcessor(github, size.h, size.w, "github"),
}


export default skillsImage
