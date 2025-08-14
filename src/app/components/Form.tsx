"use client"

import { useState } from "react"

const Form = () => {
    const [tono, setTono] = useState("")
    const [topic, setTopic] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target
        alert(`Busca ${topic} ${tono}`)
    }

    return(
        <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center py-4 items-center gap-4">
                <label htmlFor="tono">Tono</label>
                <select name="tono" id="tono" className="text-slate-100 bg-amber-700 py-2 px-4 rounded-lg outline-0" onChange={(e) => setTono(e.target.value)}>
                <option value="">-Seleccione un tono-</option>
                <option value="1">Divertido</option>
                <option value="2">Para Dormir</option>
                <option value="3">Excepcionante</option>
              </select>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-2">
                  <label className="text-start" htmlFor="topic">Introduce el tipo de historia</label>
                  <textarea name="topic" id="topic" cols={30} rows={3} className="text-slate-100 bg-amber-700 py-2 px-4 rounded-lg outline-0" onChange={(e) => setTopic(e.target.value)}>
                  </textarea>
                </div>
                <div >
                    <input type="submit" value="Enviar" className="bg-amber-600 hover:bg-amber-700 cursor-pointer rounded-lg py-2 px-4 my-4" />
                </div>
              </div>
              
              <div className="result-section mt-6">
                <h2>Historia:</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi voluptas facere consequuntur aliquam quidem? Aliquam libero provident ut dicta quos voluptas vitae error, eius reiciendis iusto placeat. Optio, velit laboriosam nam quod eius distinctio animi perferendis alias sapiente. Odit dolorem provident eaque ullam, molestias tenetur omnis facere ratione velit aperiam quibusdam. Quaerat quasi iste repellendus enim dolores iusto vero eveniet sint. Autem, obcaecati cum! Minima commodi, laborum assumenda et tempora perferendis amet praesentium nesciunt, libero quod enim corporis, adipisci aliquam quam? Ut eaque laudantium placeat, necessitatibus esse eum tempora cumque ratione nostrum voluptatibus vel animi quibusdam, amet molestias eos.</p>
              </div>
            </form>
          </div>
    )
}
export default Form