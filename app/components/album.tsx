export function Album(props) {
  return (
      <li className='album-grid-item' data-album-id='1989'>
          <a href='./albums/1989/' className='album-grid-cover-link'>
              <img
                  src={props.album.coverUrl}
                  alt='1989'
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
          </a>
          <h2 className='album-grid-title'>
              <a href='./albums/1989/'>{props.album.title}</a>
          </h2>
          <h3 className='album-grid-artist'>{props.album.artist}</h3>
      </li>
  );
}
