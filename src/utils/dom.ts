const setTheme = (theme: string) => {
  const body = getBody()
  switch (theme) {
    case "BRIGHT":
      removeClass(body, "dark-theme")
      addClass(body, "bright-theme")
      break
    case "DARK":
      removeClass(body, "bright-theme")
      addClass(body, "dark-theme")
      break
    default:
      throw new Error(`Unexpected theme ${theme}`)
  }
}

const addClass = (element: HTMLElement, className: string) => {
  element.classList.add(className)
}

const removeClass = (element: HTMLElement, className: string) => {
  element.classList.remove(className)
}

const getBody = (): HTMLElement => {
  const body = document.querySelector("body")
  if (!body) {
    throw new Error("FATAL: There is no body!!!")
  }
  return body
}

export { setTheme }
