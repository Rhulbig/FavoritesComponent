export type IProfile = {
	_id: string;
	user: string;
	usertype: string;
	bio: string;
	name: string;
	address: string;
	image: [];
	supervisor: {
		name: string;
		_id: string;
		email: string;
		phoneNumber: string;
	}[];
	favoritesArr: {
		_id: string;
		userId: string;
		name: string;
		profilePhoto?: string;
	}[];
};
export type IFavorites = {
	userId: string;
	profilePhoto?: string;
}[];
