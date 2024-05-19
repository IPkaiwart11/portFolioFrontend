import React from 'react'

export default function Slider() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <iframe 
      src="https://book-selling-app.vercel.app" 
      title="External Website"
      width="80%" 
      height="80%" 
      style={{ border: 'none' }}
    ></iframe>
    <p>this is my bookselling app</p>
  </div>
  )
}
