export default function Logo() {
    return <div className="flex items-center justify-center gap-x-1.5">
        <div
            className="font-lucida-calligraphy flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-[dodgerblue] px-[9.5px] py-[5.5px] text-center text-2xl uppercase italic leading-[27px]">
            F
        </div>
        <div className="font-inter text-xl font-bold leading-[normal]">
            <span>Furni<span className="text-[dodgerblue]">Flex</span></span>
        </div>
    </div>
}