import React, {useState} from 'react'
import LoadingAnalysis from './LoadingAnalysis'
import { useNavigate } from 'react-router-dom'
import factCheckService from '../services/factCheckService'

const examples = [
  'Drinking cold water causes serious illness.',
  'AI will replace every software engineer.',
  'Social media apps can completely read your thoughts.'
]

export default function FactChecker(){
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleExample(text){
    setInput(text)
    setCount(text.length)
  }

  async function analyze(){
    if(!input.trim()){
      alert('Please enter a URL or claim first.')
      return
    }
    setLoading(true)
    try{
      const result = await factCheckService.checkClaim(input)
      // pass result to Result page via state
      navigate('/result', { state: { result } })
    }catch(e){
      console.error(e)
      alert("We couldn't verify this claim right now. Try again or check the sources manually.")
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-2">Is this really true?</h3>
      <p className="text-sm text-slate-500 mb-4">Paste a URL, headline, or claim and let InfoGuard investigate it.</p>
      <textarea
        value={input}
        onChange={(e)=>{setInput(e.target.value); setCount(e.target.value.length)}}
        rows={5}
        className="w-full border rounded p-3 mb-2 focus:outline-none focus:ring-2 focus:ring-ign-accent"
        placeholder="Paste a headline, URL, or social post"
      />
      <div className="flex justify-between items-center text-sm text-slate-500 mb-4">
        <div className="flex gap-2">
          <button onClick={()=>{navigator.clipboard?.readText().then(t=>{setInput(t); setCount(t.length)})}} className="px-3 py-1 bg-slate-100 rounded">Paste</button>
          {examples.map((ex)=> (
            <button key={ex} onClick={()=>handleExample(ex)} className="px-3 py-1 bg-slate-100 rounded">{ex.split(' ').slice(0,4).join(' ')}…</button>
          ))}
        </div>
        <div>{count} chars</div>
      </div>
      <div className="flex gap-3">
        <button onClick={analyze} className="px-4 py-2 bg-ign-navy text-white rounded hover:opacity-95">Analyze Claim</button>
        <button onClick={()=>{setInput(''); setCount(0)}} className="px-4 py-2 bg-slate-100 rounded">Clear</button>
      </div>

      {loading && <LoadingAnalysis/>}

      <p className="mt-4 text-xs text-slate-400">We analyze public information and minimize personal data collection.</p>
    </div>
  )
}
