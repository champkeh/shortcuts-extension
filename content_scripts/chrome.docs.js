(() => {
    if (window.__docs_installed) {
        return
    }
    window.__docs_installed = true

    window.addEventListener('keyup', event => {
        if (event.key === '/') {
            focusSearchBox()
        } else if (event.key === 'Escape') {
            blurSearchBox()
        }
    })
})()

function focusSearchBox() {
    const searchInput = document.querySelector('.search-box__inner input')
    searchInput.focus()
}
function blurSearchBox() {
    const searchInput = document.querySelector('.search-box__inner input')
    searchInput.blur()
}
