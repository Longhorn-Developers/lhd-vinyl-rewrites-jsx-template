// app/routes/__root.jsx
import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';
import appCss from '../styles/app.css?url';

export const Route = createRootRoute({
    head: () => ({
        meta: [
            {
                charSet: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                title: 'Vinyl Rewrites',
            },
            {
                name: 'description',
                content: 'A website to search for vinyl records and find details about them.',
            },
        ],
        links: [
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossOrigin: 'anonymous',
            },
            {
                href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap',
                rel: 'stylesheet',
            },
            {
                rel: 'stylesheet',
                href: appCss,
            },
        ],
    }),
    component: RootComponent,
});

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    );
}

/**
 * @param {object} props
 * @param {import('react').ReactNode} props.children
 */
function RootDocument({ children }) {
    return (
        <html lang='en'>
            <head>
                <HeadContent />
            </head>
            <body>
                <nav className='navbar'>
                    <h1>
                        <a href='.'>
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
                        </a>
                    </h1>
                    <ul>
                        <li>
                            <a href='.'>Home</a>
                        </li>
                        <li>
                            <a href='./about/'>About</a>
                        </li>
                    </ul>
                </nav>
                <div className='app'>{children}</div>
                <Scripts />
            </body>
        </html>
    );
}
