import React, { useState } from 'react'

interface IProps {
    people: {
        name: string
        age: number
        img: string
        note: string
    }[],
    setPeople: React.Dispatch<React.SetStateAction<{
        name: string;
        age: number;
        img: string;
        note: string;
    }[]>>
}

const AddToPeople: React.FC<IProps> = ({setPeople, people}) => {
    const [input, setInput] = useState({ name: "", age: "", note: "", img: "" }) 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name || !input.age || !input.img || !input.note) return;
        setPeople([...people, {name: input.name, age: Number(input.age), img: input.img, note: input.note}])
        setInput({ name: "", age: "", note: "", img: "" })
    }

    return (
        <div className="add-people">
            <input type="text" onChange={handleChange} className="add-input" name="name" value={input.name} placeholder="Name" />
            <input type="text" onChange={handleChange} className="add-input" name="age" value={input.age} placeholder="Age" />
            <input type="text" onChange={handleChange} className="add-input" name="img" value={input.img} placeholder="Url" />
            <textarea onChange={handleChange} className="add-input" name="note" value={input.note} placeholder="Note" />
            <button onClick={handleClick} className="add-button">Add to List</button>
        </div>
    )
}

export default AddToPeople