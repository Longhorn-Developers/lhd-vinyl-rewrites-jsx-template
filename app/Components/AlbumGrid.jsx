import { Link } from '@tanstack/react-router';

export function AlbumGrid({ albums }) {
    return (
        <ul className='album-grid'>
            {albums.map(album => (
                <li className='album-grid-item' key={album.id}>
                    <Link to='/albums/$albumId' params={{ albumId: album.id }} className='album-grid-cover-link'>
                        <img
                            src={album.coverUrl}
                            alt={album.title}
                            width='200'
                            height='200'
                            className='album-grid-cover'
                        />
                        <img
                            src='./images/vinyl-record.png'
                            alt='Vinyl record'
                            width='200'
                            height='200'
                            className='vinyl-record'
                        />
                    </Link>
                    <h2 className='album-grid-title'>
                        <Link to='/albums/$albumId' params={{ albumId: album.id }}>
                            {album.title}
                        </Link>
                    </h2>
                    <h3 className='album-grid-artist'>{album.artist}</h3>
                </li>
            ))}
        </ul>
    );
}
