import './App.css'
import reactLogo from './assets/react.svg'

  const disableInput = true
  const reactLogoAlt = 'React Logo'
  console.log(reactLogo)

function App2() {

  const styleA = {
    color: 'darkred',
    fontWeight: 'bold',
  }
  const styleB = {
    color: 'navy',
    textDecoration: 'underline',
  }
  const isPrimary = true

  const divStyle = {
        backgroundColor: 'lightblue',
        margin: '12px',
        padding: '20px',
        borderRadius: '8px'
      }

  return (
    
    <>
      <div style={isPrimary ? styleA : styleB}>This text hass dynamic styling.</div>
      <span style={{
        fontSize: isPrimary ? '1.5em' : '1em',
        opacity: isPrimary ? 1 : 0.5
        }}
      >
        So does this text.
      </span>


      <div style={divStyle}>
        DIV 1
      </div>
      <div style={{
        ...divStyle,
        backgroundColor: 'lightgreen',
        color: 'darkblue',
        fontWeight: 'bold',
      }}
      >
        DIV 2
      </div>

      <label htmlFor="username">Username:</label>
      <input type="text" id="username" className="input-field" autoComplete="off" 
      maxLength={20} spellCheck={true} readOnly={false} tabIndex={0} disabled={disableInput}
      placeholder={disableInput ? "(DISABLED)" : "Enter your name."}></input>
    
      <img
        src={reactLogo}
        alt={reactLogoAlt}
        width={256}
        height={128} 
      />

      <span
        style={{
          fontWeight: "bold",
          fontStyle: "italic"
        }}
      >
        Bold & Italic
      </span>

      
      
    </>

  )
}

export default App2
