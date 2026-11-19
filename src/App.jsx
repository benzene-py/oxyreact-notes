import React, { useState } from 'react'

const App = () => {
  const [headi, setHeadi] = useState('')
  const [note, setNote] = useState('')

  const [task, setTask] = useState([])

  const submitHandle = (elem) => {
    elem.preventDefault();
    const newTask = [...task];
    newTask.push({headi,note});
    setTask(newTask);
    setHeadi('');
    setNote('');
  }
  const [hey, setHey] = useState('')
  return (
    <div className='min-h-screen bg-[#eadcb4] text-gray'>
      <form className='flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 p-6 sm:p-10'>
        <div className='flex gap-4 py-5 w-full lg:w-1/2 items-start flex-col'>
          <input
            type="text"
            placeholder='Enter Notes Heading'
            className='px-5 w-full outline-none py-2 border rounded'
            value={headi}
            onChange={(elem) => {
              setHeadi(elem.target.value);
            }}
          />
          <textarea
            type="text"
            className='px-5 outline-none w-full h-40 py-2 border rounded'
            placeholder='Write Details'
            value={note}
            onChange={(elem) => {
              setNote(elem.target.value);
            }}
          />
          <button
            className='bg-[#3e312c] text-white outline-none cursor-pointer px-5 w-full py-2 rounded-2xl active:scale-95'
            onClick={(elem) => {
              submitHandle(elem);
            }}
          >
            Add Note
          </button>
        </div>
        <img
          className='h-48 sm:h-60 lg:h-70 drop-shadow-lg object-contain'
          src="https://png.pngtree.com/png-vector/20230102/ourmid/pngtree-sticky-pastel-notes-aesthetic-smooth-color-paper-png-image_6548936.png"
          alt=""
        />
      </form>

      <div className='p-6 sm:p-10 border-t border-black/10'>
        <h2 className='text-2xl font-bold text-black mb-5'>Saved Notes</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {task.map(function(elem,idx){
              return (<div className='bg-[#f7eed3] border border-black/15 rounded-2xl p-5 shadow-md flex flex-col justify-between min-h-48'>
                <div>
                  <h3 className='text-lg font-bold text-black wrap-break-wordbreak-words'>
                    {elem.headi}
                  </h3>
                  <p className='text-sm text-gray-700 mt-2 wrap-break-word'>
                    {elem.note}
                  </p>
                </div>
              </div>)
            })}
        </div>
      </div>
    </div>
  )
}

export default App