import { useRouter } from "next/router"


export default function rating() {
    const router = useRouter();
    const { makananId } = router.query;
    return (
        <h1>
            {`ini adalah rating dari makanan ${makananId}`}
        </h1>
    )
}