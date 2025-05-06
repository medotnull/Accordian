

export const FAQ = ({curData, onToggle, isActive}) => {
    const {question, answer} = curData;
    

   
    return (
        <li>    
          <div className='accoridion-grid'>
            <p>{question}</p>
            <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
                {isActive ? "Close" : "Show"}
                </button>
          </div>
          <p>{isActive && answer}</p>
        </li>
    )
}