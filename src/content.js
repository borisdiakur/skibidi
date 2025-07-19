function skibidi() {
  let v = new URLSearchParams(location.search).get('v')

  if (!v) {
    const href = Array.from(document.querySelectorAll('a[href*="www.youtube.com/watch"]:has(h1)'))
      .at(-1)
      ?.getAttribute('href')
    if (!href) return

    v = new URL(href).searchParams.get('v')
  }

  if (!v) return

  const vids = document.querySelectorAll('video')

  vids.forEach((vid) => {
    try {
      vid.pause()
      vid.muted = true
      vid.volume = 0
      vid.currentTime = 0
    } catch (err) {
      console.warn('Skibidi failed to shut up ad.', err)
    }
  })

  const html = `
    <!DOCTYPE html>
    <html lang="en" style="height: 100%">
      <head>
        <meta charset="UTF-8">
        <title>${document.title}</title>
      </head>
      <body style="width: 100%; height: 100%; background: #222222; padding: 0; margin: 0">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${v}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border: 0"></iframe>
      </body>
    </html>
  `

  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  window.open(url, '_blank')
}

chrome.runtime.onMessage.addListener((msg) => {
  switch (msg.action) {
    case 'skibidi':
      skibidi()
      break
  }
})
