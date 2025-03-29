import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: Home,
});

function Home() {
    return (
        <div class='home-page'>
            <div class='search-container'>
                <div class='search-input-wrapper'>
                    <svg
                        class='search-icon'
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill='currentColor'
                            d='M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z'
                        ></path>
                    </svg>
                    <input type='text' class='search-input' placeholder='Search by title or artist...' />
                    <button class='clear-button hidden' aria-label='Clear search'>
                        ×
                    </button>
                </div>
            </div>
            <ul class='album-grid'>
                <li class='album-grid-item' data-album-id='1989'>
                    <a href='./albums/1989/' class='album-grid-cover-link'>
                        <img
                            src='./images/album-covers/1989.png'
                            alt='1989'
                            width='200'
                            height='200'
                            class='album-grid-cover'
                        />
                        <img
                            src='./images/vinyl-record.png'
                            alt='Vinyl record'
                            width='200'
                            height='200'
                            class='vinyl-record'
                        />
                    </a>
                    <h2 class='album-grid-title'>
                        <a href='./albums/1989/'>1989</a>
                    </h2>
                    <h3 class='album-grid-artist'>Taylor Swift</h3>
                </li>
                <li class='album-grid-item' data-album-id='american-idiot'>
                    <a href='./albums/american-idiot/' class='album-grid-cover-link'>
                        <img
                            src='./images/album-covers/american-idiot.png'
                            alt='American Idiot'
                            width='200'
                            height='200'
                            class='album-grid-cover'
                        />
                        <img
                            src='./images/vinyl-record.png'
                            alt='Vinyl record'
                            width='200'
                            height='200'
                            class='vinyl-record'
                        />
                    </a>
                    <h2 class='album-grid-title'>
                        <a href='./albums/american-idiot/'>American Idiot</a>
                    </h2>
                    <h3 class='album-grid-artist'>Green Day</h3>
                </li>
                <li class='album-grid-item' data-album-id='bad'>
                    <a href='./albums/bad/' class='album-grid-cover-link'>
                        <img
                            src='./images/album-covers/bad.png'
                            alt='Bad'
                            width='200'
                            height='200'
                            class='album-grid-cover'
                        />
                        <img
                            src='./images/vinyl-record.png'
                            alt='Vinyl record'
                            width='200'
                            height='200'
                            class='vinyl-record'
                        />
                    </a>
                    <h2 class='album-grid-title'>
                        <a href='./albums/bad/'>Bad</a>
                    </h2>
                    <h3 class='album-grid-artist'>Michael Jackson</h3>
                </li>
                <li class='album-grid-item' data-album-id='hotel-california'>
                    <a href='./albums/hotel-california/' class='album-grid-cover-link'>
                        <img
                            src='./images/album-covers/hotel-california.png'
                            alt='Hotel California'
                            width='200'
                            height='200'
                            class='album-grid-cover'
                        />
                        <img
                            src='./images/vinyl-record.png'
                            alt='Vinyl record'
                            width='200'
                            height='200'
                            class='vinyl-record'
                        />
                    </a>
                    <h2 class='album-grid-title'>
                        <a href='./albums/hotel-california/'>Hotel California</a>
                    </h2>
                    <h3 class='album-grid-artist'>Eagles</h3>
                </li>
                <li class='album-grid-item' data-album-id='led-zeppelin-iv'>
                    <a href='./albums/led-zeppelin-iv/' class='album-grid-cover-link'>
                        <img
                            src='./images/album-covers/led-zeppelin-iv.png'
                            alt='Led Zeppelin IV'
                            width='200'
                            height='200'
                            class='album-grid-cover'
                        />
                        <img
                            src='./images/vinyl-record.png'
                            alt='Vinyl record'
                            width='200'
                            height='200'
                            class='vinyl-record'
                        />
                    </a>
                    <h2 class='album-grid-title'>
                        <a href='./albums/led-zeppelin-iv/'>Led Zeppelin IV</a>
                    </h2>
                    <h3 class='album-grid-artist'>Led Zeppelin</h3>
                </li>
                <li class='album-grid-item' data-album-id='saturday-night-fever'>
                    <a href='./albums/saturday-night-fever/' class='album-grid-cover-link'>
                        <img
                            src='./images/album-covers/saturday-night-fever.png'
                            alt='Saturday Night Fever'
                            width='200'
                            height='200'
                            class='album-grid-cover'
                        />
                        <img
                            src='./images/vinyl-record.png'
                            alt='Vinyl record'
                            width='200'
                            height='200'
                            class='vinyl-record'
                        />
                    </a>
                    <h2 class='album-grid-title'>
                        <a href='./albums/saturday-night-fever/'>Saturday Night Fever</a>
                    </h2>
                    <h3 class='album-grid-artist'>Bee Gees</h3>
                </li>
                <li class='album-grid-item' data-album-id='the-dark-side-of-the-moon'>
                    <a href='./albums/the-dark-side-of-the-moon/' class='album-grid-cover-link'>
                        <img
                            src='./images/album-covers/the-dark-side-of-the-moon.png'
                            alt='The Dark Side of the Moon'
                            width='200'
                            height='200'
                            class='album-grid-cover'
                        />
                        <img
                            src='./images/vinyl-record.png'
                            alt='Vinyl record'
                            width='200'
                            height='200'
                            class='vinyl-record'
                        />
                    </a>
                    <h2 class='album-grid-title'>
                        <a href='./albums/the-dark-side-of-the-moon/'>The Dark Side of the Moon</a>
                    </h2>
                    <h3 class='album-grid-artist'>Pink Floyd</h3>
                </li>
                <li class='album-grid-item' data-album-id='thriller'>
                    <a href='./albums/thriller/' class='album-grid-cover-link'>
                        <img
                            src='./images/album-covers/thriller.png'
                            alt='Thriller'
                            width='200'
                            height='200'
                            class='album-grid-cover'
                        />
                        <img
                            src='./images/vinyl-record.png'
                            alt='Vinyl record'
                            width='200'
                            height='200'
                            class='vinyl-record'
                        />
                    </a>
                    <h2 class='album-grid-title'>
                        <a href='./albums/thriller/'>Thriller</a>
                    </h2>
                    <h3 class='album-grid-artist'>Michael Jackson</h3>
                </li>
                <li class='album-grid-item' data-album-id='viva-la-vida'>
                    <a href='./albums/viva-la-vida/' class='album-grid-cover-link'>
                        <img
                            src='./images/album-covers/viva-la-vida.png'
                            alt='Viva la Vida'
                            width='200'
                            height='200'
                            class='album-grid-cover'
                        />
                        <img
                            src='./images/vinyl-record.png'
                            alt='Vinyl record'
                            width='200'
                            height='200'
                            class='vinyl-record'
                        />
                    </a>
                    <h2 class='album-grid-title'>
                        <a href='./albums/viva-la-vida/'>Viva la Vida</a>
                    </h2>
                    <h3 class='album-grid-artist'>Coldplay</h3>
                </li>
            </ul>
        </div>
    );
}
