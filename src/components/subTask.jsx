import { useEffect, useState } from "react"
import SubListTask from "./subListTask"
import autoprefixer from "autoprefixer"

const SubTask = ({
    data,
    onEditTaskTime,
    onEditTaskPriority,
    onEditTaskDescription,
    subTask,
    onAddSubTask,
    onToggleCheckSubTask,
    onDeleteSubTask
}) => {

    const [time, setTime] = useState("")
    const [priority, setPriority] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {

        setPriority(data.prioritas)
        setTime(data.waktu)
        setDescription(data.keterangan)
    }, [data])

    return (
        <div className="w-full pt-5">
            <div className="w-full flex gap-4 justify-between">
                <span className="font-semibold text-lg">Description</span>
                <div className="flex gap-2">
                    <input type="time" className="bg-transparent outline-none" value={time} onChange={(e) => {
                        const val = e.target.value
                        setTime(val)
                        onEditTaskTime(data.id, val)
                    }} />
                    <select className="bg-transparent outline-none" value={priority} onChange={(e) => {
                        const val = e.target.value;
                        setPriority(val)
                        onEditTaskPriority(data.id, val)
                    }}>
                        <option value="1">Tinggi</option>
                        <option value="2">Sedang</option>
                        <option value="3">Rendah</option>
                    </select>
                </div>
            </div>
            <div className="mt-4">
                <textarea value={description} onChange={(e) => {
                    setDescription(e.target.value)
                    onEditTaskDescription(data.id, description)
                }} className="w-full text-sm bg-transparent outline-none" rows={3} />
            </div>
            <SubListTask
                subTask={subTask}
                data={data}
                onAddSubTask={onAddSubTask}
                onToggleCheckSubTask={onToggleCheckSubTask}
                onDeleteSubTask={onDeleteSubTask}
            />
            <div className="flex gap-2">

            </div>
        </div>
    )
}

export default SubTask