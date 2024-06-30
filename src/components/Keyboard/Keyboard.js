const keys1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const keys2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const keys3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

function Keyboard() {
  return (
    <>
      <div className="keyboard">
        {keys1.map((it) => (
          <span key={it}>{it}</span>
        ))}
      </div>
      <div className="keyboard">
        {keys2.map((it) => (
          <span key={it}>{it}</span>
        ))}
      </div>
      <div className="keyboard">
        {keys3.map((it) => (
          <span key={it}>{it}</span>
        ))}
      </div>
    </>
  )
}

export default Keyboard
