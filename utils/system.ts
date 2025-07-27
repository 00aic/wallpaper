const systemInfo = uni.getSystemInfoSync()
const getStatusBarHeight = () => systemInfo.statusBarHeight
const getTitleBarHeight = () => {
	if (uni.getMenuButtonBoundingClientRect) {
		const { top, height } = uni.getMenuButtonBoundingClientRect()
		return (top - getStatusBarHeight()) * 2 + height
	} else {
		return 40
	}

}
const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight()

// const getLeftIconLeft = () => {
// 	// #ifdef MP-TOUTIAO
// 	const { leftIcon: { left, width } } = tt.getCustomButtonBoundingClientRect()
// 	return left + width
// 	// #endif

// 	// #ifndef MP-TOUTIAO
// 	return 0
// 	// #endif
// }

export { getStatusBarHeight, getTitleBarHeight, getNavBarHeight }