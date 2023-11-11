import { useState } from "react"

const LabelDisplay = ({
    data,
    labelTask,
    dataLabel,
    onDeleteLabelTask,
    onAddLabelTask
}) => {

    const filterLabelTask = labelTask.filter(label => label.id_task === data.id)
    const [label, setLabel] = useState("")

    return (
        <div className="flex w-full gap-4 justify-between">
            <div className="flex max-w-[60%] overflow-x-auto gap-2">
                {filterLabelTask.map(label => (
                    <div key={label.id} className="px-4 min-w-fit py-1 rounded-md bg-red-400 flex gap-2 items-center justify-center">
                        <span className="text-[12px]">{label.label}</span>
                        <span className="cursor-pointer" onClick={() => onDeleteLabelTask(label.id)}>&#11199;</span>
                    </div>
                ))}
            </div>
            <select className="bg-sky-300 p-2 rounded-md outline-none" value={label} onChange={(e) => {
                const target = e.target.value
                if (target === "") return;
                onAddLabelTask(data.id, target)
                setLabel("")
            }}>
                <option value="">--Pilih label--</option>
                {dataLabel.map(label => (
                    <option key={label.id} value={label.name}>{label.name}</option>
                ))}
            </select>
        </div>
    )
}

export default LabelDisplay