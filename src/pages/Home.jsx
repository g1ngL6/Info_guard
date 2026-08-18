import React from 'react'
import FactChecker from '../components/FactChecker'
import { mockClaims } from '../data/mockClaims'

export default function Home(){
  return (
    <div className="max-w-6xl mx-auto">
      <section className="grid md:grid-cols-2 gap-8 items-center mb-8">
        <div>
          <h1 className="text-4xl font-extrabold mb-4">Think Before You Share.</h1>
          <p className="text-lg text-slate-600 mb-6">AI-powered fact checking designed for the next generation.</p>
          <div className="flex gap-4">
            <a href="/fact-check" className="px-5 py-3 bg-ign-navy text-white rounded">Check a Claim</a>
            <a href="/learn" className="px-5 py-3 bg-slate-100 rounded">Learn to Spot Fake News</a>
          </div>
        </div>
        <div>
          <FactChecker />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-2">Your Recent Checks</h3>
          <div className="space-y-3 mt-3">
            {mockClaims.map(c=> (
              <div key={c.id} className="p-3 border rounded flex justify-between items-center">
                <div>
                  <div className="font-medium">{c.claim}</div>
                  <div className="text-xs text-slate-400">{c.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{c.score}/100</div>
                  <div className="text-xs text-slate-500">{c.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-2">Trending Claims</h3>
          <ul className="space-y-2 text-sm">
            <li>AI will replace every software engineer. — 43/100</li>
            <li>Eating chocolate before exams improves memory. — 67/100</li>
            <li>Government launches new AI law. — 91/100</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
