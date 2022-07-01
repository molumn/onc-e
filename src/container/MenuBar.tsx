import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import Menu, { MenuParameter } from "../components/Menu";


import './MenuBar.css';

export default class MenuBar extends React.Component {

    props!: Readonly<{
        element?: JSX.Element
    }>;

    render() {
        return (
            <>
                <BrowserView>
                    <div className="MenuBarPadding_Browser">
                        {this.props.element ?? <></>}
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="MenuBarPadding_Mobile">
                        {/**/}
                    </div>
                </MobileView>
            </>
        )
    }

}
