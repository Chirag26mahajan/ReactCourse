import { useState,useCallback} from 'react'

function App() {
  const [length,setLength] = useState(8)
  const[numAllowed,setNumAllowed] = useState(false)
  const[charAllowed,setcharAllowed] = useState(false)
  const[password,setPassword] = useState("")

  //useCallback(fn,dependencies)
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="~!@#$%^&*(){}[]`"
    
    for(let i=1;i<Array.length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>

       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'> 
       <h1 className='text-4xl text-centre text-white'>Password Generator</h1>
       <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
       <input
        type='text'
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder='password'
        readOnly
         />
      </div>
     </div>
    </>
  )
}

export default App
