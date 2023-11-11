import { useState } from "react";

import MainTaskDashbord from "./../components/mainTaskDashbord";
import DisplayTask from './../components/displayTask'
import MainTaskDashbordDefault from "../components/mainTaskDashbordDefault";

export default function Dashbord({
    dataTask,
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
    onDeleteMainTask,
    selectSort,
    childData,
    setChildData,
    setToggleDisplay,
    toggleDisplay,
    onDeleteSubTask
}) {

    

    function defaultFilter() {
        dataTask.forEach(task => {
            const existing = filterList.find(filter => filter.tanggal === task.tanggal);
            if (existing) {
                existing.list.push(task)
            } else {
                filterList.push({ tanggal: task.tanggal, list: [task] })
            }
        })
    }

    let filterList = []

    switch (selectSort) {
        case ("default"):
            defaultFilter()
            break;
        case ("waktu"):
            filterList = dataTask.slice().sort((a, b) => a.tanggal - b.tanggal)
            break;
        case ("ceklis"):
            filterList = dataTask.slice().sort((a, b) => b.pass - a.pass)
            break;
        case ("huruf"):
            filterList = dataTask.slice().sort((a, b) => (a.text).localeCompare(b.text))
            break;
        default:
            filterList = labelTask.filter(label => label.label === selectSort)
                .map(label => dataTask.find(task => task.id === label.id_task))
    }

    return (

        <div className="container flex gap-4 max-h-[80%]">
            {
                !toggleDisplay && (
                    <div className="flex flex-col mx-4 w-full md:w-[70%] gap-4 overflow-y-auto h-[600px] scrollbar-hide">
                        {selectSort === "default"
                            ? filterList.slice().reverse().map((filter, index) => (
                                <MainTaskDashbordDefault
                                    key={index}
                                    filter={filter}
                                    onToggleCheck={onToggleCheck}
                                    dataChild={setChildData}
                                    setToggle={setToggleDisplay}
                                    labelTask={labelTask}
                                    onDeleteMainTask={onDeleteMainTask}
                                />
                            ))
                            : (
                                <div className="pt-8">
                                    {filterList.map(task => (
                                        <MainTaskDashbord
                                            key={task.id}
                                            data={task}
                                            onToggleCheck={onToggleCheck}
                                            dataChild={setChildData}
                                            setToggle={setToggleDisplay}
                                            labelTask={labelTask}
                                            onDeleteMainTask={onDeleteMainTask}
                                        />
                                    ))}
                                </div>
                            )}
                    </div>
                )
            }
            {toggleDisplay && <DisplayTask
                data={childData}
                toggle={toggleDisplay}
                setToggleDisplay={setToggleDisplay}
                onToggleCheck={onToggleCheck}
                onAddTaskTeks={onAddTaskTeks}
                onEditTaskTime={onEditTaskTime}
                onEditTaskPriority={onEditTaskPriority}
                onEditTaskDescription={onEditTaskDescription}
                subTask={subTask}
                onAddSubTask={onAddSubTask}
                onToggleCheckSubTask={onToggleCheckSubTask}
                labelTask={labelTask}
                dataLabel={dataLabel}
                onDeleteLabelTask={onDeleteLabelTask}
                onAddLabelTask={onAddLabelTask}
                onDeleteSubTask={onDeleteSubTask}
            />}
        </div>
    )
}

