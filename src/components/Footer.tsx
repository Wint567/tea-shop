import Image from "next/image"

const socials = [
    { href: "#", icon: "/icons/Instagram.png", alt: "Instagram" },
    { href: "#", icon: "/icons/Facebook.png", alt: "Facebook" },
    { href: "#", icon: "/icons/X.png", alt: "X (Twitter)" },
    { href: "#", icon: "/icons/TikTok.png", alt: "TikTok" },
]

export default function Footer() {
    return (
        <footer className="w-full">
            <div className="w-full max-w-[387px] mx-auto flex justify-between items-center py-5">
                {socials.map(({ href, icon, alt }) => (
                    <a
                        key={alt}
                        href={href}
                        aria-label={alt}
                        className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                        <Image
                            src={icon}
                            alt={alt}
                            width={64}
                            height={64}
                            className="object-contain"
                        />
                    </a>
                ))}
            </div>

            <div className="bg-[#7C913F4D]">
                <p className="text-center font-normal text-[24px] leading-none py-2">
                    DASTIK {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}
