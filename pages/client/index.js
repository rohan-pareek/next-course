import Link from 'next/link';

function ClientPage() {
    return (
        <>
            <h1>The Client Page</h1>
            <ul>
                <li>
                    <Link href="/client/tom">Thomas</Link>
                </li>
                <li>
                    <Link href="/client/david">David</Link>
                </li>
                <li>
                    {/* Another way of passing url data */}
                    <Link href={{
                        pathname: '/client/[clientId]',
                        query: {
                            clientId: 'bruce'
                        }
                    }}>
                        Bruce
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default ClientPage;
