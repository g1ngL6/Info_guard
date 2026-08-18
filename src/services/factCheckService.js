export default {
  checkClaim: (input) => {
    return new Promise((resolve)=>{
      // return mock result after delay
      setTimeout(()=>{
        resolve({
          claim: input,
          score: 78,
          status: 'Likely True',
          explanation: 'Multiple reliable sources support the main claim. However, some versions of the claim exaggerate the effect.',
          keyClaims: [
            { id:1, text: 'Social media usage has increased among young people.', score:82, status:'Likely True', sources:4 },
            { id:2, text: 'Everyone who uses social media develops anxiety.', score:31, status:'Misleading', sources:2 }
          ],
          sources: [
            { id: 'who', name: 'World Health Organization', type: 'Organization', reliability: 0.92, date: '2023-05-01', snippet: 'WHO reports show ...', url: 'https://who.int' },
            { id: 'reuters', name: 'Reuters', type: 'News', reliability: 0.9, date: '2024-01-15', snippet: 'Reuters analysis found ...', url: 'https://reuters.com' }
          ]
        })
      }, 1800)
    })
  }
}
