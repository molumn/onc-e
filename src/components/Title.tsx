import React from "react";
import navigateCallback from "../functions/navigate";


import './Title.css';


export type TitleParameter = {
    title: string,
    path: string
}

const Title = (param: TitleParameter) => {
    return (
        <h1 className="Title" onClick={navigateCallback(param.path)}>{param.title}</h1>
    )
}

export const MainTitle = (param: TitleParameter) => {
    return (
        <h1 className="MainTitle" onClick={navigateCallback(param.path)}>{param.title}</h1>
    )
}


export default Title;
