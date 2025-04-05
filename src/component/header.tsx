import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="z-50 fixed w-full max-w-2xl bg-[url('/images/bg-header.png')] aspect-[32/7] bg-no-repeat bg-cover bg-center">
            <img src="/images/icon-app.png" alt="" className="absolute w-[18%] top-[7%] left-[3%]" />
            <Link href={""} className="absolute top-[15%] left-[24%] w-[28%] bg-[url('/images/btn-playnow.png')] aspect-[35/9] bg-no-repeat bg-cover bg-center hover:brightness-115"></Link> 
            <Link href={""} className="absolute top-[15%] left-[55%] w-[28%] bg-[url('/images/btn-home.png')] aspect-[35/9] bg-no-repeat bg-cover bg-center hover:brightness-115"></Link>     
        </header>
    )
}

export default Header