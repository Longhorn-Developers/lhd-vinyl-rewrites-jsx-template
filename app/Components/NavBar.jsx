import { Link } from '@tanstack/react-router';

export function NavBar() {
    return (
        <nav className='navbar'>
            <h1>
                <Link to='/'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='1em'
                        height='1em'
                        viewBox='0 0 24 24'
                        className='vinyl-icon'
                    >
                        <g
                            fill='none'
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                        >
                            <path d='M16 3.937A9 9 0 1 0 21 12'></path>
                            <path d='M11 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m8-8a1 1 0 1 0 2 0a1 1 0 1 0-2 0'></path>
                            <path d='m20 4l-3.5 10l-2.5 2'></path>
                        </g>
                    </svg>
                    Vinyl Rewrites
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
            </ul>
        </nav>
    );
}
