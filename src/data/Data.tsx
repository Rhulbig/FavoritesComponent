import { IProfile } from '../interface/Interface';

export const profile: IProfile = {
	_id: '616e3b0ab785cc00166d9a79',
	user: '5ed06bf66baaf04bb8bea7c6',
	usertype: 'Employer',
	bio: 'Number one warehouse',
	name: 'Warehouse LTD',
	address: 'Vancouver Bc',
	image: [],
	supervisor: [
		{
			name: ' ryan',
			_id: '616efa41bb5c6600160ed0b9',
			email: ' rhulbig@gmail.com',
			phoneNumber: ' 6047853862',
		},
	],

	favoritesArr: [
		{
			_id: '61748b6d48e6595f048276e0',
			userId: '5f57e3222813890017c3b90e',
			name: 'Jane Doe',
		},
		{
			_id: '61748b7148e6595f048276e4',
			userId: '5f0397435a86141168bcf04c',
			name: 'Ryan Hulbig',
			profilePhoto:
				'https://firebasestorage.googleapis.com/v0/b/dentaldash-3eb9d.appspot.com/o/images%2Fdd0811fc907c99e10c9b9c5f929f5c2c.jpg?alt=media&token=60abe719-875e-42da-bc7a-8b4a5c56ea2b',
		},
		{
			_id: '61748b7148e6595f048276e3',
			userId: '5f0397435a86141168bcf04a',
			name: 'John Doe',
			profilePhoto:
				'https://firebasestorage.googleapis.com/v0/b/dentaldash-3eb9d.appspot.com/o/images%2Fpuppy-development.jpg?alt=media&token=5025a44a-0fba-439b-936d-144db5ed54cd',
		},
	],
};
