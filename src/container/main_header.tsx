
import './main_header.css';

import MainNavBar from './main_nav_bar';


type MainHeaderProc = {
    header: string
}

function MainHeader(proc: MainHeaderProc) {
    return (
        <div className="MAIN_HEADER_CONTAINER">
            <div className="MAIN_HEADER">
                <h1 className="MAIN_HEADER_ITSELF">{proc.header}</h1>
            </div>
            <MainNavBar />
        </div>
    )
}

export default MainHeader;
