import { useEffect } from "react"
import MainTaskDashbord from "./mainTaskDashbord"

const ContainerSearch = ({ searchList, setChildData, setSearch, setToggleDisplay, toggleDisplay }) => {

    return (
        <div className="absolute shadow-2xl p-4 flex flex-col gap-4 top-[120%] rounded-xl left-0 md:left-[-50%] w-[350px] md:w-[400px] overflow-y-auto bg-primaryColor max-h-[400px]">
            {searchList.map((task, index) => (
                <div key={index} className="w-full flex gap-8 items-center justify-between p-3 bg-sky-300 rounded-xl">
                    <div className="flex flex-col gap-1">
                        <span className="text-base font-semibold" style={task.pass ? {textDecoration: 'line-through'} : {}}>{task.text}</span>
                        <span>{task.tanggal}</span>
                    </div>
                    <div className="w-12 rounded-[50%] aspect-square" style={{backgroundColor: task.prioritas}}></div>
                    <div className="flex flex-col gap-1 bg-sky-100 py-2 px-6 rounded-xl">
                    <span className="cursor-pointer text-primaryColor" onClick={() => {
                        setChildData(task)
                        setToggleDisplay(true)
                        setSearch("")
                    }
                    }>Lihat</span>
                    <span className="text-primaryColor">Hapus</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContainerSearch