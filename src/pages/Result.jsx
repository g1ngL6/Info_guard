import React from 'react'
import { useLocation } from 'react-router-dom'
import TrustScore from '../components/TrustScore'

export default function Result(){
  const { state } = useLocation()
  const result = state?.result
  if(!result) return <div className="max-w-4xl mx-auto">No result to show. Try submitting a claim first.</div>

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
      <div className="col-span-2 bg-white rounded-lg shadow p-6">
        <h3 className="text-sm text-slate-500">CLAIM ANALYSIS</h3>
        <h2 className="text-xl font-bold mt-2">{result.claim}</h2>
        <div className="mt-4">
          <h4 className="font-semibold">Why we think this</h4>
          <p className="mt-2 text-slate-600">{result.explanation}</p>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">Key Claims Found</h4>
          <div className="mt-3 space-y-3">
            {result.keyClaims.map(k=> (
              <div key={k.id} className="p-3 border rounded flex justify-between items-center">
                <div>
                  <div className="font-medium">{k.text}</div>
                  <div className="text-xs text-slate-400">Sources: {k.sources}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{k.score}/100</div>
                  <div className="text-xs text-slate-500">{k.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">Sources Used</h4>
          <div className="mt-3 space-y-3">
            {result.sources.map(s=> (
              <div key={s.id} className="p-3 border rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">{s.name} <span className="text-xs text-slate-400">({s.type})</span></div>
                    <div className="text-xs text-slate-400">{s.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">Reliability: {(s.reliability||0.9)*100}%</div>
                    <a href={s.url} target="_blank" rel="noreferrer" className="mt-2 inline-block px-3 py-1 bg-slate-100 rounded text-sm">View Source</a>
                  </div>
                </div>
                <div className="mt-2 text-sm text-slate-600">{s.snippet}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <aside className="bg-white rounded-lg shadow p-6">
        <TrustScore score={result.score} label={result.status} />
        <div className="mt-6">
          <button className="w-full px-4 py-2 mt-3 bg-red-600 text-white rounded">Flag This Content</button>
        </div>
      </aside>
    </div>
  )
}
