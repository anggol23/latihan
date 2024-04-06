import {useRouter} from "next/router"


export default function Description (){
    const router = useRouter();
    const {makananId} = router.query;
    return (
        <h1>
            {`ini adalah descripsi dari makanan ${makananId}`}
        </h1>
    )
}