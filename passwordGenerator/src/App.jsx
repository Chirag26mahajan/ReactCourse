import { useState,useCallback,useEffect,useRef} from 'react'

function App() {
  const [length,setLength] = useState(8)
  const[numAllowed,setNumAllowed] = useState(false)
  const[charAllowed,setcharAllowed] = useState(false)
  const[password,setPassword] = useState("")


  //useRef hook
   const passwordRef = useRef(null) //ref humne use kiya hai taki effect a paye
  //useCallback(fn,dependencies)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="~!@#$%^&*(){}[]`"
    
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword]) //password deta then infinite loop me he jayega ye so thats why i wrote setPassword

  const copyPasswordToClipBoard = useCallback(()=>{
    //hover effect ke liye ref liya hai
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },
[password])

 useEffect(()=>{
  passwordGenerator()
 },[length,numAllowed,charAllowed,passwordGenerator])
  return (

       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'> 
       <h1 className='text-4xl text-centre text-white my-3'>Password Generator</h1>
       <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
       <input
        type='text'
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder='password'
        readOnly
         
         />
         <button onClick={copyPasswordToClipBoard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-centre gap-x-1'>
          <input type='range' min={6} max={100} value={length} className='cursor-pointer ' onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length:{length}</label>
        </div>
        <div className='flex items-centre gap-x-1'>
          <input type='checkbox' defaultChecked={numAllowed} id='numberInput' onChange={()=>{
            setNumAllowed((prev)=>!prev);
          }}/>
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-centre gap-x-1'>
          <input type='checkbox' defaultChecked={charAllowed} id='characterInput' onChange={()=>{
          setcharAllowed((prev)=>!prev);
          }}/>
          <label htmlFor='characterInput'>Characters</label>
        </div>        
      </div>
     </div>

  )
}

export default App
