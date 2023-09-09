import { useState } from "react";

export default function MyWatchedList({
  myToWatchedList,
  completeMyWatchedList,
  editMyWatchedListText,
 
}) {

  const [showInput, setShowInput] = useState(false)

  return (
    <li>
      <div className="left">
        <h2
        onClick={(e) => {
          setShowInput(!showInput)
        }}
        >
          {myWatchedList.text}
        </h2>
        <input
          style={{display: showInput ? "block" : "none"}}
          type='text'
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              editMyWatchedListText(myWatchedList.id, e)
              setShowInput(false)
            }
          }}
      >
  </input>
      </div>

      <label className='middle'>
        Complete
        <input
        type='checkbox'
        checked={myWatchedList.completeMyWatchedList}
        onChange={(e) => {
          completeMyWatchedList(myWatchedList.id, e)
        }}
        />
      </label>
    </li>
  
  )
}

