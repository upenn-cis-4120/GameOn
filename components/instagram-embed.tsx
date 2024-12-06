'use client'

import { useEffect, useRef } from 'react'

interface InstagramEmbedProps {
  url: string
}

export function InstagramEmbed({ url }: InstagramEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true

    const container = containerRef.current
    if (container) {
      container.innerHTML = ''
      const post = document.createElement('blockquote')
      post.className = 'instagram-media'
      post.setAttribute('data-instgrm-permalink', url)
      post.setAttribute('data-instgrm-version', '14')
      container.appendChild(post)
      container.appendChild(script)
    }

    return () => {
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [url])

  return <div ref={containerRef} className="instagram-embed aspect-square w-full overflow-hidden" />
}

