export const MenuItems = (user,logout) => [
    {
    title: user ? 'Logout' : 'Sign In',
    url: user ? '/' : '/signin',
    cName: 'nav_button_mobile',
    onClick: user ? logout : undefined
},
]