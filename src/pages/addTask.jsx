import { useState } from "react"

export default function AddTask({ dataLabel, onAddTask, onAddLabelTask }) {

    const [namaTugas, setNamaTugas] = useState("");
    const [tanggal, setTanggal] = useState("");
    const [waktu, setWaktu] = useState("");
    const [keteranganInput, setKeterangan] = useState("");
    const [label, setLabel] = useState("");
    const [priority, setPriority] = useState("")

    function addTaskNew(e) {
        e.preventDefault();

        if (tanggal < Date.now() || !namaTugas || !tanggal) return;
        const newPriority = priority === "" ? "3" : priority
        const id = Date.now()
        var newTask = {
            id: id,
            text: namaTugas,
            tanggal: tanggal,
            waktu: waktu,
            keterangan: keteranganInput,
            prioritas : newPriority
        }
        
        onAddTask(newTask)
        alert("tugas berhasil dimasukan")
        if (label === "") return;
        onAddLabelTask(id, label)
    }



    return (
        <div className="w-[90%] md:w-[450px] h-auto bg-sky-400 p-6 mx-8 rounded-md">
            <form action="" onSubmit={(e) => addTaskNew(e)}>
                <h1 className="text-xl font-semibold text-sky-600 mb-8">Tambah Tugas</h1>
                <div className="container flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="pl-2 text-sm pointer-events-none">Nama Tugas</span>
                        <input type="text" className="input-task" value={namaTugas} onChange={(e) => setNamaTugas(e.target.value)} />
                    </div>
                    <div className="flex w-full justify-between gap-3">
                        <div className="w-[60%] flex flex-col gap-2" >
                            <span className="pl-2">Tanggal</span>
                            <input type="date" name="" id="" className="input-task" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
                        </div>
                        <div className="w-[40%] gap-2 flex flex-col">
                            <span className="pl-2">Waktu</span>
                            <input type="time" className="input-task" value={waktu} onChange={(e) => setWaktu(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="pl-2">Keterangan</span>
                        <input type="text" className="input-task" value={keteranganInput} onChange={(e) => setKeterangan(e.target.value)} />
                    </div>
                    <div className="flex w-full gap-3 items-center">
                        <div className="w-[35%]">
                            <span className="pl-2">Label</span>
                            <select name="" value={label} onChange={(e) => setLabel(e.target.value)} className="w-full px-4 py-2 rounded-full outline-none bg-sky-300">
                                <option value="">--Pilih Label--</option>
                                {dataLabel.map((label) => (
                                    <option key={label.id}>{label.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-[60%]">
                            <span className="pl-2">Prioritas</span>
                            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="w-full px-4 py-2 rounded-full outline-none bg-sky-300" name="" id="">
                                <option value="">--Pilih Priority--</option>
                                <option value="1">Tinggi</option>
                                <option value="2">Sedang</option>
                                <option value="3">Rendah</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button className="px-4 mt-8 py-2 bg-sky-300 rounded-full text-white">Submit</button>
            </form>
        </div>
    )
}