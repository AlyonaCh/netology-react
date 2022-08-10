
function IconSwitch(props) {
    const { icon, onSwitch} = props
    return  (
        <nav>
            { icon == 'view_list' &&
                <span className="material-symbols-outlined" onClick={onSwitch}>
                    view_list
                </span>
            }
            { icon == 'view_module' &&
                <span className="material-symbols-outlined" onClick={onSwitch}>
                    view_module
                </span>
            }
        </nav>
    )
}

export default IconSwitch;