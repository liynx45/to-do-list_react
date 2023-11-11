import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useRef } from "react"

const dataLink = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "Label",
        path: "/label"
    },
    {
        id: 3,
        name: "Tambah Tugas",
        path: "/addtask"
    },
    {
        id: 4,
        name: "Setelan",
        path: '/setting'
    }
]

const Sidebar = ({ 
    dataLabel, 
    onAddLabel 
}) => {

    const [toggle, setToggle] = useState(true)

    return (
        <nav className="fixed md:relative bg-sky-400 left-0 top-0 z-50 w-0 rounded-tr-3xl transition-all duration-500 rounded-br-3xl min-h-screen" style={toggle ? {width :'220px', paddingRight:'1.24rem', display: 'block'}: {}}>
            <div className="absolute top-[5%] right-[-25px]">
                <button className="text-white bg-sky-400 py-2 px-3 rounded-tr-2xl rounded-br-2xl" onClick={() => setToggle(!toggle)}>{toggle ? <span>&#11164;</span> : <span>&#11166;</span>}</button>
            </div>
            <div className="container transition-all duration-500 w-full overflow-hidden" style={toggle ? {opacity:1} : {opacity:0}}>
                <div className="flex flex-col w-full">
                    <h1 className="mb-[50px] p-6 pb-0 font-semibold text-xl">
                        <a href="/">to do list App</a>
                    </h1>
                    <ul className="flex flex-col gap-1 w-full">
                        {dataLink.map((link) => (
                            <LinkSide key={link.id} data={link} dataLabel={dataLabel} onAddLabel={onAddLabel} />

                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}



function LinkSide({ data, dataLabel, onAddLabel }) {

    const [label, setLabel] = useState("");

    const containerRef = useRef(null)

    function addTask(e) {
        e.preventDefault()

        const newLabel = { id: Date.now(), name: label }
        onAddLabel(newLabel)
        setLabel("")

        if (containerRef.current) {
            const newElement = containerRef.current.lastChild;
            if (newElement) {
                newElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    if (data.name === "Label") {

        return (
            <li className="w-full">
                <NavLink className={`pl-5 py-2 flex w-[90%] overflow-hidden${({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                    }`} to={data.path}><span className="min-w-[300px]">{data.name}</span></NavLink>
                <div className="flex flex-col gap-4 pl-8 mt-4 w-auto max-h-[160px] overflow-y-scroll scrollbar-hide" ref={containerRef}>
                    {dataLabel.reverse().map((label) => (
                        <span key={label.id} className="py-1  px-6 text-base rounded-md max-w-fit bg-red-400">{label.name}</span>
                    ))}
                </div>
                <form onSubmit={(e) => addTask(e)}>
                    <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Tambah Tabel +" className="bg-transparent outline-none placeholder-sky-600 pl-8 pt-2" />
                </form>
            </li>
        )
    } else {
        return (
            <li className="w-full" >
                <NavLink className={`pl-5 py-2 flex w-[90%]  overflow-hidden ${({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                    }`} to={data.path}><span className="min-w-[300px]">{data.name}</span></NavLink>
            </li>
        )
    }
}

export default Sidebar