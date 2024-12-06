'use client'

import { useEffect, useRef } from 'react'

interface FacebookEmbedProps {
  url: string
}

export function FacebookEmbed({ url }: FacebookEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadFacebookSDK = () => {
      if (window.FB) {
        window.FB.XFBML.parse(containerRef.current)
      } else {
        window.fbAsyncInit = function() {
          window.FB.init({
            xfbml: true,
            version: 'v16.0'
          });
          window.FB.XFBML.parse(containerRef.current)
        };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s) as HTMLScriptElement; js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode!.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      }
    }

    const container = containerRef.current
    if (container) {
      container.innerHTML = `<div class="fb-post" data-href="${url}" data-width="100%" data-show-text="true"></div>`
      loadFacebookSDK()
    }

    return () => {
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [url])

  return <div ref={containerRef} className="facebook-embed aspect-square w-full overflow-hidden" />
}

