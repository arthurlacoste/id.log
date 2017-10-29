const id = require('../index');

id.isDev(false);
id.log('No dev env');
// No output in prod env

id.isDev(true);
id.log('Dev env Hell YEAH');
// =>  2017-10-28 10:48:37 - Dev env Hell YEAH

const args = {
	id: 'goodid',
	date: true,
	separator: '🦄',
	quietMode: false,
	priority: 9  // By default, all messages > 5 are displayed
};

id(args);

id.log('Dev env Hell YEAH');
// Goodid 🦄 2017-10-28 10:48:37 🦄 Dev env Hell YEAH

if (process.env.NODE_ENV === 'production') {
	id.isDev(false);
}
id.log('What did you expect ?');
