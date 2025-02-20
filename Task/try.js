/*
Необходимо сделать вызовы к внешнему API мессенджера, 
чтобы получить данные, нужные для отрисовки пользовательского UI.
Если не смогли получить токен – не нужно пытаться 
получить другую информацию.
Если какой-то из запросов, кроме `logIn`, выполнится с ошибкой, 
то нужно вернуть undefined вместо данных.

Нужно вернуть объект следующего вида:
{
    username,
    avatar,
    chats,
    messages // список сообщений для первого чата, если есть хотя бы один чат
}
*/

function logIn() {}; // returns Promise with token
function getChats(token) {}; // returns Promise with permissions
function getUsername(token) {}; // returns Promise with username
function getAvatar(token) {}; // returns Promise with image
function getMessages(token, chatId) {}; // returns Promise with messages

function request() {
	return logIn()
			.then((token) => {
					return Promise.all([
							Promise.resolve(token),
							getChats(token)
									.then((chats) => {
											// TODO: здесь можно вызывать getMessages и это будет оптимальнее
									})
									.catch(() => void 0),
							getUsername(token).catch(() => void 0),
							getAvatar(token).catch(() => void 0)
					]);
			})
			.then(([token, chats, username, avatar]) => {
					if (chats?.length) {
							return Promise.all([
									getMessages(token, chats[0]).catch(() => void 0),
									Promise.resolve([chats, username, avatar])
							]);
					}
					return [[], [chats, username, avatar]];
			})
			.then(([messages, [chats, username, avatar]]) => {
					return { username, avatar, chats, messages };
			});
}