// save pos of specific route on scroll
export const saveScroll = (route: string) => {
	localStorage.setItem(`scroll-${route}`, window.scrollY.toString())
}

// restore the scroll pos safely after all dom and async contents were rendered.
let observer: MutationObserver
export const restoreScroll = (route: string) => {
	const restoreY = Number(localStorage.getItem(`scroll-${route}`)) || 0

	return new Promise<void>((resolve) => {
		if (observer) observer.disconnect()

		observer = new MutationObserver(() => {
			if (document.readyState === 'complete') {
				setTimeout(() => {
					window.scrollTo({
						top: restoreY,
						behavior: 'smooth',
					})
					observer.disconnect()
					resolve()
				}, 50)
			}
		})

		observer.observe(document.body, { childList: true, subtree: true })
	})
}

export const scrollTop = () => {
	requestAnimationFrame(() => {
		window.scrollTo({ top: 0, behavior: 'instant' })
	})
}
