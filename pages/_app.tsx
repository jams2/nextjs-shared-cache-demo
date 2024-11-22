import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      <style jsx global>{`
        .page-transition {
          opacity: ${isLoading ? 0 : 1};
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>
      <div className="page-transition">
        <Component {...pageProps} />
      </div>
    </>
  )
}
