import { useState } from "react"
import SubMainTask from "./subMainTask"
import { useEffect } from "react"

const SubListTask = ({
    subTask,
    data,
    onAddSubTask,
    onToggleCheckSubTask,
    onDeleteSubTask
}) => {

    const subTaskFilter = subTask.filter(subTask => subTask.id_task === data.id)

    const [subTaskNew, setSubTaskNew] = useState("")
    const addSubTask = (e, id) => {
        e.preventDefault()

        onAddSubTask(subTaskNew, id)
        setSubTaskNew("")
    }

    return (
        <div className="container flex flex-col gap-4 bg-sky-300 p-6 my-2 rounded-md">
            <span className="text-slate-600">Sub Task</span>
            <div className="max-h-[100px] flex flex-col gap-2 overflow-y-auto">
                {subTaskFilter.reverse().map(subTask => (
                    <div key={subTask.id} className="flex gap-4 text-base">
                        <input type="checkbox" checked={subTask.pass} onChange={() => onToggleCheckSubTask(subTask.id)} />
                        <span style={subTask.pass ? { textDecoration: 'line-through' } : {}} className="bg-transparent outline-none">{subTask.text}</span>
                        <span className="cursor-pointer" onClick={() => onDeleteSubTask(subTask.id)}>&#11199;</span>
                    </div>
                ))}
            </div>
            <form onSubmit={(e) => addSubTask(e, data.id)}>
                <input type="text" placeholder="Tambahkan sub tugas" value={subTaskNew} onChange={(e) => setSubTaskNew(e.target.value)} className="outline-none bg-transparent placeholder-sky-500" />
            </form>
        </div>
    )
}

export default SubListTask