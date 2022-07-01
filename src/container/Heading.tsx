import React from "react";


import './Heading.css';

export default class Heading extends React.Component {

    props!: Readonly<{
        className?: string
        front?: JSX.Element
        end?: JSX.Element
    }>;

    render() {
        return(
            <div className="Heading">
                {this.props.front}
                <div className="Split">
                    {this.props.end}
                </div>
            </div>
        )
    }

}
