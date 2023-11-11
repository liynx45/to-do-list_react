import SubTask from "./subTask"
import MainTaskDisplay from "./mainTaskDisplay"
import LabelDisplay from "./labelDisplay"


const DisplayTask = ({
    data,
    toggle,
    setToggleDisplay,
    onToggleCheck,
    onAddTaskTeks,
    onEditTaskTime,
    onEditTaskPriority,
    onEditTaskDescription,
    subTask,
    onAddSubTask,
    onToggleCheckSubTask,
    labelTask,
    dataLabel,
    onDeleteLabelTask,
    onAddLabelTask,
    onDeleteSubTask
}) => {

    return (
        <div className="w-[90%] md:w-[40%] relative bg-sky-400 rounded-md m-6 min-h-[70vh] p-6">
            <button className="absolute right-0 top-[-40px] bg-primaryColor py-1 px-2 rounded-md" onClick={() => setToggleDisplay(!toggle)}>kembali</button>
            <div className="container flex flex-col justify-between h-full">
                <div>
                    <MainTaskDisplay
                        data={data}
                        onToggleCheck={onToggleCheck}
                        onAddTaskTeks={onAddTaskTeks}
                    />
                    <SubTask
                        data={data}
                        onEditTaskTime={onEditTaskTime}
                        onEditTaskPriority={onEditTaskPriority}
                        onEditTaskDescription={onEditTaskDescription}
                        subTask={subTask}
                        onAddSubTask={onAddSubTask}
                        onToggleCheckSubTask={onToggleCheckSubTask}
                        onDeleteSubTask={onDeleteSubTask}
                    />
                </div>
                <LabelDisplay
                    data={data}
                    labelTask={labelTask}
                    dataLabel={dataLabel}
                    onDeleteLabelTask={onDeleteLabelTask}
                    onAddLabelTask={onAddLabelTask}
                />
            </div>
        </div>
    )
}

export default DisplayTask