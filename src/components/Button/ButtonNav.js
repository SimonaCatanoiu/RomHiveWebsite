import React from 'react'
import './ButtonNav.css'

const STYLES = [
    'buttonMe--primary',
    'buttonMe--outline'
]

const SIZES = [
    'buttonMe--medium',
    'buttonMe--large'
]

export const ButtonNav = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle= STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize)?buttonSize : SIZES[0]

    return (
        <button className={`buttonMe ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick} type={type}>
            {children}</button>
    )
}