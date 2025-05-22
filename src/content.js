function skibidi() {
  let v = new URLSearchParams(location.search).get('v')
  
  if (!v) {
    const href = Array.from(document.querySelectorAll('a[href*="www.youtube.com/watch"]:has(h1)')).at(-1)?.getAttribute('href')
    if (!href) return
    
    v = new URL(href).searchParams.get('v')
  }
  
  if (!v) return
  
  document.documentElement.innerHTML = `
    <head>
      <meta charset="UTF-8">
      <title>${document.title}</title>
    </head>
    <body style="width: 100%; height: 100%; background: #222222">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${v}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </body>
  `
  document.documentElement.style.height = '100%'
}

chrome.runtime.onMessage.addListener((msg) => {
  switch (msg.action) {
    case 'skibidi':
      skibidi()
      break
  }
})

