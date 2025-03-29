import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
    component: Home,
});

function Home() {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>This template starts off pretty bare...</p>
        </div>
    );
}
