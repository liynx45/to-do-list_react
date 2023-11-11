import { Children, useEffect, useState } from 'react'
import React from 'react'
import Sidebar from './components/navbar/sidebar'
import { BrowserRouter as Router, Routes, Route, json } from 'react-router-dom'
import Dashbord from './pages/dashbord'
import AddTask from './pages/addTask'
import Label from './pages/label'
import Navbar from './components/navbar/navbar'
import Setting from './pages/setting'

// const taskList = [
//   {
//     id: 1,
//     text: "tesk text 1",
//     pass: false,
//     tanggal: "20-10-2023",
//     waktu: "13:20",
//     keterangan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente accusantium quae tempore nam labore vero atque at.",
//     prioritas: "3"
//   },
//   {
//     id: 2,
//     text: "tesk text 2",
//     pass: true,
//     tanggal: "20-10-2023",
//     waktu: "10:20",
//     keterangan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente accusantium quae tempore nam labore vero atque at.",
//     prioritas: "1"
//   },
//   {
//     id: 3,
//     text: "tesk text 3",
//     pass: true,
//     tanggal: "23-10-2023",
//     waktu: "12:20",
//     keterangan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente accusantium quae tempore nam labore vero atque at.",
//     prioritas: "2"
//   },
//   {
//     id: 4,
//     text: "tesk text 4",
//     pass: false,
//     tanggal: "23-10-2023",
//     waktu: "21:20",
//     keterangan: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sapiente accusantium quae tempore nam labore vero atque at.",
//     prioritas: "1"
//   }
// ]

// const dataLabel = [
//   {
//     id: 1,
//     name: "rumah",
//   },
//   {
//     id: 3,
//     name: "Kuliah",
//   },
//   {
//     id: 2,
//     name: "New Label"
//   }
// ]

// const subTaskList = [
//   {
//     id: 1,
//     id_task: 1,
//     text: "Sub task 1",
//     pass: false
//   },
//   {
//     id: 2,
//     id_task: 1,
//     text: "Sub task 2",
//     pass: true
//   }
// ]

// const labelTasklist = [
//   {
//     id: 1,
//     id_task: 1,
//     label: "rumah"
//   },
//   {
//     id: 2,
//     id_task: 2,
//     label: "Kuliah"
//   },
//   {
//     id: 4,
//     id_task: 1,
//     label: "Kuliah"
//   }
// ]


function App() {

  const getLocal = (item) => {
    const taskListLocal = localStorage.getItem(item);
    if (taskListLocal) {
      return JSON.parse(taskListLocal)
    } else {
      return []
    }
  }

  const [task, setTask] = useState(getLocal("taskList"))
  const [label, setLabel] = useState(getLocal("dataLabel"))
  const [subTask, setSubTask] = useState(getLocal("subTaskList"))
  const [labelTask, setLabelTask] = useState(getLocal("labelTaskList"))
  const [selectSort, setSelectSort] = useState("default")
  const [childData, setChildData] = useState("");
  const [toggleDisplay, setToggleDisplay] = useState(false)

  useEffect(() => {

    localStorage.setItem("taskList", JSON.stringify(task));
    localStorage.setItem("dataLabel", JSON.stringify(label));
    localStorage.setItem("subTaskList", JSON.stringify(subTask));
    localStorage.setItem("labelTaskList", JSON.stringify(labelTask));
    localStorage.setItem("name", JSON.stringify(label));
  }, [task, label, subTask, labelTask]);


  const addTask = (newTask) => {
    setTask([...task, newTask])
  }

  const editTaskText = (id, val) => {
    setTask(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, text: val }
      } else {
        return task
      }
    }))
  }

  const addLabel = (newLabel) => {
    setLabel([...label, newLabel])
  }

  const addSubTask = (subText, dataId) => {
    const newSubTask = {
      id: Date.now(),
      id_task: dataId,
      text: subText,
      pass: false
    }
    setSubTask([...subTask, newSubTask])
  }

  const deleteLabelTask = (id) => {
    setLabelTask(labels => labels.filter(label => label.id !== id))
  }

  const toggleCheck = (id) => {
    setTask(tasks => tasks.map(task => task.id === id ? { ...task, pass: !task.pass } : task))
  }

  const toggleCheckSubTask = (id) => {
    setSubTask(subTasks => subTasks.map(sub => sub.id === id ? { ...sub, pass: !sub.pass } : sub))
  }

  const addLabelTask = (id, newData) => {

    const existing = labelTask.find(label => label.label === newData && label.id_task === id)
    if (existing) {
      alert("Label sudah dimasukan");
      return
    }
    const newLabel = {
      id: Date.now(),
      id_task: id,
      label: newData
    }
    setLabelTask([...labelTask, newLabel])
  }

  const editTaskTime = (id, val) => {
    setTask(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, waktu: val }
      } else {
        return task
      }
    }))
  }

  const editTaskPriority = (id, val) => {
    setTask(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, prioritas: val }
      } else {
        return task
      }
    }))
  }

  const editTaskDescription = (id, val) => {
    setTask(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, keterangan: val }
      } else {
        return task
      }
    }))
  }

  const deleteMainTask = (id) => {
    setTask(tasks => tasks.filter(task => task.id !== id))
    setSubTask(subTasks => subTasks.filter(subTask => subTask.id_task !== id))
    setLabelTask(labels => labels.filter(label => label.id_task !== id))
  }

  const searchTask = (val) => {
    const result = task.filter(tasks => tasks.text.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
    return result
  }

  const editNameLabel = (name, current) => {
    setLabel(labels => labels.map(label => {
      if (label.name === current) {
        return { ...label, name: name }
      } else {
        return label
      }
    }))
    setLabelTask(labels => labels.map(labelTask => {
      if (labelTask.label === current) {
        return { ...labelTask, label: name }
      } else {
        return labelTask
      }
    }))
  }

  const deleteLabel = (val) => {
    setLabel(labels => labels.filter(label => label.name !== val))
    setLabelTask(labels => labels.filter(label => label.label !== val))
  }

  const deleteSubTask = (id) => {
    setSubTask(subTask => subTask.filter(task => task.id !== id))
  }


  return (
    <section className='flex gap-6 w-full'>
      <Sidebar dataLabel={label} onAddLabel={addLabel} />
      <div className="container w-full flex flex-col items-center justify-center md:block">
        <Navbar
          selectSort={setSelectSort}
          searchTask={searchTask}
          childData={childData}
          setChildData={setChildData}
          dataLabel={label}
          setToggleDisplay={setToggleDisplay}
        />
        <Routes >
          <Route path='/' element={<Dashbord
            dataTask={task}
            onToggleCheck={toggleCheck}
            onAddTaskTeks={editTaskText}
            onEditTaskTime={editTaskTime}
            onEditTaskPriority={editTaskPriority}
            onEditTaskDescription={editTaskDescription}
            subTask={subTask}
            onAddSubTask={addSubTask}
            onToggleCheckSubTask={toggleCheckSubTask}
            labelTask={labelTask}
            dataLabel={label}
            onDeleteLabelTask={deleteLabelTask}
            onAddLabelTask={addLabelTask}
            onDeleteMainTask={deleteMainTask}
            selectSort={selectSort}
            childData={childData}
            setChildData={setChildData}
            setToggleDisplay={setToggleDisplay}
            toggleDisplay={toggleDisplay}
            onDeleteSubTask={deleteSubTask}
          />} />
          <Route path='/label' element={<Label
            dataLabel={label}
            onEditNameLabel={editNameLabel}
            onDeleteLabel={deleteLabel}
            onAddLabel={addLabel}
          />} />
          <Route path='/addtask' element={<AddTask
            dataLabel={label}
            onAddTask={addTask}
            onAddLabelTask={addLabelTask}
          />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </div>
    </section>
  )
}

export default App
