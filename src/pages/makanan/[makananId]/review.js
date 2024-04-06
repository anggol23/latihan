import { useRouter } from "next/router"


export default function review() {
    const router = useRouter();
    const { makananId } = router.query;
    return (
        <h1>
            {`ini adalah review dari makanan ${makananId}`}
        </h1>
    )
}