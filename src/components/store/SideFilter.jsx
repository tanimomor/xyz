export default function SideFilter(props) {
    return <div
        className="flex w-64 flex-shrink-0 flex-col items-start gap-y-[11px] border-r border-solid border-neutral-200 pb-[771px] pr-8 pt-10 text-[22px] leading-[normal]">
        <div className="flex items-center self-stretch rounded-lg bg-neutral-950 px-6 py-3">
            <div className="pb-[3px] text-center font-semibold text-white">
                Rocking chair
            </div>
        </div>
        <div className="flex flex-col gap-y-6 font-medium text-neutral-500">
            <div className="flex flex-col items-start gap-y-6 [max-width:231px]">
                <object
                    data="/assets/Line.svg"
                    className="h-px flex-shrink-0 self-stretch"
                ></object>
                <div className="px-6">Side chair</div>
            </div>
            <div className="flex flex-col items-start gap-y-6 [max-width:231px]">
                <object
                    data="/assets/Line.svg"
                    className="h-px flex-shrink-0 self-stretch"
                ></object>
                <div className="px-6">Lounge chair</div>
            </div>
        </div>
    </div>
}