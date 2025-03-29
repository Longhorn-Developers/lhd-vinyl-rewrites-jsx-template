import { createFileRoute } from '@tanstack/react-router';
import { albumsById } from '../../albums';

export const Route = createFileRoute('/albums/$albumId')({
    component: RouteComponent,
});

function RouteComponent() {
    const { albumId } = Route.useParams();

    const album = albumsById.get(albumId);

    if (!album) {
        return <div>Album not found</div>;
    }

    return <pre>{JSON.stringify(album, null, 4)}</pre>;
}
