import { useEffect, useState } from "react"


const MainTaskDisplay = ({
    data,
    onToggleCheck,
    onAddTaskTeks
}) => {

    const [taskTitle, setTaskTitle] = useState("")
    const [chek, setChek] = useState("")

    const addTaskTeks = (e) => {
        e.preventDefault()
        onAddTaskTeks(data.id, taskTitle)
    }

    useEffect(() => {

        setTaskTitle(data.text)
        setChek(data.pass)
    }, [data])

    return (
        <div className="w-full flex gap-8 items-center bg-sky-100 rounded-md h-20 p-8">
            <div className="" >
                <input type="checkbox" checked={chek} onChange={() => {
                    onToggleCheck(data.id)
                    setChek(!chek)
                }} />
            </div>
            <form onSubmit={(e) => addTaskTeks(e)}>
                <input type="text" style={chek ? { textDecoration: 'line-through' } : {}} className="text-base md:text-2xl font-semibold w-full bg-transparent outline-none" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
            </form>
        </div>
    )
}

export default MainTaskDisplay