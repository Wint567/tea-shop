export default function Header() {
    return (
        <header className="w-full max-w-[1200px] mx-auto flex justify-between items-center py-7">
            <span className="font-normal text-[32px] leading-[1]">pea tea?</span>
            <nav className="flex gap-[30px]">
                <a className="font-normal text-[24px] leading-[1]" href="#">Shop</a>
                <a className="font-normal text-[24px] leading-[1]" href="#">About</a>
                <a className="font-normal text-[24px] leading-[1]" href="#">Contact</a>
            </nav>
            <div className="flex gap-5">
                <img className="w-10" src="/icons/shop-icon.png" alt="shop-icon" />
                <img className="w-10" src="/icons/favorite-icon.png" alt="favorite-icon" />
            </div>
        </header>
    )
}