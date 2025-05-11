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
					window.scrollTo(0, restoreY)
					observer.disconnect()
					resolve()
				}, 50)
			}
		})

		observer.observe(document.body, { childList: true, subtree: true })
	})
}

export const scrollTop = () => {
	setTimeout(() => {
		window.scrollTo(0, 0)
	}, 50)
}
