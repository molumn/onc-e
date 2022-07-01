
import { BrowserView, MobileView } from 'react-device-detect';
import navigateCallback from '../functions/navigate';

import './Menu.css';

export type MenuParameter = {
    name: string,
    path: string
}

const Menu = (param: MenuParameter) => {
    return (
        <>
            <BrowserView>
                <div className="MenuPadding_Browzer">
                    <h2 className='ContentPadding_Browzer' onClick={navigateCallback(param.path)}>{param.name}</h2>
                </div>
            </BrowserView>
            <MobileView>
                <div className="MenuPadding_Mobile">
                    <h2 className='ContentPadding_Mobile' onClick={navigateCallback(param.path)}>{param.name}</h2>
                </div>
            </MobileView>
        </>
    )
}

export default Menu;
