'use client'

import { useEffect, useRef } from 'react'

interface XEmbedProps {
  url: string
}

export function XEmbed({ url }: XEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true

    const container = containerRef.current
    if (container) {
      container.innerHTML = ''
      const tweet = document.createElement('blockquote')
      tweet.className = 'twitter-tweet'
      tweet.setAttribute('data-dnt', 'true')
      tweet.setAttribute('data-theme', 'light')
      const anchor = document.createElement('a')
      anchor.href = url
      tweet.appendChild(anchor)
      container.appendChild(tweet)
      container.appendChild(script)
    }

    return () => {
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [url])

  return <div ref={containerRef} className="x-embed aspect-square w-full overflow-hidden" />
}

