import { useState } from "react"
import ContainerSearch from "../containerSeacrh"

const Navbar = ({ selectSort, searchTask, childData, setChildData, dataLabel, setToggleDisplay }) => {

    const [search, setSearch] = useState("")
    const [searchList, setSearchList] = useState([])
    const [selectDefault, setSelectDefault] = useState("")
    const [selectLabel, setSelectLabel] = useState("")

    if (selectDefault === "" && selectLabel === "") {
        setSelectDefault("default")
        selectSort("default")
    }

    function searchSystem(e) {
        e.preventDefault()
        setSearchList(searchTask(search))
    }

    return (
        <div className="w-full py-8 md:flex md:items-center gap-6 justify-between  px-4">
            <div className="pl-6 pb-6 md:pb-0">
                <h1 className='text-4xl md:text-5xl font-semibold text-primaryColor'>To Do List</h1>
                <span className='pl-3 text-sky-300'>By iqbal</span>
            </div>
            <select className="input-select" value={selectLabel} onChange={(e) => {
                selectSort(e.target.value)
                setSelectLabel(e.target.value)
                setSelectDefault("")
            }}>
                <option value="">--pilih label--</option>
                {dataLabel.map((label, index) => (
                    <option key={index} value={label.name}>{label.name}</option>
                ))}
            </select>
            <select className="input-select mt-6 md:mt-0" value={selectDefault} onChange={(e) => {
                selectSort(e.target.value)
                setSelectDefault(e.target.value)
                setSelectLabel("")
            }}>
                <option value="">--Pilih Urutan--</option>
                <option value="default">Default</option>
                <option value="waktu">Waktu</option>
                <option value="huruf">Huruf</option>
                <option value="ceklis">Ceklis</option>
            </select>
            <div className="flex items-center pt-6 md:pt-0">
                <div className="flex gap-6 items-center pr-8">
                    <div className="relative">
                        <form onSubmit={(e) => searchSystem(e)}>
                            <input type="search" className="input-select"
                                value={search} onChange={(e) => setSearch(e.target.value)} />
                        </form>
                        {search !== "" && <ContainerSearch
                            searchList={searchList}
                            setChildData={setChildData}
                            setSearch={setSearch}
                            setToggleDisplay={setToggleDisplay}
                        />}
                    </div>
                    <span className="text-4xl cursor-pointer">&#9680;</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar