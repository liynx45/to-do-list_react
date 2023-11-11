import MainTaskDashbord from "./mainTaskDashbord"

const MainTaskDashbordDefault = ({
    filter,
    onToggleCheck,
    dataChild,
    setToggle,
    labelTask,
    onDeleteMainTask 
}) => {

    return (
        <div className="flex flex-col gap-2 pt-4">
            <h1 className="text-xl font-semibold pl-4">{filter.tanggal}</h1>
            <div className="container flex flex-col gap-3">
                {filter.list.reverse().map(task => (
                    <MainTaskDashbord key={task.id}
                        data={task}
                        onToggleCheck={onToggleCheck}
                        dataChild={dataChild}
                        setToggle={setToggle}
                        labelTask={labelTask}
                        onDeleteMainTask={onDeleteMainTask}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainTaskDashbordDefault