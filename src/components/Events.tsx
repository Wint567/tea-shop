export default function Events() {
    return (
        <section>
            <h2 className="font-normal text-[96px] leading-[1] bg-[#D8DEC5] text-center mb-3 mt-[44px]">EVENTS EVENTS EVENTS</h2>
            <div className="bg-[url('/bg-events.svg')] bg-no-repeat bg-cover">
                <div className="w-full max-w-[1045px] mx-auto pt-[52px] pb-[101px] relative">
                    <img src="./events-poster.svg" alt="poster" />
                    <p className="font-normal text-[24px] leading-[1] bg-[#8E9367] w-[585px] mt-5 py-[15px] px-[23px]">*When attending the event, guaranteed gifts in the form of limited-edition tea</p>
                    <img className="absolute right-0 top-[111px]" src="./events-present.png" alt="present" />
                </div>
            </div>
        </section>
    )
}