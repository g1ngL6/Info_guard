import React from 'react'

export default function Learn(){
  const modules = [
    {id:1, title:'How Fake News Works', time:'5 min', diff:'Beginner', progress:40},
    {id:2, title:'Spotting Clickbait', time:'5 min', diff:'Beginner', progress:60},
    {id:3, title:'Reverse Image Search', time:'8 min', diff:'Intermediate', progress:0}
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Become Misinformation-Proof</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {modules.map(m=> (
          <div key={m.id} className="bg-white rounded shadow p-4">
            <div className="font-semibold">{m.title}</div>
            <div className="text-sm text-slate-400">{m.time} • {m.diff}</div>
            <div className="mt-2 w-full bg-slate-100 h-2 rounded"><div style={{width: m.progress+'%'}} className="h-2 bg-ign-accent rounded"></div></div>
            <button className="mt-3 px-3 py-1 bg-ign-navy text-white rounded">Start</button>
          </div>
        ))}
      </div>
    </div>
  )
}
