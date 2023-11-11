import { useState } from "react";

const MainTaskDashbord = ({
    data,
    onToggleCheck,
    dataChild,
    setToggle,
    labelTask,
    onDeleteMainTask
}) => {

    function priority(p) {
        switch (p) {
            case "1":
                return "red";
                break;
            case "2":
                return "yellow";
                break
            case "3":
                return "green"
                break;
            default:
                return;
                break;
        }
    }

    const filterLabelTask = labelTask.filter(label => label.id_task === data.id)

    return (
        <div className="flex gap-4 w-full pt-3">
            <div className="flex shadow-md gap-8 w-[85%] md:w-[550px] bg-sky-400 overflow-hidden rounded-md items-center justify-between">
                <div className="flex items-center gap-1 px-4 py-1 md:gap-8 md:px-6">
                    <div className="w-[70px]">
                        <input type="checkbox" className="w-8" checked={data.pass} onChange={() => {
                            onToggleCheck(data.id)
                            dataChild(data)
                        }} />
                    </div>
                    <div className="flex flex-col gap-2 overflow-hidden w-full">
                        <span className="text-base md:text-2xl text-slate-700 hidden-text font-semibold" style={data.pass ? { textDecoration: 'line-through' } : {}}>{data.text}</span>
                        <div className="flex gap-2">
                            {filterLabelTask.map((label, index) => (
                                <div key={index} className="px-2 hidden-text py-1 rounded-md bg-red-400 flex items-center justify-center">
                                    <span className="text-[12px]">{label.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col h-full gap-2 pl-4 min-w-fit">
                        <span className="min-w-fit text-[12px] md:text-base">{data.tanggal}</span>
                        <span className="min-w-fit text-sm">{data.waktu}</span>
                    </div>
                </div>
                <span className="w-2 h-full" style={{ backgroundColor: priority(data.prioritas) }}></span>
            </div>
            <div className="w-auto flex  bg-sky-400 rounded-md p-2 md:p-5">
                <div className="flex flex-col">
                    <span onClick={() => {
                        dataChild(data)
                        setToggle(true)
                    }} className="cursor-pointer text-sm md:text-base">Lihat</span>
                    <span className="cursor-pointer  text-sm md:text-base" onClick={() => {
                        onDeleteMainTask(data.id)
                    }}>Hapus</span>
                </div>
            </div>
        </div>
    )
}

export default MainTaskDashbord