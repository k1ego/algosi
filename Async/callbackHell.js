// promise1 – запрос всех видео
const videos = [
	{ id: 1, title: 'Топ 10 игр 2023' },
	{ id: 2, title: 'Лучшая битва в Warcraft3' },
	{ id: 3, title: 'Чем кормить кошек' },
];

// promise2 – запросить описание этого видео
const id = videos[0].id;

const description = {
	id: 1,
	title: 'Топ 10 игр 2023',
	hashTags: ['игры', '2023'],
	authorId: 55,
};

// promise3 – в описании указан автор, нужно запросить информацию по нему
const authorId = description.authorId;

const author = {
	id: 55,
	name: 'Какие-то уроки',
	videoIds: [1, 2, 3],
	shortIds: [10, 15, 33],
};

// promise4 - пытаемся получить shorts автора
const shortId = author.shortIds;

// =============================
// напишем callbackHell для вызова всех функций


function fetchAllVideos(callback) {
	setTimeout(() => {
		// fetch(videos)
		callback(videos)
	}, 10000)
}

function descriptionVideo(descId, callback) {
	setTimeout(() => {
		// fetch(descId)
		callback(description)
	}, 2000)
}

function authorInfo(authorId, callback) {
	setTimeout(() => {
		// fetch(authorId)
		callback(author)
	}, 2000)
}

function authorShort(shortId) {
	setTimeout(() => {
		console.log(shortId)
	}, 2000)
}


function main() {
	fetchAllVideos((allVideos) => {
		console.log(allVideos)

		descriptionVideo(allVideos[0].id, (descVideo) => {
			console.log(descVideo)

			authorInfo(descVideo.authorId, (author) => {
				console.log(author)

				authorShort(author.shortIds)
			})
		})
	})
}

main()

// ============================
// теперь напишем вызовы всех функций на промисах

function promise1() {
	return new Promise(resolve => {

		// fetch(videos)
		setTimeout(() => {
			resolve(videos)
		}, 1000)
	})
}

function promise2(videoId) {
	return new Promise(resolve => {

		// fetch(videoId)
		setTimeout(() => {
			resolve(description)
		}, 1000)
	})
}

function promise3(authorId) {
	return new Promise(resolve => {

		// fetch(authorId)
		setTimeout(() => {
			resolve(author)
		}, 1000)
	})
}

function promise4(shortId) {
	return new Promise(resolve => {
		// fetch(shortId)
		setTimeout(() => {
			resolve(author.shortIds)
		}, 1000)
	})
}

promise1()
	.then(videos => {
		console.log(videos)
		return promise2(videos[1].id)
	})
	.then(videoDescription => {
		console.log(videoDescription)
		return promise3(videoDescription.authorId)
	})
	.then(author => {
		console.log(author)
		return promise4(author.shortIds)
	})
	.then(shortId => {
		console.log(shortId)
	})
	.catch((message) => {
		console.error("Что то пошло не так: ", message)
	})
	.finally(() => {
		console.log('Все данные получены')
	})