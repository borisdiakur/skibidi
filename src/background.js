chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.tabs.sendMessage(tab.id, { action: 'skibidi' })
  } catch (err) {
    console.trace(err)
  }
})
