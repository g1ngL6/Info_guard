import React from 'react'

function TrustRing({ score = 78, size = 140 }){
  const stroke = 12
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score/100) * circumference
  let color = 'text-green-500'
  let label = 'Likely True'
  if(score >= 80) { color='text-green-500'; label='Likely True' }
  else if(score >= 50) { color='text-yellow-500'; label='Needs More Context' }
  else if(score >= 20) { color='text-orange-500'; label='Suspicious' }
  else { color='text-red-500'; label='Likely False' }

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id="g1" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <circle cx={size/2} cy={size/2} r={radius} stroke="#eef2ff" strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={radius} stroke="url(#g1)" strokeWidth={stroke} fill="none" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="font-semibold" style={{fontSize: '20px'}}>{score}/100</text>
      </svg>
      <div className={`mt-2 text-sm font-medium ${color}`}>{label}</div>
    </div>
  )
}

export default function TrustScore({score, label}){
  return (
    <div className="p-4 bg-white rounded-lg shadow flex items-center gap-6">
      <TrustRing score={score} />
      <div>
        <div className="text-sm text-slate-500">Veracity Score</div>
        <div className="text-lg font-semibold">{label || (score>=80? 'Likely True' : score>=50? 'Needs More Context' : score>=20? 'Suspicious' : 'Likely False')}</div>
        <p className="text-sm text-slate-400 mt-2">Explanation: This score combines source reliability, evidence relevance, and model confidence. See details below.</p>
      </div>
    </div>
  )
}
