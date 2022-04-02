import { useRouter } from 'next/router';

function CatchAllPage() {

    const { query } = useRouter();

    console.log(query);

    return (
        <h1>The Catch All Page</h1>
    )
}

export default CatchAllPage;
