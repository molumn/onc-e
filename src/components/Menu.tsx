
import navigateCallback from '../functions/navigate';

import './Menu.css';

type MenuParameter = {
    name: string,
    path: string
}

const Menu = (param: MenuParameter) => {
    return (
        <div className="MenuPadding">
            <h2 onClick={navigateCallback(param.path)}>{param.name}</h2>
        </div>
    )
}

export default Menu;
