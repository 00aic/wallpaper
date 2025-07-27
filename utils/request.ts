interface Data {
	errCode : number
	errMsg : string
}


const baseURL = 'https://tea.qingnian8.com/api/bizhi';

export function request(config : UniApp.RequestOptions = { url: '' }) {
	let { url, data = {}, header = {}, method = "GET" } = config
	header['access-key'] = "abc123"
	url = baseURL + url
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			data,
			header,
			method,
			success: (res : UniApp.RequestSuccessCallbackResult) => {
				const data = res.data as Data
				if (data.errCode === 0) {
					resolve(data)
				} else if (data.errCode === 400) {
					uni.showModal({
						title: "错误提示",
						content: data.errMsg,
						showCancel: false
					})
					reject(data)
				}
				else {
					uni.showToast({
						title: data.errMsg,
						icon: "none"
					})
					reject(data)
				}
			},
			fail: (err) => {
				reject(err)
			}

		})
	})
}