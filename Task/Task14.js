module.exports = function createMeeting(config) {
	const { meetings, params } = config;
	const { from, to, persons } = params;
	
	let busyPersons = new Set();
	
	for (const meeting of meetings) {
			for (const person of persons) {
					if (meeting.person === person && !(meeting.to <= from || meeting.from >= to)) {
							busyPersons.add(person);
					}
			}
	}
	
	if (busyPersons.size > 0) {
			return {
					status: 'REJECTED',
					reason: Array.from(busyPersons).sort()
			};
	}
	
	return { status: 'CREATED' };
};