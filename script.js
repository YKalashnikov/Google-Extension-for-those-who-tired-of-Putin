replaceText(document.body)

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/Putin/gi)) {
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(Putin)/gi, 'Grandpa')
      element.replaceWith(newElement)
    }
  }
}

//<span class="rainbow">$1</span>