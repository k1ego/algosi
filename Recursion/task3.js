function max(arr) {
	if (arr.length === 2) {
		return arr[0] > arr[1] ? arr[0] : arr[1]
	}
	let sub_max = max(arr.slice(1))
	return sub_max > arr[0] ? sub_max : arr[0]
}

console.log(max([9, 2, 3, 4, 5]))

