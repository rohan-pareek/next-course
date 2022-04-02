import { useRouter } from "next/router";

function SelectedClientProjectPage() {

    const { query } = useRouter()

    console.log(query)

    return (
        <h1>The Selected Client Project Page</h1>
    )
}

export default SelectedClientProjectPage;
