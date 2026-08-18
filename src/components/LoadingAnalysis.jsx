import React, {useEffect, useState} from 'react'

const messages = [
  'Scanning claim...',
  'Searching trusted sources...',
  'Comparing evidence...',
  'Generating explanation...'
]

export default function LoadingAnalysis(){
  const [index, setIndex] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setIndex(i=> (i+1)%messages.length), 1400)
    return ()=> clearInterval(t)
  },[])
  return (
    <div className="mt-4 p-4 bg-slate-50 rounded flex items-center gap-4">
      <div className="h-10 w-10 rounded-full bg-ign-accent animate-pulse" />
      <div>
        <div className="font-medium">{messages[index]}</div>
        <div className="text-xs text-slate-400">This may take a few seconds — thanks for your patience.</div>
      </div>
    </div>
  )
}
