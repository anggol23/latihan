
import Link from "next/link"
export default function Header() {
    return (
        <header>
            <Link href="/">
                <img src="/images/logo/panda.svg" alt="panda logo" width={50}/>
            </Link>
            <button> <Link className="text-decoration:none" href="/about">About</Link></button>  
            <button><Link href="/beranda">Beranda</Link></button> 
          <button><Link href="/contact">Contact</Link></button>  
        </header>

    )
}
