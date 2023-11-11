import { useEffect, useState } from "react"

function Label({ dataLabel, onEditNameLabel, onDeleteLabel, onAddLabel }) {

    const [label, setLabel] = useState("")
    function addLabel(e) {

        e.preventDefault()
        const newLabel = { id: Date.now(), name: label }
        onAddLabel(newLabel)
        setLabel("")
    }

    return (
        <div className="bg-sky-400 mx-8 w-[90%] md:w-[450px] flex flex-col justify-between overflow-hidden rounded-md min-h-[80vh]">
            <div className="w-full p-4 h-full">
                <div className="flex flex-wrap justify-start gap-3">
                    {[...dataLabel].reverse().map((label, index) => (
                        <LabelList key={index} label={label} onEditNameLabel={onEditNameLabel} onDeleteLabel={onDeleteLabel} />
                    ))}
                </div>
            </div>
            <div className="bg-sky-300 p-4">
                <form onSubmit={(e) => addLabel(e)}>
                    <input type="text" className="w-full py-1 px-3 bg-transparent outline-none" placeholder="Masukan label baru..." value={label} onChange={(e) => setLabel(e.target.value)}/>
                </form>
            </div>
        </div>
    )
}

function LabelList({ label, onEditNameLabel, onDeleteLabel }) {

    const [nameLabel, setNameLabel] = useState("")
    const [currentLabel, setCurrentLabel] = useState("")

    useEffect(() => {
        setNameLabel(label.name)
        setCurrentLabel(label.name)

    }, [label])

    function editLabel(e) {
        e.preventDefault()
        onEditNameLabel(nameLabel, currentLabel)
    }

    return (
        <div className="flex bg-sky-300 rounded-md min-w-fit py-1 px-2 gap-2">
            <form onSubmit={(e) => editLabel(e)}>
                <input type="text" className="w-[90px] bg-transparent" value={nameLabel} onChange={(e) => setNameLabel(e.target.value)} />
            </form>
            <span onClick={() => onDeleteLabel(label.name)} className="cursor-pointer">&#11199;</span>
        </div>
    )
}

export default Label