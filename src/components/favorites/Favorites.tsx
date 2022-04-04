import React, { useState, Dispatch, SetStateAction } from 'react';
import { string } from 'yup';

import { profile } from '../../data/Data';
import { IFavorites } from '../../interface/Interface';

const defualtprofile = require('../../assets/images/defaultprofile.jpg');

interface IProps {
	setShiftFavorites: Dispatch<SetStateAction<IFavorites>>;
	shiftFavorites: IFavorites;
	setPostView: Dispatch<SetStateAction<string>>;
	setTogglePostModal: Dispatch<SetStateAction<boolean>>;
}

const Favorites: React.FC<IProps> = ({
	setShiftFavorites,
	shiftFavorites,
	setPostView,
	setTogglePostModal,
}) => {
	return (
		<div>
			<div className='modalTitleBlock'>
				<div className='modalCreatePostTitle'>Add Favorites</div>

				<span
					className='closeModal'
					onClick={() => {
						setTogglePostModal(false);
					}}
				>
					X
				</span>
			</div>
			<div className='flexColumn'>
				{profile.favoritesArr.map((favorites, index) => {
					return (
						<>
							<div className='favoritesContainer'>
								<div className='flexAlignCenter'>
									<div
										style={{
											display: 'flex',
											justifyContent: 'space-between',
											alignContent: 'center',
										}}
									>
										<div>
											<img
												className='requestImg'
												src={
													favorites.profilePhoto
														? favorites.profilePhoto
														: defualtprofile
												}
											/>
										</div>
										<div className='favoritesContainerText'>
											<p className='favoritesText'>{favorites.name}</p>
										</div>
									</div>
								</div>
								<div className='flexAlignCenter'>
									<div>
										{shiftFavorites.some(
											(fav) => fav.userId === favorites.userId
										) && <div className='shiftStatusBox'>Favorite</div>}
									</div>
									<div>
										{!shiftFavorites.some(
											(fav) => fav.userId === favorites.userId
										) && (
											<div
												className='homeCalendarCreatePostEmpAdd'
												onClick={() => {
													if (shiftFavorites?.length > 0) {
														return setShiftFavorites((favs) => [
															...favs,
															favorites,
														]);
													}
													return setShiftFavorites([
														...shiftFavorites,
														favorites,
													]);
												}}
											>
												<div>Add</div>
											</div>
										)}
										{shiftFavorites.some(
											(fav) => fav.userId === favorites.userId
										) && (
											<div
												className='homeCalendarCreatePostEmp'
												onClick={() => {
													setShiftFavorites((shiftFav) =>
														shiftFav.filter(
															(fav) => fav.userId !== favorites.userId
														)
													);
												}}
											>
												<div>Remove</div>
											</div>
										)}
									</div>
								</div>
							</div>
							{profile.favoritesArr.length - 1 !== index && (
								<div className='favoritesDivider'></div>
							)}
						</>
					);
				})}
				<div style={{ marginTop: '1.5rem', margin: 'auto' }}>
					<div className='acceptButton' onClick={() => setPostView('Post')}>
						Accept
					</div>
				</div>
			</div>
		</div>
	);
};

export default Favorites;
