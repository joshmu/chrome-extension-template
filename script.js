changeElem(document.body)

// recursive function to chech all nodes
function changeElem(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(changeElem)
  } else {
    // do something awesome to the element...
    // like... manipulate mentions of "josh mu"
    if (element.nodeType === Text.TEXT_NODE) {
      const found = element.textContent.match(/josh mu/gi)
      if (found) {
        const newElem = document.createElement('span')
        newElem.innerHTML = element.textContent.replace(
          /josh mu/gi,
          `<span class="chrome-extension-style">JOSH 🐮MOOOOO!</span>`
        )
        element.replaceWith(newElem)
      }
    }
  }
}
