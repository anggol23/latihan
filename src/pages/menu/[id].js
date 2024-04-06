
import { useRouter } from "next/router"

export default function Post() {
    const router = useRouter();
    const { id } = router.query
    return <h1>{`Ini adalah menu ${id}`}</h1>
}