import { useRouter } from "next/router";

function ClientProjectPage() {

    const { query, ...router } = useRouter();

    const navigationHandler = () => {
        router.push('/client/tom/theproject');
    }

    return (
        <>
            <h1>The Client Project Page</h1>
            <p>{query.clientId}</p>

            {/* Programatically navigate to another page */}
            <button onClick={navigationHandler}>Go to Client Project Page</button>
        </>
    )
}

export default ClientProjectPage;
