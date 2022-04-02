import Link from 'next/link';

function HomePage() {
    return (
        <>
            <h1>My Home Page</h1>
            <ul>
                <li>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link href="/client">Client</Link>
                </li>
            </ul>
        </>
    )
}

export default HomePage;
