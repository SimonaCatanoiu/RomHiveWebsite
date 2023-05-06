export const MenuItems = (user,logout) => [
    {
        title: 'Home',
        url: '/home',
        cName:'nav_links'
    },
    {
        title: 'Offers',
        url: '/offers',
        cName:'nav_links'
    },
    {
        title: 'Reviews',
        url: '/reviews',
        cName:'nav_links'
    },
    {
        title: 'Sign Up',
        url: '/SignUp',
        cName: user ?'nav_button_mobile-none':'nav_button_mobile'
    },
    {
        title: user ? 'Logout' : 'Sign In',
        url: user ? '/' : '/signin',
        cName: 'nav_button_mobile',
        onClick: user ? logout : undefined
    },
]