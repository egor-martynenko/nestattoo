// import React from 'react'

import './iconButton.scss'

const IconButon = ({
    direction,
    disable,
    onClick
}) => {
    
    let cls = 'icon-btn mb-6'

    if (direction === 'left') cls += ' left'
    if (direction === 'right') cls += ' right'
    if (disable) cls += ' disable'

    return(   
        <div className={cls} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="25" height="25" focusable="false"><path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path></svg>
        </div>
    )
    
}
export default IconButon